# AADRILA Technologies Website - Project Structure

## 📁 Folder Structure

```
test/
├── src/
│   ├── assets/
│   │   ├── Images/          # All website images (logos, icons, product images, etc.)
│   │   └── Logo/            # Logo files (add your logo here)
│   │
│   ├── components/          # Reusable React components
│   │   ├── Header.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero section with title and CTA
│   │   ├── Industries.jsx   # Industries we serve (Healthcare, Lending, Insurance)
│   │   ├── Products.jsx     # Products section (DocSim, DocPilot, Doxtract)
│   │   ├── Blogs.jsx        # Blog posts section
│   │   ├── Contact.jsx      # Contact form and footer
│   │   ├── VisionMission.jsx # About Us - Vision and Mission
│   │   └── Team.jsx         # Team members section
│   │
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Home/Landing page
│   │   └── About.jsx        # About Us page
│   │
│   ├── layouts/             # Layout components
│   │   └── MainLayout.jsx   # Main layout wrapper with Header
│   │
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles (Tailwind CSS)
│
├── public/                  # Static assets
│   └── vite.svg
│
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Components Overview

### Home Page Components
1. **Hero** - Main banner with title and call-to-action buttons
2. **Industries** - Three industry cards (Healthcare, Lending, Insurance)
3. **Products** - Three product sections with features and benefits
4. **Blogs** - Blog posts preview section
5. **Contact** - Contact form and footer

### About Page Components
1. **VisionMission** - Vision and Mission cards
2. **Team** - Team members display
3. **Contact** - Contact form and footer

## 🖼️ Images Location

All images should be placed in: `src/assets/Images/`

The components are already configured to use images from this folder:
- Healthcare_Icon.png
- Lending_Icon.png
- Insurance_Icon.png
- Vision_Icon.png
- Mission_Icon.png
- Member Image.png
- Our Product 1.png
- Property 1=D 1.png
- Property 1=I 1.png
- Image [big-images-on-homepage] (1).png

**Logo:** Add your logo file(s) to `src/assets/Logo/` and update the import in `Header.jsx`

## 🚀 Getting Started

1. **Install dependencies** (already done):
   ```bash
   npm install
   ```

2. **Add your logo**:
   - Place logo file(s) in `src/assets/Logo/`
   - Update the import in `src/components/Header.jsx`

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 🛠️ Technologies Used

- React 19
- React Router DOM (for routing)
- Tailwind CSS v4 (for styling)
- Vite (build tool)

## 📝 Customization

All components are fully customizable. You can:
- Modify text content directly in component files
- Update images by replacing files in `src/assets/Images/`
- Change colors using Tailwind CSS classes
- Add new components in the `components/` folder
- Create new pages in the `pages/` folder

