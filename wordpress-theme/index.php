<?php
/**
 * The main template file
 *
 * @package TheConvokee
 * @since 1.0.0
 */

get_header();
?>

<main id="main-content" class="site-main">
    <?php
    if (have_posts()) :
        while (have_posts()) :
            the_post();
            the_content();
        endwhile;
    else :
        ?>
        <div class="no-content">
            <h1><?php _e('Nothing Found', 'theconvokee'); ?></h1>
            <p><?php _e('It seems we can\'t find what you\'re looking for.', 'theconvokee'); ?></p>
        </div>
        <?php
    endif;
    ?>
</main>

<?php
get_footer();
