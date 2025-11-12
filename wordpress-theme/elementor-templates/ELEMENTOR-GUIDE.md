# TheConvokee Elementor Template Guide

This guide will help you recreate the TheConvokee website using Elementor Free plugin.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Theme Setup](#theme-setup)
3. [Importing Assets](#importing-assets)
4. [Building Sections](#building-sections)
5. [Animation Settings](#animation-settings)
6. [Mobile Responsiveness](#mobile-responsiveness)

---

## Prerequisites

### Required Plugins
- **Elementor** (Free version is sufficient)
- **Contact Form 7** (for contact form - optional, can use custom HTML form)

### Recommended Plugins
- **Unlimited Elements for Elementor** (adds more widgets)
- **Premium Addons for Elementor** (for advanced effects)

---

## Theme Setup

### 1. Install Theme
1. Go to **Appearance > Themes > Add New > Upload Theme**
2. Upload the `wordpress-theme` folder as a ZIP file
3. Activate the theme

### 2. Upload Assets
1. Navigate to `wordpress-theme/assets/images/` and `wordpress-theme/assets/videos/`
2. Upload all images to **Media Library**
3. Upload videos to **Media Library** or use external hosting (recommended for large videos)

### 3. Create Homepage
1. Go to **Pages > Add New**
2. Title: "Home" or "Homepage"
3. Click **Edit with Elementor**
4. Set **Page Layout** to "Elementor Canvas" (full width, no header/footer from theme)

---

## Building Sections

### Section 1: Hero Section with Video Background

**Layout:**
- Container/Section: Full Width
- Height: 100vh (viewport height)
- Content Position: Center Left

**Steps:**
1. Add new Section
2. **Section Settings:**
   - Layout: Full Width
   - Height: Fit to Screen (100vh)
   - Column Gap: No Gap

3. **Background:**
   - Type: Video
   - Video Link: Upload `hero.mp4` or use YouTube link
   - Background Overlay: Gradient
     - Color 1: #9333EA (opacity 95%)
     - Color 2: #EC4899 (opacity 70%)
     - Type: Linear
     - Angle: 90deg

4. **Column Settings:**
   - Width: 50% (on desktop)
   - Vertical Align: Middle
   - Padding: 180px 60px 120px 60px

5. **Add Widgets:**

   **a) Heading Widget (H1)**
   - Content: "Investing in Creators and Brands That Shape Culture"
   - HTML Tag: H1
   - Style:
     - Color: White (#FFFFFF)
     - Typography:
       - Font Size: 65px (Desktop), 39px (Mobile)
       - Font Weight: 900
       - Line Height: 1.1
       - Letter Spacing: -2px
   - Advanced > Motion Effects:
     - Entrance Animation: Fade In Up
     - Duration: 800ms
     - Delay: 0ms

   **b) Text Editor Widget (Subtitle)**
   - Content: "Empowering content creators and emerging brands with strategic investment, growth marketing expertise, and go-to-market support to build influential, lasting businesses."
   - Style:
     - Color: White (#FFFFFF)
     - Typography:
       - Font Size: 1.4rem (Desktop), 1.1rem (Mobile)
       - Font Weight: 400
       - Line Height: 1.6
     - Opacity: 0.95
   - Advanced > Motion Effects:
     - Entrance Animation: Fade In Up
     - Duration: 800ms
     - Delay: 200ms

   **c) Button Widget (CTA)**
   - Text: "Get Started Today"
   - Link: #contact (opens modal)
   - Style:
     - Background: White (#FFFFFF)
     - Text Color: #1E0A3C
     - Typography:
       - Font Size: 1.1rem
       - Font Weight: 700
     - Border Radius: 50px
     - Padding: 16px 40px
   - Hover:
     - Transform: translateY(-3px)
     - Box Shadow: 0 15px 35px rgba(255,255,255,0.3)
   - Advanced > Motion Effects:
     - Entrance Animation: Fade In Up
     - Duration: 800ms
     - Delay: 400ms
   - Advanced > Custom CSS:
     ```css
     selector:hover {
         transform: translateY(-3px);
         box-shadow: 0 15px 35px rgba(255, 255, 255, 0.3);
     }
     ```

---

### Section 2: Service Cards (3D Flip Cards)

**Layout:**
- Section: Full Width
- Background: Transparent
- Margin Top: -150px (to overlap hero)
- Z-Index: 10

**Steps:**
1. Add new Section
2. Set 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
3. Column Gap: Default (25px)

**For Each Service Card:**

Since Elementor Free doesn't have built-in flip cards, we'll use HTML widget with custom CSS:

**HTML Widget Code for Card 1 (Creator Investment):**
```html
<div class="service-card card-1">
    <div class="card-inner">
        <div class="card-front">
            <div class="card-overlay">
                <h3 class="card-title">Creator Investments</h3>
                <p class="card-subtitle">For Creators</p>
            </div>
        </div>
        <div class="card-back">
            <h3>Creator Investments</h3>
            <p>Strategic funding for influential content creators ready to scale their personal brand into sustainable businesses.</p>
            <button class="learn-more">Learn More →</button>
        </div>
    </div>
</div>
```

**Add this CSS to each HTML widget (Advanced > Custom CSS):**
```css
.service-card {
    height: 320px;
    perspective: 1000px;
    cursor: pointer;
}

.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.service-card:hover .card-inner {
    transform: rotateY(180deg);
}

.card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.card-front {
    background-image: url('/wp-content/uploads/images/For-Creators/Creator-Investment.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: flex-end;
}

.card-front::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(147, 51, 234, 0.5), rgba(236, 72, 153, 0.7));
}

.card-overlay {
    position: relative;
    padding: 30px;
    width: 100%;
    z-index: 1;
}

.card-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 8px;
}

.card-subtitle {
    font-size: 0.9rem;
    color: white;
    opacity: 0.9;
}

.card-back {
    background: linear-gradient(135deg, #EC4899, #9333EA);
    transform: rotateY(180deg);
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
}

.card-back h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
}

.card-back p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 20px;
}

.learn-more {
    background: rgba(255,255,255,0.2);
    border: 1px solid rgba(255,255,255,0.3);
    color: white;
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
}

.learn-more:hover {
    background: rgba(255,255,255,0.3);
    transform: translateX(5px);
}
```

**Repeat for all 6 cards with different:**
- Background images
- Titles
- Descriptions
- Gradient colors (refer to original CSS)

---

### Section 3: Brands Section

**Layout:**
- Section: Boxed (1200px max-width)
- Background: #f9f9f9 (light gray)
- Padding: 100px 40px

**Steps:**

1. **Heading Widget (Small Title)**
   - Text: "TRUSTED BY"
   - HTML Tag: H4
   - Style:
     - Color: #EC4899
     - Font Size: 0.9rem
     - Font Weight: 700
     - Letter Spacing: 3px
     - Text Transform: Uppercase
     - Text Align: Center

2. **Heading Widget (Main Title)**
   - Text: "Makers of the world's 100+ Leading Products"
   - HTML Tag: H2
   - Style:
     - Color: #1E0A3C
     - Font Size: 2.5rem (Desktop), 1.625rem (Mobile)
     - Font Weight: 900
     - Text Align: Center
   - Add span with class="highlight-text" for "Leading Products"
   - CSS for highlight:
     ```css
     .highlight-text {
         background: linear-gradient(to right bottom, #f8d7ff, #fb9cff, #f8d7ff);
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;
         text-shadow: rgba(255, 0, 228, 1) 0px 0px 50px;
     }
     ```

3. **Image Gallery Widget or Image Carousel**
   - Add 6 brand logos:
     - Disney
     - Amazon
     - Kellogg's
     - Walmart
     - Nike
     - Microsoft
   - Settings:
     - Columns: 6 (Desktop), 3 (Tablet), 2 (Mobile)
     - Gap: 30px
     - Image Size: Medium
   - Advanced > Custom CSS:
     ```css
     selector img {
         transition: all 0.3s ease;
         filter: grayscale(100%);
     }

     selector img:hover {
         transform: scale(1.1);
         filter: grayscale(0%);
     }
     ```

---

### Section 4: Marketing Section (Parallax)

**Layout:**
- Section: Boxed
- Background: #f9f9f9
- Padding: 100px 40px

**Structure:**
- 2 Columns (50/50 on desktop, stack on mobile)
- Left Column: Sticky Image
- Right Column: Text Points

**Left Column:**

1. **Image Widget**
   - Upload: Go-to-market Strategy image
   - Advanced > Custom CSS:
     ```css
     selector {
         position: sticky;
         top: 100px;
         border-radius: 20px;
         overflow: hidden;
         transition: transform 0.5s ease-out;
     }

     selector::before {
         content: '';
         position: absolute;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         background: linear-gradient(135deg, rgba(147,51,234,0.3), rgba(236,72,153,0.3));
         z-index: 1;
     }
     ```

**Right Column:**

Add 7 Text Editor widgets, each containing:
```html
<div class="marketing-point">
    <h3>Strategic Brand Development</h3>
    <p>We help creators and startups build authentic brands that resonate with their target audience through data-driven insights and creative storytelling.</p>
</div>
```

**Section Header (full width above columns):**
- Small Label: "WHAT WE DO"
- Main Heading: "Full-Funnel Growth Marketing"
- Description paragraph

**Style for Marketing Points:**
```css
.marketing-point {
    margin-bottom: 120px;
}

.marketing-point h3 {
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 20px;
    background: linear-gradient(135deg, #EC4899, #9333EA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.marketing-point p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #666;
}
```

---

### Section 5: Make Ideas Section (Phone Mockup)

**Layout:**
- Section: Full Width
- Background: Gradient (135deg, #9333EA to #EC4899)
- Padding: 100px 40px
- 2 Columns (50/50)

**Left Column (Phone Mockup):**

**HTML Widget:**
```html
<div class="phone-mockup">
    <div class="phone-screen">
        <video autoplay loop muted playsinline>
            <source src="/wp-content/uploads/videos/mobile.mp4" type="video/mp4">
        </video>
    </div>
</div>
```

**CSS:**
```css
.phone-mockup {
    position: relative;
    width: 300px;
    height: 600px;
    background: #222;
    border-radius: 40px;
    padding: 10px;
    margin: 0 auto;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}

.phone-screen {
    width: 100%;
    height: 100%;
    background: #000;
    border-radius: 30px;
    overflow: hidden;
}

.phone-screen video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

**Right Column (Content):**

1. **Heading:**
   - Text: "Make Ideas <u>Happen</u>"
   - HTML Tag: H2
   - Style: Font Size 3rem, Font Weight 900, Color White

2. **3 Text Blocks** (use Text Editor widgets):
   ```html
   <div class="feature-item">
       <h4>Investment Capital</h4>
       <p>Access funding from industry veterans who understand creator economy and brand building.</p>
   </div>
   ```

3. **Button:**
   - Text: "See Our Portfolio"
   - Style: White background, purple text

---

### Section 6: Portfolio Carousel (Infinite Scroll)

**Layout:**
- Section: Full Width
- Background: White
- Padding: 100px 0

**Header:**
- Centered heading: "Our Industry Portfolio"

**Carousel:**

**HTML Widget (Full Width):**
```html
<div class="carousel-wrapper">
    <div class="carousel-track">
        <!-- Slide 1 -->
        <div class="carousel-slide industry-tech">
            <span class="industry-badge">INDUSTRY</span>
            <div class="carousel-info">
                <div class="carousel-brand">Technology</div>
            </div>
        </div>

        <!-- Slide 2 -->
        <div class="carousel-slide industry-auto">
            <span class="industry-badge">INDUSTRY</span>
            <div class="carousel-info">
                <div class="carousel-brand">Automotive</div>
            </div>
        </div>

        <!-- Slide 3 -->
        <div class="carousel-slide industry-health">
            <span class="industry-badge">INDUSTRY</span>
            <div class="carousel-info">
                <div class="carousel-brand">Health & Wellness</div>
            </div>
        </div>

        <!-- Slide 4 -->
        <div class="carousel-slide industry-retail">
            <span class="industry-badge">INDUSTRY</span>
            <div class="carousel-info">
                <div class="carousel-brand">Retail</div>
            </div>
        </div>

        <!-- Slide 5 -->
        <div class="carousel-slide industry-restaurant">
            <span class="industry-badge">INDUSTRY</span>
            <div class="carousel-info">
                <div class="carousel-brand">Restaurant</div>
            </div>
        </div>

        <!-- Slide 6 -->
        <div class="carousel-slide industry-education">
            <span class="industry-badge">INDUSTRY</span>
            <div class="carousel-info">
                <div class="carousel-brand">Education</div>
            </div>
        </div>

        <!-- Slide 7 -->
        <div class="carousel-slide industry-entertainment">
            <span class="industry-badge">INDUSTRY</span>
            <div class="carousel-info">
                <div class="carousel-brand">Entertainment</div>
            </div>
        </div>
    </div>
</div>
```

**CSS (from custom-animations.css is already loaded, but add if needed):**
```css
.carousel-wrapper {
    overflow: hidden;
    width: 100%;
}

.carousel-track {
    display: flex;
    animation: scroll 30s linear infinite;
    gap: 0;
}

.carousel-track:hover {
    animation-play-state: paused;
}

@keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

.carousel-slide {
    min-width: 280px;
    height: 350px;
    background-size: cover;
    background-position: center;
    position: relative;
    transition: transform 0.3s ease;
    flex-shrink: 0;
}

.carousel-slide:hover {
    transform: scale(1.05);
}

/* Background images for each industry */
.industry-tech {
    background-image: url('/wp-content/uploads/images/Our-Industry-Portfolio/Tech.jpg');
}
/* ...repeat for all industries */
```

---

### Section 7: Why Believe Section

**Layout:**
- Section: Full Width
- Background: Gradient (135deg, #9333EA to #EC4899)
- Padding: 100px 40px
- Position: Relative

**Background Effect (Rotating Gradient):**

Add HTML widget at top of section:
```html
<div class="rotating-background"></div>
```

**CSS:**
```css
.rotating-background {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 800px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.1), transparent);
    animation: rotate 20s linear infinite;
    pointer-events: none;
    z-index: 0;
}

@keyframes rotate {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
}
```

**Content Structure:**

1. **Small Title:** "WHY BELIEVE"
2. **Main Heading:** "We Build Lasting Businesses"
3. **Stats Container** (3 columns):
   - Column 1: List of achievements
   - Column 2: List of capabilities
   - Column 3: Awards badge (100+ Collaborations)
4. **Button:** "Request a Proposal"

---

### Section 8: Footer

**Layout:**
- Section: Full Width
- Background: #4A1D7A (purple)
- Padding: 80px 40px
- 4 Columns on desktop

**Column 1: Navigation Links**
- Text Editor with links to all sections

**Column 2: Company Links**
- About, Careers, Blog, etc.

**Column 3: Logo**
- Image or Heading widget with white background

**Column 4: Social Connect**
- Heading: "Connect"
- Social Icons widget

**Bottom Copyright:**
- Full width text: "© 2024 TheConvokee. All rights reserved."
- Links: Privacy Policy | Terms of Service

---

## Animation Settings

### Global Animations (Applied to sections)

1. **Scroll Animations:**
   - Motion Effects > Entrance Animation: Fade In Up
   - Duration: 800ms
   - Use on: Service cards, marketing points, feature items

2. **Hover Effects:**
   - Add CSS class: `hover-lift` to buttons
   - Add CSS class: `hover-scale` to cards

3. **Staggered Animations:**
   - Add different delays to adjacent elements
   - Delay 1: 0ms
   - Delay 2: 200ms
   - Delay 3: 400ms

### Custom CSS Classes to Add

Add these classes to widgets for pre-built animations:

- `.animate-fade-in-up` - Fade in from bottom
- `.animate-fade-in-up-delay-1` - With 200ms delay
- `.hover-lift` - Lift on hover
- `.hover-scale` - Scale on hover
- `.scroll-animate` - Animate when in viewport

---

## Mobile Responsiveness

### Breakpoints

- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

### Mobile-Specific Settings

1. **Hero Section:**
   - Reduce heading font size: 39px
   - Reduce padding: 100px 20px

2. **Service Cards:**
   - Change to 1 column
   - Reduce card height if needed

3. **Marketing Section:**
   - Stack columns vertically
   - Remove sticky positioning on image

4. **Carousel:**
   - Reduce slide width to 200px
   - Adjust animation speed

5. **Footer:**
   - Change to 2 columns or stack vertically

### Mobile Testing Checklist

- [ ] Hero video loads and plays
- [ ] All buttons are tappable (min 44px height)
- [ ] Text is readable (min 16px font size)
- [ ] Flip cards work on tap
- [ ] Mobile menu functions correctly
- [ ] Forms are easy to fill out
- [ ] Images load and are optimized

---

## Contact Form Setup

### Option 1: Custom HTML Form (Uses theme AJAX)

```html
<form id="contactForm" class="contact-form">
    <div class="form-group">
        <label>Name</label>
        <input type="text" name="name" required>
    </div>
    <div class="form-group">
        <label>Email</label>
        <input type="email" name="email" required>
    </div>
    <div class="form-group">
        <label>Phone</label>
        <input type="tel" name="phone">
    </div>
    <div class="form-group">
        <label>Message</label>
        <textarea name="message" required></textarea>
    </div>
    <button type="submit" class="submit-button">Send Message</button>
</form>
```

### Option 2: Contact Form 7

1. Install Contact Form 7
2. Create new form
3. Use shortcode in Elementor Shortcode widget

---

## Performance Optimization

### 1. Image Optimization
- Use WebP format for images
- Compress images to < 200KB
- Use lazy loading

### 2. Video Optimization
- Host videos externally (YouTube, Vimeo)
- Or use compressed MP4 files
- Add poster images

### 3. CSS/JS Optimization
- Minify custom CSS
- Combine similar animations
- Remove unused styles

### 4. Caching
- Install WP Rocket or W3 Total Cache
- Enable browser caching
- Use CDN for assets

---

## Troubleshooting

### Animations Not Working
- Check if custom CSS is enabled in Elementor
- Verify animation classes are applied
- Check browser console for errors

### Videos Not Playing
- Ensure autoplay, loop, muted attributes are set
- Use inline playback for mobile
- Check video file format compatibility

### Flip Cards Not Flipping
- Verify CSS is loaded
- Check for conflicting styles
- Test perspective and backface-visibility

### Mobile Menu Not Opening
- Check JavaScript is loaded
- Verify jQuery is available
- Check for console errors

---

## Next Steps

1. Build each section following this guide
2. Test on all devices
3. Optimize performance
4. Set up contact form
5. Launch!

For support, refer to:
- Elementor Documentation: https://elementor.com/help/
- WordPress Codex: https://codex.wordpress.org/
