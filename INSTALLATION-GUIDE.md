# TheConvokee WordPress Theme - Quick Installation Guide

This is a quick start guide to get your WordPress theme up and running in minutes.

## 🎯 Quick Start (5 Minutes)

### Step 1: Prepare the Theme (1 minute)

```bash
# Navigate to the wordpress-theme directory
cd wordpress-theme

# Create a ZIP file
zip -r theconvokee-theme.zip .
```

### Step 2: Install on WordPress (2 minutes)

1. **Login to WordPress Admin**
   - Go to `https://yoursite.com/wp-admin`

2. **Upload Theme**
   - Navigate to `Appearance > Themes > Add New > Upload Theme`
   - Choose `theconvokee-theme.zip`
   - Click "Install Now"
   - Click "Activate"

3. **Install Elementor**
   - Go to `Plugins > Add New`
   - Search for "Elementor"
   - Click "Install Now" on "Elementor Page Builder"
   - Click "Activate"

### Step 3: Create Homepage (2 minutes)

1. **Create New Page**
   - Go to `Pages > Add New`
   - Title: "Home"
   - Click "Edit with Elementor"

2. **Set Page Layout**
   - Click the Settings icon (bottom left)
   - Under "Page Layout", select "Elementor Canvas"
   - Click "Update"

3. **Set as Homepage**
   - Go to `Settings > Reading`
   - Select "A static page"
   - Homepage: Select "Home"
   - Click "Save Changes"

## 📖 Building Your Homepage

### Option 1: Use the Detailed Guide (Recommended)

Follow the comprehensive step-by-step guide:
```
wordpress-theme/elementor-templates/ELEMENTOR-GUIDE.md
```

This guide includes:
- ✅ Complete widget settings for each section
- ✅ Custom CSS code ready to copy/paste
- ✅ Animation configurations
- ✅ Mobile responsive settings
- ✅ Troubleshooting tips

### Option 2: Quick Build (30 Minutes)

**Essential Sections to Create:**

1. **Hero Section** (Video Background)
   - Full-width section
   - Video background: `assets/videos/hero.mp4`
   - Gradient overlay
   - Heading, Text, Button

2. **Service Cards** (3D Flip Cards)
   - 3 columns
   - 6 HTML widgets with flip card code
   - Copy CSS from ELEMENTOR-GUIDE.md

3. **Brands Section**
   - Logo gallery
   - 6 brand logos from `assets/images/Logos/`

4. **Portfolio Carousel**
   - HTML widget with carousel code
   - Industry images from `assets/images/Our Industry Portfolio/`

5. **Contact Form**
   - Form widget or HTML form
   - Connected to theme's AJAX handler

6. **Footer**
   - 4 columns
   - Navigation, Links, Logo, Social

## 🎨 Quick Customization

### Change Colors

Edit `wordpress-theme/style.css` or `assets/css/custom-animations.css`:

```css
:root {
    --primary-purple: #9333EA;     /* Change this */
    --secondary-purple: #EC4899;   /* Change this */
}
```

### Upload Logo

1. Go to `Appearance > Customize > Site Identity`
2. Upload `assets/images/logo.png`
3. Save

### Configure Contact Form Email

1. Go to `Settings > General`
2. Set "Administration Email Address"
3. This email will receive form submissions

## 📱 Upload Media Assets

### Images

1. Go to `Media > Add New > Upload`
2. Upload all folders from `wordpress-theme/assets/images/`:
   - For Creators (6 images)
   - For Startups (1 image)
   - Our Industry Portfolio (7 images)
   - Logos (6 images)

### Videos

**Option A: Upload to WordPress (for small files)**
- Upload `hero.mp4` and `mobile.mp4` to Media Library

**Option B: Use External Hosting (Recommended)**
- Upload to YouTube (unlisted)
- Use video URL in Elementor

## ⚙️ Essential Settings

### Permalinks (SEO-Friendly URLs)

1. Go to `Settings > Permalinks`
2. Select "Post name"
3. Save

### Reading Settings

1. Go to `Settings > Reading`
2. Discourage search engines: **Uncheck** (before going live)

### Discussion Settings

1. Go to `Settings > Discussion`
2. Configure comment settings as needed

## 🔌 Recommended Plugins

