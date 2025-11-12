# TheConvokee WordPress Theme

A modern, animated WordPress theme built for TheConvokee with full Elementor support. Features video backgrounds, 3D flip cards, infinite carousels, parallax effects, and smooth animations.

![Theme Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![WordPress](https://img.shields.io/badge/WordPress-5.9%2B-blue.svg)
![Elementor](https://img.shields.io/badge/Elementor-Free%20Compatible-purple.svg)
![PHP](https://img.shields.io/badge/PHP-7.4%2B-777BB4.svg)

## 📋 Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Setup Guide](#setup-guide)
- [Theme Structure](#theme-structure)
- [Customization](#customization)
- [Animations](#animations)
- [Support](#support)

---

## ✨ Features

### Design & Layout
- ✅ **Fully Responsive** - Works perfectly on all devices
- ✅ **Video Backgrounds** - Hero section with gradient overlay
- ✅ **3D Flip Cards** - Interactive service cards with smooth transitions
- ✅ **Infinite Carousel** - Seamless scrolling portfolio showcase
- ✅ **Parallax Effects** - Sticky images with scroll-triggered animations
- ✅ **Custom Animations** - Fade in, slide up, rotate, and more

### Functionality
- ✅ **Elementor Compatible** - Build pages with drag-and-drop
- ✅ **AJAX Contact Form** - Spam protection & email validation
- ✅ **Mobile Menu** - Smooth slide-in navigation
- ✅ **Smooth Scroll** - Animated scrolling to sections
- ✅ **Lazy Loading** - Optimized image and video loading
- ✅ **SEO Optimized** - Clean code and semantic HTML

### Performance
- ✅ **Lightweight** - Minimal dependencies
- ✅ **Fast Loading** - Optimized CSS and JavaScript
- ✅ **Browser Compatible** - Works on all modern browsers
- ✅ **Accessibility** - WCAG compliant

---

## 📦 Requirements

### Server Requirements
- **WordPress**: 5.9 or higher
- **PHP**: 7.4 or higher
- **MySQL**: 5.6 or higher
- **HTTPS**: Recommended (required for video autoplay)

### Required Plugins
- **Elementor** (Free version)
  - [Download from WordPress.org](https://wordpress.org/plugins/elementor/)

### Recommended Plugins
- **Contact Form 7** - For advanced form features
- **WP Rocket** or **W3 Total Cache** - For performance optimization
- **Smush** - For image optimization
- **Yoast SEO** - For SEO optimization

---

## 🚀 Installation

### Method 1: Upload via WordPress Admin (Recommended)

1. **Prepare Theme ZIP File**
   ```bash
   cd wordpress-theme
   zip -r theconvokee-theme.zip .
   ```

2. **Upload to WordPress**
   - Go to `Appearance > Themes > Add New > Upload Theme`
   - Choose the ZIP file
   - Click "Install Now"
   - Activate the theme

### Method 2: FTP/SFTP Upload

1. **Connect via FTP**
   - Use FileZilla, Cyberduck, or your preferred FTP client

2. **Upload Theme Folder**
   - Upload `wordpress-theme` folder to `/wp-content/themes/`
   - Rename to `theconvokee` (optional)

3. **Activate**
   - Go to `Appearance > Themes`
   - Find "TheConvokee" and click "Activate"

### Method 3: Local Development

1. **Copy to WordPress Installation**
   ```bash
   cp -r wordpress-theme /path/to/wordpress/wp-content/themes/theconvokee
   ```

2. **Activate via WP-CLI**
   ```bash
   wp theme activate theconvokee
   ```

---

## 📖 Setup Guide

### Step 1: Install Elementor

1. Go to `Plugins > Add New`
2. Search for "Elementor"
3. Install and activate **Elementor Page Builder**

### Step 2: Create Homepage

1. Go to `Pages > Add New`
2. Title: "Home" or "Homepage"
3. Click **"Edit with Elementor"**
4. Click Settings icon (bottom left)
5. Set **Page Layout** to **"Elementor Canvas"**
6. Save

### Step 3: Set Homepage as Front Page

1. Go to `Settings > Reading`
2. Select **"A static page"** for Homepage displays
3. Choose your "Home" page as **Homepage**
4. Save changes

### Step 4: Upload Media Assets

**Images:**
1. Go to `Media > Add New`
2. Upload all images from `assets/images/` folder
3. Organize into folders:
   - For Creators
   - For Startups
   - Our Industry Portfolio
   - Logos

**Videos:**
- **Option A:** Upload to Media Library (for small videos)
  - `assets/videos/hero.mp4`
  - `assets/videos/mobile.mp4`

- **Option B:** Use External Hosting (Recommended for large files)
  - Upload to YouTube (unlisted)
  - Or use Vimeo
  - Or use a CDN like Cloudflare

### Step 5: Build Pages with Elementor

Follow the comprehensive guide in:
📄 **`elementor-templates/ELEMENTOR-GUIDE.md`**

This guide includes:
- Detailed steps for each section
- Widget settings
- Custom CSS code
- Animation configurations
- Mobile responsive settings

### Step 6: Configure Contact Form

**Using Built-in AJAX Form:**

The theme includes a built-in contact form handler. Forms will:
- Send emails to WordPress admin email
- Include spam protection
- Rate limiting (3 submissions per minute)
- Email validation

**Email Settings:**
1. Go to `Settings > General`
2. Set **Administration Email Address**
3. Test form submission

**For Gmail/SMTP:**
Install **WP Mail SMTP** plugin:
```bash
wp plugin install wp-mail-smtp --activate
```

Configure SMTP settings in `Settings > WP Mail SMTP`

### Step 7: Menu Setup

1. Go to `Appearance > Menus`
2. Create a new menu: "Primary Menu"
3. Add pages/links:
   - Services (#services)
   - Brands (#brands)
   - Portfolio (#portfolio)
   - About (#about)
   - Contact (opens modal)
4. Assign to **"Primary Menu"** location
5. Save

### Step 8: Customize Theme Settings

1. Go to `Appearance > Customize`
2. **Site Identity:**
   - Upload logo (`assets/images/logo.png`)
   - Set site title and tagline
3. **Colors:**
   - Primary: #9333EA (Purple)
   - Secondary: #EC4899 (Pink)
4. Save & Publish

---

## 📁 Theme Structure

```
wordpress-theme/
├── style.css                 # Theme stylesheet & metadata
├── functions.php             # Theme functions & hooks
├── index.php                 # Main template
├── header.php               # Header template
├── footer.php               # Footer template
├── page.php                 # Page template
├── front-page.php          # Homepage template
├── screenshot.png          # Theme screenshot (add your own)
│
├── assets/
│   ├── css/
│   │   └── custom-animations.css    # Animation styles
│   ├── js/
│   │   └── custom-scripts.js        # Interactive features
│   ├── images/                       # Image assets
│   │   ├── For Creators/
│   │   ├── For Startups/
│   │   ├── Our Industry Portfolio/
│   │   └── Logos/
│   └── videos/                       # Video assets
│       ├── hero.mp4
│       └── mobile.mp4
│
├── elementor-templates/
│   └── ELEMENTOR-GUIDE.md           # Detailed Elementor guide
│
└── README.md                         # This file
```

---

## 🎨 Customization

### Changing Colors

**Method 1: CSS Variables**

Edit `style.css` or `assets/css/custom-animations.css`:

```css
:root {
    --primary-purple: #9333EA;    /* Main purple */
    --secondary-purple: #EC4899;  /* Pink accent */
    --dark-bg: #1E0A3C;          /* Dark background */
    --darker-bg: #0F0521;        /* Darker background */
    --text-white: #ffffff;        /* White text */
    --text-gray: #A78BFA;        /* Light purple text */
    --pink-accent: #F472B6;      /* Light pink */
}
```

**Method 2: Elementor Settings**

1. Edit page with Elementor
2. Click on any widget
3. Go to **Style** tab
4. Change colors, fonts, etc.

### Changing Fonts

Edit `functions.php`:

```php
// Enqueue Google Fonts
function theconvokee_fonts() {
    wp_enqueue_style(
        'google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap'
    );
}
add_action('wp_enqueue_scripts', 'theconvokee_fonts');
```

Then update CSS:

```css
body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

### Changing Logo

1. Go to `Appearance > Customize > Site Identity`
2. Upload new logo
3. Or edit header.php directly

### Adding Custom CSS

**Method 1: WordPress Customizer**
- `Appearance > Customize > Additional CSS`

**Method 2: Child Theme** (Recommended for major changes)

Create `theconvokee-child` folder with:

```php
// style.css
/*
Theme Name: TheConvokee Child
Template: theconvokee
*/

@import url("../theconvokee/style.css");

/* Your custom CSS here */
```

```php
// functions.php
<?php
function theconvokee_child_enqueue_styles() {
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
}
add_action('wp_enqueue_scripts', 'theconvokee_child_enqueue_styles');
```

---

## 🎬 Animations

The theme includes multiple animation types:

### CSS Animations

| Animation | Duration | Effect |
|-----------|----------|--------|
| `fadeInUp` | 0.8s | Fade in and slide up |
| `fadeIn` | 0.3s | Simple fade in |
| `scroll` | 30s | Infinite carousel scroll |
| `rotate` | 20s | Rotating gradient |
| `pulse` | 2s | Scale pulsing |

### Animation Classes

Add these classes to Elementor widgets:

```html
<!-- Fade in from bottom -->
<div class="animate-fade-in-up">Content</div>

<!-- With delay -->
<div class="animate-fade-in-up-delay-1">Content</div>

<!-- Scroll triggered -->
<div class="scroll-animate">Content</div>

<!-- Hover effects -->
<button class="hover-lift">Button</button>
<div class="hover-scale">Card</div>
```

### JavaScript Animations

Automatically applied via Intersection Observer:
- Sections fade in when scrolling into view
- Staggered animations for multiple elements
- Parallax effects on images

### Disabling Animations

For accessibility or preference:

**Disable All:**
```css
* {
    animation: none !important;
    transition: none !important;
}
```

**Disable Specific:**
```css
.no-animate {
    animation: none !important;
}
```

**Respect User Preferences:**
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
    }
}
```

---

## 🔧 Troubleshooting

### Common Issues

**1. Animations Not Working**
- Clear browser cache
- Clear WordPress cache (if using caching plugin)
- Check if custom CSS is enabled in Elementor
- Verify JavaScript is not blocked

**2. Videos Not Playing**
- Ensure HTTPS is enabled (required for autoplay)
- Check video format (MP4 H.264 recommended)
- Add `autoplay`, `muted`, `playsinline` attributes
- Test on different browsers

**3. Contact Form Not Sending**
- Check WordPress admin email in `Settings > General`
- Verify PHP mail() function works on server
- Install SMTP plugin (WP Mail SMTP)
- Check spam folder
- View PHP error logs

**4. Elementor Not Loading**
- Check PHP version (7.4+)
- Increase PHP memory limit to 256M
- Deactivate other plugins temporarily
- Switch to default theme, then back

**5. Mobile Menu Not Working**
- Check JavaScript console for errors
- Verify jQuery is loaded
- Clear browser cache
- Test on different browsers

**6. Slow Loading**
- Optimize images (use Smush plugin)
- Enable caching (WP Rocket)
- Use CDN for videos
- Minify CSS/JS
- Enable GZIP compression

### Debugging

Enable WordPress debugging:

Edit `wp-config.php`:
```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

Check logs at: `/wp-content/debug.log`

### Performance Optimization

**1. Image Optimization**
```bash
# Install Imagick for WebP support
sudo apt-get install imagemagick

# Or use WP plugins:
# - Smush
# - ShortPixel
# - EWWW Image Optimizer
```

**2. Caching**
- Install WP Rocket or W3 Total Cache
- Enable browser caching
- Enable object caching (Redis/Memcached)

**3. CDN Setup**
- Cloudflare (Free)
- Amazon CloudFront
- BunnyCDN

**4. Database Optimization**
```bash
# Via WP-CLI
wp db optimize

# Or use plugin: WP-Optimize
```

---

## 📱 Mobile Testing Checklist

- [ ] Hero section displays correctly
- [ ] Videos load on mobile (with poster image)
- [ ] Service cards are tappable
- [ ] Mobile menu opens/closes smoothly
- [ ] All text is readable (min 16px)
- [ ] Buttons are easily tappable (min 44px)
- [ ] Forms are easy to fill
- [ ] Images load quickly
- [ ] No horizontal scrolling
- [ ] Animations are smooth (not janky)

### Test on Multiple Devices
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)
- Desktop (Chrome, Firefox, Safari, Edge)

---

## 🚀 Going Live

### Pre-Launch Checklist

**Security:**
- [ ] Update WordPress core, themes, plugins
- [ ] Install security plugin (Wordfence)
- [ ] Change default "admin" username
- [ ] Use strong passwords
- [ ] Enable 2FA (Two-Factor Authentication)
- [ ] Install SSL certificate
- [ ] Hide WordPress version
- [ ] Disable file editing in dashboard

**Performance:**
- [ ] Enable caching
- [ ] Optimize images
- [ ] Minify CSS/JS
- [ ] Enable GZIP compression
- [ ] Set up CDN
- [ ] Test page speed (Google PageSpeed Insights)

**SEO:**
- [ ] Install Yoast SEO or Rank Math
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Analytics
- [ ] Set up meta descriptions
- [ ] Optimize images with alt tags
- [ ] Create robots.txt
- [ ] Set up 301 redirects if migrating

**Content:**
- [ ] Test all forms
- [ ] Check all links
- [ ] Proofread all content
- [ ] Test contact form email delivery
- [ ] Add social media links
- [ ] Set up Google My Business

**Technical:**
- [ ] Set up backups (UpdraftPlus)
- [ ] Test on all browsers
- [ ] Test on all devices
- [ ] Check 404 pages
- [ ] Set up email (SMTP)
- [ ] Configure GDPR compliance (if EU)

---

## 📄 License

This theme is licensed under the GNU General Public License v2 or later.

**You are free to:**
- Use commercially
- Modify
- Distribute
- Private use

**Conditions:**
- Disclose source
- Include license
- State changes

---

## 🤝 Support

### Documentation
- **Elementor Guide**: `elementor-templates/ELEMENTOR-GUIDE.md`
- **WordPress Codex**: https://codex.wordpress.org/
- **Elementor Docs**: https://elementor.com/help/

### Getting Help

1. **Check documentation** first
2. **Search WordPress forums**: https://wordpress.org/support/
3. **Elementor community**: https://www.facebook.com/groups/Elementors/
4. **Stack Overflow**: Tag your question with `wordpress` and `elementor`

### Reporting Issues

If you find a bug:
1. Check if it's already reported
2. Provide detailed description
3. Include browser/device info
4. Add screenshots if possible
5. List steps to reproduce

---

## 🔄 Updates

### Version History

**v1.0.0** - Initial Release
- Complete WordPress theme
- Elementor compatible
- Full animation support
- AJAX contact form
- Mobile responsive
- Video backgrounds
- 3D flip cards
- Infinite carousel

### Checking for Updates

Currently, this is a standalone theme. To update:
1. Backup your site
2. Download latest version
3. Upload via FTP or WordPress admin
4. Test thoroughly

---

## 💡 Tips & Best Practices

### Performance
- Compress images before uploading
- Use lazy loading for images and videos
- Limit number of web fonts
- Minimize plugin usage
- Use caching

### Design
- Maintain consistent spacing
- Use color palette consistently
- Test contrast for accessibility
- Keep navigation simple
- Make CTAs prominent

### Content
- Write clear, concise copy
- Use headings properly (H1, H2, H3)
- Add alt text to all images
- Keep forms short and simple
- Update content regularly

### SEO
- Use descriptive URLs
- Add meta descriptions
- Optimize images with alt tags
- Create quality content
- Build backlinks
- Submit sitemap

---

## 🎓 Learning Resources

### WordPress
- [WordPress.tv](https://wordpress.tv/) - Video tutorials
- [WPBeginner](https://www.wpbeginner.com/) - Beginner guides
- [WordPress Codex](https://codex.wordpress.org/) - Official docs

### Elementor
- [Elementor Academy](https://elementor.com/academy/) - Free courses
- [Elementor YouTube](https://www.youtube.com/c/Elementor) - Tutorials
- [Elementor Blog](https://elementor.com/blog/) - Tips & tricks

### Web Development
- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JS
- [CSS-Tricks](https://css-tricks.com/) - CSS guides
- [Can I Use](https://caniuse.com/) - Browser compatibility

---

## 🙏 Credits

### Technologies Used
- **WordPress** - Content Management System
- **Elementor** - Page Builder
- **jQuery** - JavaScript Library
- **Intersection Observer API** - Scroll animations

### Inspiration
- Original HTML/CSS/JS website design
- Modern web animation techniques
- Material Design principles

---

## 📞 Contact

For theme support and inquiries:
- **Website**: https://theconvokee.com
- **Email**: [Your support email]

---

**Made with ❤️ for TheConvokee**

*Last Updated: 2024*
