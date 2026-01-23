# Metfold Sheet Metal - Service Pages Complete Documentation

## ✨ Beautiful CSS for All Service Pages

### File Created: `src/components/ServicePage.css`

This comprehensive CSS file provides beautiful, consistent styling for **ALL** service pages:
- ✅ Flashings
- ✅ Cladding  
- ✅ Roofing
- ✅ Rainwater Goods
- ✅ Fabrication
- ✅ Accessories

---

## 🎨 Design Features

### 1. **Hero Banner Section**
- **Height**: 450px (responsive)
- **Background**: Parallax effect with fixed attachment
- **Overlay**: Gradient (navy blue 85% opacity)
- **Typography**: 
  - Subtitle: 14px, uppercase, orange, 3px letter-spacing
  - Title: 64px → 28px (responsive), white, bold
- **Animations**: Fade in down (subtitle), fade in up (title)

### 2. **Breadcrumb Bar**
- **Background**: Gradient from light gray to white
- **Border**: 2px solid light border
- **Typography**: 14px, medium weight
- **Hover**: Orange color transition
- **Shadow**: Subtle 2px shadow

### 3. **Content Layout**
- **Grid**: 3:1 ratio (content : sidebar)
- **Gap**: 60px → 40px (responsive)
- **Responsive**: Stacks to single column on tablets

### 4. **Intro Text**
- **Size**: 20px → 16px (responsive)
- **Style**: Gradient background box
- **Border**: 5px left border (orange)
- **Padding**: 48px → 24px (responsive)
- **Shadow**: Subtle elevation

### 5. **Product Items**
- **Spacing**: 50px between items
- **Border**: 2px bottom border
- **Hover**: Slide right 8px
- **Title**: 
  - 32px → 22px (responsive)
  - Underline bar (60px → 80px on hover)
  - Orange gradient
- **Images**: 
  - Rounded corners (12px)
  - Scale 1.03 on hover
  - Shadow elevation
- **Lists**:
  - Checkmark bullets (orange)
  - Hover: Slide right 4px
  - Border bottom on each item

### 6. **Sidebar Widgets**

#### Order Widget
- **Background**: White with subtle gradient overlay
- **Border**: 5px top border (orange)
- **Shadow**: 12px → 20px on hover
- **Lift**: 8px on hover
- **Button**:
  - Orange gradient background
  - Navy gradient slide on hover
  - Lift 2px on hover
  - Shadow increase
  - PDF icon with spacing

#### Contact Widget
- **Background**: Navy gradient
- **Shadow**: 12px → 20px on hover
- **Lift**: 8px on hover
- **Phone Icon**:
  - 50px circular container
  - Orange background (20% opacity)
  - Scale 1.1 + rotate 360° on hover
  - Color flip on hover

---

## 📐 Perfect Alignment System

### Grid Layouts
```
Content Layout: 3:1 → 1:1 (tablet) → 1 column (mobile)
Sidebar: 2 columns (tablet) → 1 column (mobile)
```

### Spacing Hierarchy
```
Section Padding: 100px → 60px (mobile)
Content Gap: 60px → 40px → 32px
Widget Spacing: 40px → 30px → 24px
Product Items: 50px → 40px
```

### Typography Scale
```
Hero H1: 64px → 52px → 44px → 36px → 28px
Subtitle: 14px → 12px → 11px
Product H3: 32px → 28px → 26px → 24px → 22px
Intro: 20px → 18px → 17px → 16px
Body: 17px → 16px → 15px
```

---

## 🎭 Animations & Transitions

### Entrance Animations
- **fadeIn**: Main content (0.8s)
- **fadeInUp**: Hero title (0.8s)
- **fadeInDown**: Hero subtitle (0.6s)
- **fadeInRight**: Sidebar (0.8s)

### Hover Effects
- **Product Items**: Slide right 8px
- **Product Titles**: Underline extends 60px → 80px
- **Images**: Scale 1.03
- **Widgets**: Lift 8px + shadow increase
- **Buttons**: Gradient slide + lift 2px
- **Phone Icon**: Scale 1.1 + rotate 360°
- **List Items**: Slide right 4px

### Timing Functions
- **Standard**: 0.3s ease
- **Smooth**: cubic-bezier(0.4, 0, 0.2, 1)
- **Images**: 0.5s cubic-bezier
- **Entrance**: 0.6-0.8s ease-out