### Install These (Optional but Recommended)

```
1. Contact Form 7 - Better forms
2. Yoast SEO - Search engine optimization
3. WP Rocket - Caching & performance
4. Smush - Image optimization
5. Wordfence - Security
6. UpdraftPlus - Backups
```

Install via `Plugins > Add New`

## 🚀 Going Live Checklist

### Before Launch:

- [ ] Test all pages on desktop
- [ ] Test all pages on mobile
- [ ] Test contact form (send test email)
- [ ] Check all images load
- [ ] Check all videos play
- [ ] Install SSL certificate (HTTPS)
- [ ] Set up Google Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Test page speed (aim for < 3 seconds)
- [ ] Check all links work
- [ ] Proofread all content

### Security:

- [ ] Update all plugins and WordPress
- [ ] Change default "admin" username
- [ ] Use strong password
- [ ] Install Wordfence
- [ ] Enable 2FA
- [ ] Set up automatic backups

## 🆘 Common Issues & Quick Fixes

### Issue: "The uploaded file exceeds the upload_max_filesize directive"

**Fix:** Increase upload limit in `wp-config.php`:
```php
@ini_set('upload_max_size', '128M');
@ini_set('post_max_size', '128M');
@ini_set('max_execution_time', '300');
```

### Issue: Videos not autoplaying

**Fix:** Ensure:
1. Site has SSL (HTTPS)
2. Video has `autoplay`, `muted`, `playsinline` attributes
3. Video format is MP4 H.264

### Issue: Animations not working

**Fix:**
1. Clear browser cache (Ctrl+Shift+Delete)
2. Clear WordPress cache (if using caching plugin)
3. Check browser console for JavaScript errors (F12)

### Issue: Contact form not sending emails

**Fix:**
1. Install "WP Mail SMTP" plugin
2. Configure with Gmail/SMTP settings
3. Test email delivery

### Issue: Elementor not loading

**Fix:**
1. Increase PHP memory limit to 256M
2. Deactivate all plugins except Elementor
3. Test if it loads
4. Reactivate plugins one by one

## 📚 Documentation Files

Located in the theme folder:

```
wordpress-theme/
├── README.md                         # Complete documentation
├── elementor-templates/
│   └── ELEMENTOR-GUIDE.md           # Step-by-step Elementor guide
└── assets/
    ├── css/custom-animations.css    # Animation styles
    └── js/custom-scripts.js         # Interactive features
```

## 🎓 Next Steps

1. **Follow the Elementor Guide**
   - Open `elementor-templates/ELEMENTOR-GUIDE.md`
   - Build each section step-by-step
   - Copy/paste provided code

2. **Customize Content**
   - Replace placeholder text
   - Upload your images
   - Update contact info

3. **Optimize Performance**
   - Install caching plugin
   - Optimize images
   - Enable GZIP compression

4. **Launch!**
   - Test everything
   - Go live
   - Celebrate! 🎉

## 💡 Pro Tips

- **Save Your Work Often**: Click "Update" in Elementor frequently
- **Use Revisions**: Elementor saves revisions, you can restore previous versions
- **Mobile First**: Always check mobile view in Elementor (bottom left icon)
- **Copy/Paste Sections**: Save time by duplicating similar sections
- **Use Templates**: Save sections as templates for reuse

## 📞 Need Help?

### Resources:
- Theme README: `wordpress-theme/README.md`
- Elementor Guide: `wordpress-theme/elementor-templates/ELEMENTOR-GUIDE.md`
- Elementor Docs: https://elementor.com/help/
- WordPress Forums: https://wordpress.org/support/

### Before Asking for Help:
1. Check the documentation
2. Clear cache and try again
3. Check browser console for errors
4. Test with all plugins disabled
5. Try with a default theme

---

## ✅ Installation Complete!

You now have:
- ✅ WordPress theme installed and activated
- ✅ Elementor installed and ready
- ✅ Homepage created
- ✅ All animations and effects included
- ✅ Contact form configured
- ✅ Mobile responsive design

**Next:** Follow the detailed Elementor guide to build your beautiful homepage!

---

**Happy Building! 🚀**

*For detailed instructions, refer to the complete README.md and ELEMENTOR-GUIDE.md*
