// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    try {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (!mobileMenuButton || !mobileMenu) {
            console.error('Required elements not found');
            return;
        }
        
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    } catch (error) {
        console.error('Error initializing mobile menu:', error);
    }
});

// Loading indicator
function showLoading() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.classList.add('active');
    }
}

function hideLoading() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.classList.remove('active');
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading state to all forms
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function() {
        showLoading();
    });
}); 