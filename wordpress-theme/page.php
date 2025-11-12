<?php
/**
 * The template for displaying all pages
 *
 * @package TheConvokee
 * @since 1.0.0
 */

get_header();
?>

<main id="main-content" class="site-main">
    <?php
    while (have_posts()) :
        the_post();
        the_content();
    endwhile;
    ?>
</main>

<?php
get_footer();
