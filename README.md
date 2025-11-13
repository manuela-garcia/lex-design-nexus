# Learning Experience Designer Portfolio

A modern, responsive, and fully accessible portfolio website showcasing professional work in learning experience design, instructional design, and SaaS product enablement.

## 🚀 GitHub Pages Deployment

This site is ready for immediate deployment to GitHub Pages. Follow these steps:

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `portfolio` or `username.github.io`)
4. Choose "Public" visibility
5. Click "Create repository"

### Step 2: Upload Your Files

You can upload files in two ways:

**Option A: Using GitHub Web Interface**
1. In your new repository, click "uploading an existing file"
2. Drag and drop all the project files from your computer
3. Or click "choose your files" to select them manually
4. Add a commit message (e.g., "Initial portfolio site")
5. Click "Commit changes"

**Option B: Using Git Command Line**
```bash
# Navigate to your project directory
cd path/to/your/project

# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial portfolio site"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your GitHub repository, click "Settings" (top right)
2. Scroll down and click "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Under "Branch", select "main" and "/ (root)"
5. Click "Save"

### Step 4: Access Your Site

After a few minutes, your site will be live at:
- If named `username.github.io`: `https://username.github.io`
- If named differently: `https://username.github.io/repository-name`

The URL will appear at the top of the Pages settings once deployment is complete.

## ✏️ Customization Guide

### Update Personal Information

**In `src/pages/Portfolio.tsx`:**
- Line 30-35: Update hero headline and description
- Line 58-73: Update "About Me" section text
- Lines 155-160: Update contact information (LinkedIn URL, email)

**In `src/components/Header.tsx` and `src/components/Footer.tsx`:**
- Update navigation links
- Update social media URLs
- Update copyright text

### Replace Images

All images are located in `src/assets/`:
- `hero-bg.jpg` - Hero section background
- `profile-placeholder.jpg` - About section profile photo
- `case-study-1.jpg`, `case-study-2.jpg`, `case-study-3.jpg` - Case study thumbnails

To replace images:
1. Add your images to the `src/assets/` folder
2. Update the import statements at the top of the respective files
3. Ensure images have descriptive filenames and appropriate alt text

### Update Case Studies

Edit the three case study files:
- `src/pages/CaseStudyUIMigration.tsx`
- `src/pages/CaseStudyAnalytics.tsx`
- `src/pages/CaseStudyLXP.tsx`

Each file includes clearly marked sections:
- Problem/Challenge
- Strategic Approach
- Measurable Impact
- Key Takeaways

### Add Resume PDF

1. Create a PDF of your resume
2. Rename it to `resume.pdf`
3. Place it in the `public/` folder
4. The download buttons will automatically link to it

### Update Skills

In `src/pages/Portfolio.tsx` (around line 121), update the skills array:
```tsx
{[
  "Your Skill 1",
  "Your Skill 2",
  // ... add your skills
]}
```

### Update Contact Form

The contact form in `src/pages/Portfolio.tsx` (around line 146) currently shows a success toast. To make it functional:
1. Integrate with a form service (Formspree, Netlify Forms, etc.)
2. Add the service's endpoint to the form's `onSubmit` handler

## 🎨 Color Customization

Colors are defined in `src/index.css` (lines 10-58). All colors use HSL format for accessibility:

```css
--primary: 217 66% 36%;        /* Deep blue */
--secondary: 173 58% 39%;      /* Teal */
--accent: 38 92% 55%;          /* Amber */
```

To change colors:
1. Use an HSL color picker online
2. Replace the HSL values in `src/index.css`
3. Test contrast ratios at [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## ♿ Accessibility Features

This site meets WCAG 2.1 AA standards:
- Semantic HTML structure
- Proper heading hierarchy (one H1 per page)
- Descriptive alt text for all images
- Keyboard-navigable interface
- Visible focus indicators
- Color-blind friendly palette
- Sufficient color contrast (4.5:1 minimum)

## 🛠️ Technical Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React Router** - Navigation
- **Shadcn UI** - Component library

## 📱 Responsive Design

The site is fully responsive and tested on:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1440px+)

## 🐛 Troubleshooting

**Site not showing after enabling GitHub Pages?**
- Wait 5-10 minutes for initial deployment
- Check "Actions" tab for build status
- Ensure `index.html` is in the root directory

**Images not loading?**
- Verify image paths are correct
- Check that images are in `src/assets/`
- Ensure images are imported in component files

**Links not working?**
- Update all placeholder URLs (LinkedIn, email, etc.)
- Test navigation between pages
- Verify all case study links are correct

## 📄 License

This project template is free to use for personal portfolios. Please customize it with your own content and images.

---

**Need help?** Open an issue in this repository or reach out through the contact form on the live site.
