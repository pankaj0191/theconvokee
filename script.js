// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu functions
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const burgerMenu = document.querySelector('.burger-menu');
    
    navMenu.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

function closeMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    const burgerMenu = document.querySelector('.burger-menu');
    
    navMenu.classList.remove('active');
    burgerMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Modal functions
function openModal() {
    document.getElementById('contactModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('contactModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

async function handleSubmit(event) {
    event.preventDefault();
    
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    try {
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        
        const response = await fetch('contact.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (response.ok && result.success) {
            alert('Thank you for your message! We will get back to you soon.');
            event.target.reset();
            closeModal();
        } else {
            alert(result.error || 'Failed to send message. Please try again.');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to send message. Please check your connection and try again.');
    } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
}

// Close modal and mobile menu when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    const navMenu = document.getElementById('navMenu');
    const burgerMenu = document.querySelector('.burger-menu');
    
    // Close modal when clicking outside
    if (event.target == modal) {
        closeModal();
    }
    
    // Close mobile menu when clicking outside
    if (navMenu.classList.contains('active') && 
        !event.target.closest('.nav-menu') && 
        !event.target.closest('.burger-menu')) {
        closeMobileMenu();
    }
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
});

// Smooth scroll with offset for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const navbarHeight = 80; // Approximate navbar height
            const targetPosition = targetSection.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
