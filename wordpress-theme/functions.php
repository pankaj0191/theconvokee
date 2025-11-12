<?php
/**
 * TheConvokee Theme Functions
 *
 * @package TheConvokee
 * @since 1.0.0
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

// Theme version
define('THECONVOKEE_VERSION', '1.0.0');

/**
 * Theme Setup
 */
function theconvokee_setup() {
    // Add default posts and comments RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails
    add_theme_support('post-thumbnails');

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'theconvokee'),
        'footer' => __('Footer Menu', 'theconvokee'),
    ));

    // Switch default core markup to output valid HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Add theme support for selective refresh for widgets
    add_theme_support('customize-selective-refresh-widgets');

    // Add support for full and wide align images
    add_theme_support('align-wide');

    // Add support for responsive embeds
    add_theme_support('responsive-embeds');

    // Add support for editor styles
    add_theme_support('editor-styles');

    // Add support for custom logo
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 300,
        'flex-height' => true,
        'flex-width'  => true,
    ));
}
add_action('after_setup_theme', 'theconvokee_setup');

/**
 * Enqueue Scripts and Styles
 */
function theconvokee_scripts() {
    // Main stylesheet
    wp_enqueue_style(
        'theconvokee-style',
        get_stylesheet_uri(),
        array(),
        THECONVOKEE_VERSION
    );

    // Custom animations CSS
    wp_enqueue_style(
        'theconvokee-animations',
        get_template_directory_uri() . '/assets/css/custom-animations.css',
        array(),
        THECONVOKEE_VERSION
    );

    // Custom JavaScript
    wp_enqueue_script(
        'theconvokee-scripts',
        get_template_directory_uri() . '/assets/js/custom-scripts.js',
        array('jquery'),
        THECONVOKEE_VERSION,
        true
    );

    // Localize script for AJAX
    wp_localize_script('theconvokee-scripts', 'theconvokeeAjax', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('theconvokee_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'theconvokee_scripts');

/**
 * Elementor Support
 */
function theconvokee_elementor_support() {
    // Add Elementor theme locations
    add_theme_support('elementor');

    // Add support for Elementor Pro locations
    add_theme_support('elementor-pro');
}
add_action('after_setup_theme', 'theconvokee_elementor_support');

/**
 * Register Elementor Locations
 */
function theconvokee_register_elementor_locations($elementor_theme_manager) {
    $elementor_theme_manager->register_all_core_location();
}
add_action('elementor/theme/register_locations', 'theconvokee_register_elementor_locations');

/**
 * Disable Elementor default colors and fonts
 */
add_action('elementor/init', function() {
    // Remove Elementor's default colors
    update_option('elementor_disable_color_schemes', 'yes');

    // Remove Elementor's default fonts
    update_option('elementor_disable_typography_schemes', 'yes');
});

/**
 * Register Widget Areas
 */
function theconvokee_widgets_init() {
    register_sidebar(array(
        'name'          => __('Footer Widget Area', 'theconvokee'),
        'id'            => 'footer-widget-area',
        'description'   => __('Footer widget area', 'theconvokee'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'theconvokee_widgets_init');

/**
 * Contact Form Handler (AJAX)
 */
function theconvokee_handle_contact_form() {
    check_ajax_referer('theconvokee_nonce', 'nonce');

    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $phone = sanitize_text_field($_POST['phone']);
    $message = sanitize_textarea_field($_POST['message']);

    // Validate email
    if (!is_email($email)) {
        wp_send_json_error(array('message' => 'Invalid email address'));
        return;
    }

    // Spam detection
    $spam_keywords = array('casino', 'viagra', 'cialis', 'porn', 'xxx', 'bitcoin', 'crypto', 'lottery', 'winner', 'congratulations');
    $message_lower = strtolower($message);

    foreach ($spam_keywords as $keyword) {
        if (strpos($message_lower, $keyword) !== false) {
            wp_send_json_error(array('message' => 'Message flagged as spam'));
            return;
        }
    }

    // Prepare email
    $to = get_option('admin_email');
    $subject = 'New Contact Form Submission - ' . get_bloginfo('name');
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n\n";
    $body .= "Message:\n$message\n";

    $headers = array(
        'Content-Type: text/plain; charset=UTF-8',
        'Reply-To: ' . $email
    );

    // Send email
    if (wp_mail($to, $subject, $body, $headers)) {
        wp_send_json_success(array('message' => 'Thank you! Your message has been sent successfully.'));
    } else {
        wp_send_json_error(array('message' => 'Failed to send message. Please try again.'));
    }
}
add_action('wp_ajax_theconvokee_contact', 'theconvokee_handle_contact_form');
add_action('wp_ajax_nopriv_theconvokee_contact', 'theconvokee_handle_contact_form');

/**
 * Custom Body Classes
 */
function theconvokee_body_classes($classes) {
    // Add class if Elementor is active
    if (did_action('elementor/loaded')) {
        $classes[] = 'elementor-page';
    }

    return $classes;
}
add_filter('body_class', 'theconvokee_body_classes');

/**
 * Excerpt Length
 */
function theconvokee_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'theconvokee_excerpt_length');

/**
 * Excerpt More
 */
function theconvokee_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'theconvokee_excerpt_more');

/**
 * Add viewport meta tag for mobile responsiveness
 */
function theconvokee_viewport_meta() {
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
}
add_action('wp_head', 'theconvokee_viewport_meta', 1);

/**
 * Disable Gutenberg editor (use Elementor instead)
 */
function theconvokee_disable_gutenberg($use_block_editor, $post) {
    // Disable for pages
    if ($post->post_type === 'page') {
        return false;
    }
    return $use_block_editor;
}
add_filter('use_block_editor_for_post', 'theconvokee_disable_gutenberg', 10, 2);
