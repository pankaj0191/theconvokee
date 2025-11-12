<?php
/**
 * The template for displaying the front page (homepage)
 *
 * @package TheConvokee
 * @since 1.0.0
 */

get_header();
?>

<main id="main-content" class="site-main front-page">
    <?php
    // Check if Elementor canvas template is active
    if (have_posts()) :
        while (have_posts()) :
            the_post();
            the_content();
        endwhile;
    endif;
    ?>
</main>

<?php
get_footer();
