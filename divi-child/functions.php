<?php
function my_theme_enqueue_styles()
{
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_script('gsap-js', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/gsap.min.js', array(), false, true);
    wp_enqueue_script('gsap-js-scroll', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js', array(), false, true);
    wp_enqueue_script('gsap-js-custom', get_stylesheet_directory_uri() . '/js/custom-gsap-scripts.js', array(), false, true);
    wp_enqueue_script('custom-scripts', get_stylesheet_directory_uri() . '/js/script.js');
}
add_action('wp_enqueue_scripts', 'my_theme_enqueue_styles');

// to upload  SVGs
// function cc_mime_types($mimes) {
//     $mimes['svg'] = 'image/svg+xml';
//     return $mimes;
//   }
//   add_filter('upload_mimes', 'cc_mime_types');