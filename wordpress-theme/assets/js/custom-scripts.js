/**
 * TheConvokee Custom JavaScript
 * Interactive features and animations
 *
 * @package TheConvokee
 * @since 1.0.0
 */

(function($) {
    'use strict';

    /**
     * Document Ready
     */
    $(document).ready(function() {
        initNavbarScroll();
        initMobileMenu();
        initModal();
        initScrollAnimations();
        initSmoothScroll();
        initCarousel();
        initFlipCards();
    });

    /**
     * Navbar Scroll Effect
     * Adds 'scrolled' class when user scrolls down
     */
    function initNavbarScroll() {
        const navbar = $('.navbar, .elementor-location-header');

        if (navbar.length) {
            $(window).on('scroll', function() {
                if ($(window).scrollTop() > 50) {
                    navbar.addClass('scrolled');
                } else {
                    navbar.removeClass('scrolled');
                }
            });
        }
    }

    /**
     * Mobile Menu Toggle
     * Handles burger menu click and mobile navigation
     */
    function initMobileMenu() {
        // Toggle menu on burger click
        $(document).on('click', '.burger-menu, .mobile-menu-toggle', function(e) {
            e.preventDefault();
            toggleMobileMenu();
        });

        // Close menu when clicking navigation links
        $(document).on('click', '.nav-menu a', function() {
            if ($(window).width() <= 768) {
                closeMobileMenu();
            }
        });

        // Close menu when clicking outside
        $(document).on('click', function(e) {
            const navMenu = $('.nav-menu');
            const burgerMenu = $('.burger-menu, .mobile-menu-toggle');

            if (navMenu.hasClass('active') &&
                !$(e.target).closest('.nav-menu').length &&
                !$(e.target).closest('.burger-menu, .mobile-menu-toggle').length) {
                closeMobileMenu();
            }
        });
    }

    /**
     * Toggle Mobile Menu
     */
    function toggleMobileMenu() {
        const navMenu = $('.nav-menu');
        const burgerMenu = $('.burger-menu, .mobile-menu-toggle');

        navMenu.toggleClass('active');
        burgerMenu.toggleClass('active');

        // Prevent body scroll when menu is open
        if (navMenu.hasClass('active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'auto');
        }
    }

    /**
     * Close Mobile Menu
     */
    function closeMobileMenu() {
        $('.nav-menu').removeClass('active');
        $('.burger-menu, .mobile-menu-toggle').removeClass('active');
        $('body').css('overflow', 'auto');
    }

    /**
     * Modal Functions
     * Handle contact form modal
     */
    function initModal() {
        // Open modal
        $(document).on('click', '.open-modal, .contact-button, .nav-button', function(e) {
            e.preventDefault();
            openModal();
        });

        // Close modal
        $(document).on('click', '.close-modal, .modal-close', function(e) {
            e.preventDefault();
            closeModal();
        });

        // Close modal when clicking outside
        $(document).on('click', '.modal', function(e) {
            if ($(e.target).hasClass('modal')) {
                closeModal();
            }
        });

        // Handle form submission
        $(document).on('submit', '#contactForm, .contact-form', function(e) {
            e.preventDefault();
            handleFormSubmit($(this));
        });
    }

    /**
     * Open Modal
     */
    function openModal() {
        $('#contactModal, .contact-modal').addClass('active').fadeIn(300);
        $('body').css('overflow', 'hidden');
    }

    /**
     * Close Modal
     */
    function closeModal() {
        $('#contactModal, .contact-modal').removeClass('active').fadeOut(300);
        $('body').css('overflow', 'auto');
    }

    /**
     * Handle Form Submission
     * Uses WordPress AJAX
     */
    function handleFormSubmit($form) {
        const $submitButton = $form.find('button[type="submit"]');
        const originalText = $submitButton.text();

        // Get form data
        const formData = {
            action: 'theconvokee_contact',
            nonce: theconvokeeAjax.nonce,
            name: $form.find('input[name="name"]').val(),
            email: $form.find('input[name="email"]').val(),
            phone: $form.find('input[name="phone"]').val(),
            message: $form.find('textarea[name="message"]').val()
        };

        // Update button state
        $submitButton.text('Sending...').prop('disabled', true);

        // Send AJAX request
        $.ajax({
            url: theconvokeeAjax.ajaxurl,
            type: 'POST',
            data: formData,
            success: function(response) {
                if (response.success) {
                    alert(response.data.message || 'Thank you! Your message has been sent successfully.');
                    $form[0].reset();
                    closeModal();
                } else {
                    alert(response.data.message || 'Failed to send message. Please try again.');
                }
            },
            error: function() {
                alert('Failed to send message. Please check your connection and try again.');
            },
            complete: function() {
                $submitButton.text(originalText).prop('disabled', false);
            }
        });
    }

    /**
     * Scroll Animations
     * Animate elements when they come into view
     */
    function initScrollAnimations() {
        // Check if IntersectionObserver is supported
        if ('IntersectionObserver' in window) {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        $(entry.target).addClass('in-view');
                        // Optionally unobserve after animation
                        // observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Observe elements with scroll-animate class
            $('.scroll-animate, .animate-on-scroll').each(function() {
                observer.observe(this);
            });

            // Auto-add scroll animations to sections
            $('section, .elementor-section').each(function() {
                if (!$(this).hasClass('no-animate')) {
                    $(this).addClass('scroll-animate');
                    observer.observe(this);
                }
            });
        }
    }

    /**
     * Smooth Scroll
     * Smooth scroll to anchor links with offset for fixed navbar
     */
    function initSmoothScroll() {
        $(document).on('click', 'a[href^="#"]', function(e) {
            const href = $(this).attr('href');

            // Skip empty hashes and special links
            if (href === '#' || href === '#!' || $(this).hasClass('no-scroll')) {
                return;
            }

            const $target = $(href);

            if ($target.length) {
                e.preventDefault();

                const navbarHeight = $('.navbar, .elementor-location-header').outerHeight() || 80;
                const targetPosition = $target.offset().top - navbarHeight;

                $('html, body').animate({
                    scrollTop: targetPosition
                }, 800, 'swing');

                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    }

    /**
     * Carousel Initialization
     * Duplicate slides for infinite loop effect
     */
    function initCarousel() {
        $('.carousel-track, .elementor-carousel-track').each(function() {
            const $track = $(this);
            const $slides = $track.children();

            // Clone slides for infinite loop
            if ($slides.length > 0) {
                $slides.clone().appendTo($track);
            }
        });

        // Pause animation on hover
        $('.carousel-track, .elementor-carousel-track').hover(
            function() {
                $(this).css('animation-play-state', 'paused');
            },
            function() {
                $(this).css('animation-play-state', 'running');
            }
        );
    }

    /**
     * Flip Cards
     * Add click support for mobile devices
     */
    function initFlipCards() {
        if ($(window).width() <= 768) {
            $('.flip-card-container, .service-card').on('click', function() {
                $(this).toggleClass('flipped');
            });
        }
    }

    /**
     * Parallax Effect
     * Simple parallax for images
     */
    $(window).on('scroll', function() {
        const scrolled = $(window).scrollTop();

        $('.parallax-bg').each(function() {
            const $this = $(this);
            const speed = $this.data('parallax-speed') || 0.5;
            const yPos = -(scrolled * speed);
            $this.css('transform', 'translateY(' + yPos + 'px)');
        });
    });

    /**
     * Video Background Auto-play Fix
     * Ensure videos play on page load
     */
    $(window).on('load', function() {
        $('video[autoplay]').each(function() {
            this.play().catch(function(error) {
                console.log('Video autoplay prevented:', error);
            });
        });
    });

    /**
     * Lazy Load Videos
     * Load videos when they come into view
     */
    if ('IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const video = entry.target;
                    if (video.dataset.src) {
                        video.src = video.dataset.src;
                        video.load();
                        video.play().catch(function(error) {
                            console.log('Video play prevented:', error);
                        });
                        videoObserver.unobserve(video);
                    }
                }
            });
        });

        $('video[data-src]').each(function() {
            videoObserver.observe(this);
        });
    }

    /**
     * Brand Logos Animation
     * Add hover effects to brand logos
     */
    $('.brand-logo, .elementor-brand-logo').hover(
        function() {
            $(this).css('transform', 'scale(1.1)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

    /**
     * Resize Handler
     * Re-initialize certain features on window resize
     */
    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Close mobile menu if window is resized to desktop
            if ($(window).width() > 768) {
                closeMobileMenu();
            }
        }, 250);
    });

    /**
     * Expose functions globally for inline use
     */
    window.theconvokee = {
        openModal: openModal,
        closeModal: closeModal,
        toggleMobileMenu: toggleMobileMenu,
        closeMobileMenu: closeMobileMenu
    };

})(jQuery);

/**
 * Vanilla JavaScript for critical features
 * (Works without jQuery)
 */
document.addEventListener('DOMContentLoaded', function() {

    /**
     * Add smooth scroll behavior
     */
    document.documentElement.style.scrollBehavior = 'smooth';

    /**
     * Keyboard accessibility for modal
     */
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.querySelector('.modal.active');
            if (modal && window.theconvokee) {
                window.theconvokee.closeModal();
            }
        }
    });

    /**
     * Prevent scroll on modal open
     */
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                const modal = mutation.target;
                if (modal.classList.contains('active')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = 'auto';
                }
            }
        });
    });

    document.querySelectorAll('.modal, .contact-modal').forEach(function(modal) {
        observer.observe(modal, { attributes: true });
    });
});
