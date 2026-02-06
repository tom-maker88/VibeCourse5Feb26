class PropertyCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.unsubscribe = null;
  }

  connectedCallback() {
    this.render();
    const property = JSON.parse(this.getAttribute('property'));
    this.propertyRef = firebase.firestore().collection('properties').doc(property.id);

    this.unsubscribe = this.propertyRef.onSnapshot(doc => {
        if (doc.exists) {
            this.updateVotes(doc.data().votes);
        }
    });
  }

  disconnectedCallback() {
    if (this.unsubscribe) {
        this.unsubscribe();
    }
  }

  updateVotes(votes) {
    const voteSection = this.shadowRoot.querySelector('.vote-display');
    if (votes && voteSection) {
        const totalVotes = (votes.good || 0) + (votes.fair || 0) + (votes.bad || 0);
        const goodPercentage = totalVotes > 0 ? Math.round(((votes.good || 0) / totalVotes) * 100) : 0;

        voteSection.innerHTML = `
            <span>${goodPercentage}% voted Good Buy</span>
            <span>Good: ${votes.good || 0}</span>
            <span>Fair: ${votes.fair || 0}</span>
            <span>Bad: ${votes.bad || 0}</span>
        `;
    }
  }

  render() {
    const property = JSON.parse(this.getAttribute('property'));
    this.shadowRoot.innerHTML = `
      <style>
        .property-card {
          background-color: var(--card-bg-color, #1e1e1e);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s, box-shadow 0.3s;
          animation: fadeIn 0.5s ease-in-out;
        }
        .property-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 35px rgba(0,0,0,0.4);
        }
        img { width: 100%; height: 200px; object-fit: cover; }
        .property-info { padding: 20px; }
        h3, p { color: var(--text-color, #e0e0e0); margin: 10px 0; }
        .vote-section button { background-color: #333; color: #fff; border: none; padding: 10px; margin-right: 5px; border-radius: 5px; cursor: pointer; }
        .vote-display { margin: 10px 0; font-size: 0.9em; display: flex; justify-content: space-between; }
        .view-resale { background-color: #007bff; color: #fff; border: none; padding: 10px; border-radius: 5px; cursor: pointer; display: block; width: 100%; text-align: center; margin-top: 10px; }
      </style>
      <div class="property-card">
        <img src="${property.image}" alt="${property.name}">
        <div class="property-info">
          <h3>${property.name}</h3>
          <p>by ${property.developer}</p>
          <p>Recent Transactions: ${property.transactions}</p>
          <p>Target Market: ${property.market}</p>
          <div class="vote-section">
            <button data-vote="good">Good Buy</button>
            <button data-vote="fair">Fair Buy</button>
            <button data-vote="bad">Bad Buy</button>
          </div>
          <div class="vote-display"></div>
          <button class="view-resale">View Resale Prices</button>
        </div>
      </div>
    `;

    this.shadowRoot.querySelector('.view-resale').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('view-resale', { bubbles: true, composed: true, detail: { district: property.district } }));
    });

    this.shadowRoot.querySelectorAll('.vote-section button').forEach(button => {
        button.addEventListener('click', () => {
            if (firebase.auth().currentUser) {
                const voteType = button.dataset.vote;
                this.dispatchEvent(new CustomEvent('vote', {
                    bubbles: true,
                    composed: true,
                    detail: { propertyId: property.id, voteType }
                }));
            } else {
                alert("Please log in to vote.");
            }
        });
    });
  }
}

class AdCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const ad = JSON.parse(this.getAttribute('ad'));
    this.shadowRoot.innerHTML = `
      <style>
        .ad-card {
            background-color: var(--card-bg-color, #1e1e1e);
            border-radius: 10px;
            padding: 20px;
            min-width: 250px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .ad-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 35px rgba(0,0,0,0.4);
        }
        h4, p { color: var(--text-color, #e0e0e0); }
        input { width: 90%; padding: 8px; margin-bottom: 10px; border-radius: 3px; border: 1px solid #ccc; }
        button { background-color: #007bff; color: #fff; border: none; padding: 10px; border-radius: 5px; cursor: pointer; margin-top: 10px; }
      </style>
      <div class="ad-card">
        <h4>${ad.title}</h4>
        <p>${ad.description}</p>
        <form id="lead-form">
            <input type="text" placeholder="Name" name="name" required>
            <input type="email" placeholder="Email" name="email" required>
            <button type="submit">${ad.cta}</button>
        </form>
      </div>
    `;

    this.shadowRoot.getElementById('lead-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const lead = { name: formData.get('name'), email: formData.get('email'), ad_title: ad.title };
        this.dispatchEvent(new CustomEvent('lead-submit', { bubbles: true, composed: true, detail: { lead } }));
        e.target.reset();
        alert('Thank you for your interest! We will be in touch shortly.');
    });
  }
}

class PropertyChart extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.chart = null;
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                canvas {
                    max-width: 600px;
                    margin: 0 auto;
                }
            </style>
            <canvas></canvas>
        `;
    }

    updateChart(data) {
        const canvas = this.shadowRoot.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        if (this.chart) {
            this.chart.destroy();
        }

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: '# of Votes',
                    data: data.values,
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

customElements.define('property-card', PropertyCard);
customElements.define('ad-card', AdCard);
customElements.define('property-chart', PropertyChart);