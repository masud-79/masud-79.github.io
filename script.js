// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle-checkbox');
const htmlElement = document.documentElement;

// Check for saved theme preference or use user's system preference
const getCurrentTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    
    // Check if user's system is set to dark mode
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Apply the current theme
const applyTheme = (theme) => {
    htmlElement.setAttribute('data-theme', theme);
    themeToggle.checked = theme === 'dark';
    localStorage.setItem('theme', theme);
};

// Initialize theme
document.addEventListener('DOMContentLoaded', () => {
    applyTheme(getCurrentTheme());
    
    // Theme toggle event listener
    themeToggle.addEventListener('change', () => {
        const newTheme = themeToggle.checked ? 'dark' : 'light';
        applyTheme(newTheme);
    });
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a nav item
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Fixed header on scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.padding = '15px 0';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
        header.style.padding = '20px 0';
    }
});

// Add active class to nav items based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const id = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Basic validation
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            showFormMessage('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showFormMessage('Please enter a valid email address', 'error');
            return;
        }
        
        try {
            // Option 1: Using Formspree (easiest setup, no backend required)
            const response = await fetch('https://formspree.io/f/mwplvrrw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            // Option 2: Using a custom backend (if you set up one)
            // const response = await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(formData)
            // });
            
            // Simulate successful submission for demonstration
            // In a real project, uncomment one of the above options
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            if (response.ok) {
                showFormMessage('Message sent successfully! I will get back to you soon.', 'success');
                contactForm.reset();
            } else {
                showFormMessage('Failed to send message. Please try again later.', 'error');
            }
            
        } catch (error) {
            console.error('Error submitting form:', error);
            showFormMessage('An error occurred. Please try again later.', 'error');
        }
    });
}

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = type === 'success' ? 'success-message' : 'error-message';
    
    // Clear message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
        formMessage.className = '';
    }, 5000);
}

// Animation on scroll (optional enhancement)
window.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-item, .project-card, .timeline-item, .concept-card');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Add initial styles and observe elements
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
}); 