---

## 🎨 Color System

### Primary Colors
- **Navy**: `#0a2540` (primary-navy)
- **Blue**: `#1e3a5f` (primary-blue)
- **Orange**: `#ff6b35` (accent-orange)
- **Light Orange**: `#ff8c5a` (gradient end)

### Backgrounds
- **White**: `#ffffff`
- **Light**: `#f8f9fa`
- **Gradient**: `#f8f9fa → #ffffff`

### Borders
- **Default**: `#e8eef3`
- **Light**: `#f0f4f8`
- **Strong**: `#000` (high contrast)

### Text
- **Dark**: `#334155`
- **Light**: `#475569`
- **Muted**: `#64748b`
- **White**: `rgba(255, 255, 255, 0.9)`

---

## 📱 Responsive Breakpoints

### Desktop Large (1200px+)
- Full 3:1 grid layout
- 64px hero title
- 60px content gap
- All animations enabled

### Desktop (992px - 1199px)
- 3:1 grid maintained
- 52px hero title
- 40px content gap
- Reduced spacing

### Tablet (768px - 991px)
- **Single column content**
- **2-column sidebar**
- 44px hero title
- Parallax disabled
- Static positioning

### Mobile (480px - 767px)
- **All single column**
- 36px hero title
- 350px hero height
- Compact spacing
- Reduced padding

### Mobile Small (< 480px)
- 28px hero title
- 300px hero height
- Minimum spacing
- 24px widget padding
- Optimized typography

---

## ✅ Special Features

### Accessibility
- **Reduced Motion**: Respects user preferences
- **High Contrast**: Enhanced borders and backgrounds
- **Keyboard Navigation**: Focus states maintained
- **Screen Readers**: Semantic HTML structure

### Print Styles
- Hides hero, breadcrumb, and sidebar
- Single column layout
- Page break avoidance for products
- Optimized for printing

### Performance
- **CSS-only animations** (no JavaScript)
- **Hardware acceleration** (transform, opacity)
- **Efficient selectors**
- **Minimal repaints**

### Browser Support
- Modern CSS Grid
- Flexbox
- CSS Variables
- Transform animations
- Gradient backgrounds
- Backdrop filters

---

## 🚀 Usage

### Automatic Import
The CSS is imported in `ServicePage.jsx`:
```jsx
import './ServicePage.css';
```

### Applies To All Pages
- ✅ Flashings (`/flashings`)
- ✅ Cladding (`/cladding`)
- ✅ Roofing (`/roofing`)
- ✅ Rainwater (`/rainwater`)
- ✅ Fabrication (`/fabrication`)
- ✅ Accessories (`/accessories`)

### Consistent Styling
All service pages automatically receive:
- Beautiful hero banners
- Consistent typography
- Smooth animations
- Responsive layouts
- Professional widgets
- Perfect alignment

---

## 📊 File Statistics

- **Total Lines**: ~750 lines
- **Sections**: 6 major components
- **Responsive Breakpoints**: 5
- **Animations**: 4 entrance + 8 hover effects
- **Widgets**: 2 sidebar components
- **Special Features**: Accessibility + Print styles

---

## 🎯 Key Improvements Over Inline Styles

### Before (Inline Styles)
- ❌ Scattered throughout JSX
- ❌ Hard to maintain
- ❌ No hover states
- ❌ Limited animations
- ❌ Poor responsiveness

### After (ServicePage.css)
- ✅ Centralized styling
- ✅ Easy to maintain
- ✅ Rich hover effects
- ✅ Smooth animations
- ✅ Fully responsive
- ✅ Accessibility features
- ✅ Print optimization

---

## 🌟 Visual Highlights

1. **Hero Banner**: Parallax effect with gradient overlay
2. **Breadcrumbs**: Clean navigation with hover states
3. **Intro Box**: Highlighted with gradient background
4. **Product Cards**: Slide animation with expanding underline
5. **Images**: Zoom effect with shadow elevation
6. **Order Widget**: Lift effect with gradient button
7. **Contact Widget**: Navy gradient with rotating icon
8. **Lists**: Checkmarks with slide animation

---

**Created for**: Metfold Sheet Metal  
**Purpose**: Beautiful, consistent styling for all service pages  
**Status**: Production-ready ✅  
**Pages Covered**: 6 service pages  
**Branding**: Updated to Metfold throughout
