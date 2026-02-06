document.addEventListener('DOMContentLoaded', () => {
    const propertyListings = document.getElementById('property-listings');
    const carousel = document.querySelector('.carousel');
    const modal = document.getElementById('resale-modal');
    const resaleDataContainer = document.getElementById('resale-data');
    const closeButton = document.querySelector('.close-button');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const authContainer = document.getElementById('auth-container');
    const userProfile = document.getElementById('user-profile');
    const userPic = document.getElementById('user-pic');
    const userName = document.getElementById('user-name');
    const propertyChart = document.querySelector('property-chart');

    const provider = new firebase.auth.GoogleAuthProvider();

    loginBtn.addEventListener('click', () => {
        auth.signInWithPopup(provider)
            .catch(error => console.error("Login failed: ", error));
    });

    logoutBtn.addEventListener('click', () => {
        auth.signOut().catch(error => console.error("Logout failed: ", error));
    });

    auth.onAuthStateChanged(user => {
        if (user) {
            loginBtn.style.display = 'none';
            userProfile.style.display = 'flex';
            userPic.src = user.photoURL;
            userName.textContent = user.displayName;
            logoutBtn.style.display = 'block';
        } else {
            loginBtn.style.display = 'block';
            userProfile.style.display = 'none';
            logoutBtn.style.display = 'none';
        }
    });

    const sampleProperties = [
        {
            id: 'luxury-bay-residences',
            name: 'Luxury Bay Residences',
            developer: 'Elite Developers',
            image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            transactions: 'S$ 2,500 psf',
            market: 'High-income families in District 9',
            district: 9,
        },
        {
            id: 'orchard-view-apartments',
            name: 'Orchard View Apartments',
            developer: 'Prestige Group',
            image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            transactions: 'S$ 3,000 psf',
            market: 'Luxury buyers in District 10',
            district: 10,
        },
        {
            id: 'marina-sands-tower',
            name: 'Marina Sands Tower',
            developer: 'Bayfront Properties',
            image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            transactions: 'S$ 3,200 psf',
            market: 'International investors',
            district: 1,
        },
    ];

    const sampleAds = [
        { title: 'John Doe - Property Agent', description: 'Your trusted partner in real estate. Contact me for the best deals!', cta: 'Contact Agent' },
        { title: 'Orchard View Apartments', description: 'Luxury living in the heart of Singapore. Register your interest now!', cta: 'Learn More' },
        { title: 'Best Mortgage Rates', description: 'Get pre-approved for your dream home with our competitive rates.', cta: 'Calculate Now' },
        { title: 'Premium Home Services', description: 'From interior design to plumbing, we have you covered.', cta: 'Get a Quote' },
    ];

    sampleProperties.forEach(property => {
        const propertyRef = firestore.collection('properties').doc(property.id);
        propertyRef.get().then(doc => {
            if (!doc.exists) {
                propertyRef.set({ name: property.name, votes: { good: 0, fair: 0, bad: 0 } });
            }
        });

        const propertyCard = document.createElement('property-card');
        propertyCard.setAttribute('property', JSON.stringify(property));
        propertyListings.appendChild(propertyCard);
    });

    sampleAds.forEach(ad => {
        const adCard = document.createElement('ad-card');
        adCard.setAttribute('ad', JSON.stringify(ad));
        carousel.appendChild(adCard);
    });

    carousel.addEventListener('lead-submit', e => {
        const { lead } = e.detail;
        firestore.collection('leads').add(lead)
            .then(() => console.log("Lead captured: ", lead))
            .catch(error => console.error("Error capturing lead: ", error));
    });

    propertyListings.addEventListener('vote', e => {
        const { propertyId, voteType } = e.detail;
        const propertyRef = firestore.collection('properties').doc(propertyId);

        firestore.runTransaction(transaction => {
            return transaction.get(propertyRef).then(doc => {
                if (!doc.exists) { throw "Document does not exist!"; }

                const newVoteCount = (doc.data().votes[voteType] || 0) + 1;
                const newVotes = { ...doc.data().votes, [voteType]: newVoteCount };

                transaction.update(propertyRef, { votes: newVotes });
            });
        }).catch(error => console.error("Transaction failed: ", error));
    });

    const showResalePrices = (district) => {
        resaleDataContainer.innerHTML = 'Loading...';
        setTimeout(() => {
            const sampleResaleData = {
                1: [{ date: '2023-10-28', price: 'S$ 2,800,000', size: '1,200 sqft', type: '3-bedroom' }, { date: '2023-09-15', price: 'S$ 2,750,000', size: '1,180 sqft', type: '3-bedroom' }],
                9: [{ date: '2023-11-05', price: 'S$ 4,500,000', size: '1,800 sqft', type: '4-bedroom' }, { date: '2023-10-20', price: 'S$ 4,400,000', size: '1,750 sqft', type: '4-bedroom' }],
                10: [{ date: '2023-11-12', price: 'S$ 5,200,000', size: '2,000 sqft', type: 'Penthouse' }, { date: '2023-10-01', price: 'S$ 3,800,000', size: '1,600 sqft', type: '3-bedroom' }]
            };

            const data = sampleResaleData[district] || [];
            let tableHTML = `<table><thead><tr><th>Date</th><th>Price</th><th>Size</th><th>Type</th></tr></thead><tbody>`;
            if (data.length > 0) {
                data.forEach(item => { tableHTML += `<tr><td>${item.date}</td><td>${item.price}</td><td>${item.size}</td><td>${item.type}</td></tr>`; });
            } else {
                tableHTML += '<tr><td colspan="4">No resale data available for this district.</td></tr>';
            }
            tableHTML += '</tbody></table>';
            resaleDataContainer.innerHTML = tableHTML;
        }, 500);
    };

    propertyListings.addEventListener('view-resale', (e) => {
        const { district } = e.detail;
        showResalePrices(district);
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => modal.style.display = 'none');

    window.addEventListener('click', (event) => {
        if (event.target == modal) { modal.style.display = 'none'; }
    });

    darkModeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        document.documentElement.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
    });

    // Listen for vote changes and update the chart
    firestore.collection('properties').onSnapshot(snapshot => {
        let totalVotes = { good: 0, fair: 0, bad: 0 };
        snapshot.forEach(doc => {
            const votes = doc.data().votes;
            totalVotes.good += votes.good || 0;
            totalVotes.fair += votes.fair || 0;
            totalVotes.bad += votes.bad || 0;
        });

        propertyChart.updateChart({
            labels: ['Good Buys', 'Fair Buys', 'Bad Buys'],
            values: [totalVotes.good, totalVotes.fair, totalVotes.bad]
        });
    });

    document.documentElement.setAttribute('data-theme', 'dark');
});