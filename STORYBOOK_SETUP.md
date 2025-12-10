# Storybook Setup & Improvements

## 🎨 What's New

### 1. **Lit & Web Components Integration**
- Switched from `@storybook/html-webpack5` to `@storybook/web-components-webpack5`
- Better support for custom elements and Stencil components
- Improved type safety and documentation

### 2. **Custom Theme**
- Created `manager.ts` with custom Elementrix UI theme
- Matches your design system colors (primary blue #3b82f6)
- Custom fonts: Inter/SF Mono
- Consistent spacing and border radius

### 3. **Theme Switcher**
- Added light/dark theme toggle in toolbar
- Automatic theme application via `data-theme` attribute
- Smooth transitions between themes
- Background color presets (light, dark, subtle)

### 4. **Enhanced Preview**
- Better story organization with custom sort order
- Table of contents in docs
- Enhanced controls with color/date matchers
- Improved layout options

### 5. **Modern Component Styling**
- **Buttons**: Added gradient backgrounds, shine effects, modern shadows
- Improved hover states with lift animations
- Better disabled states
- Semibold font weight for better readability

### 6. **Documentation**
- **Introduction.mdx**: Complete library overview with features, quick start, and categories
- **DesignTokens.mdx**: Interactive design token showcase with color swatches, typography scales, spacing, shadows

## 📁 New Files Created

```
.storybook/
├── manager.ts              # Custom Storybook theme
├── preview-head.html       # Theme switcher script & styles
├── decorators.tsx          # Theme decorator for stories
└── preview.ts              # Enhanced preview config

src/stories/
├── Introduction.mdx        # Library introduction
└── DesignTokens.mdx       # Design system documentation
```

## 🚀 Usage

### Run Storybook
```bash
yarn build        # Build components first
yarn storybook    # Start Storybook on port 6006
```

### Theme Switcher
Click the theme icon in the Storybook toolbar (top right) to toggle between light and dark modes.

### Story Organization
Stories are now organized in this order:
1. Introduction
2. Design System (Tokens, Colors, Typography, Spacing)
3. Atoms
4. Molecules
5. Organisms
6. Layout
7. Utilities

## 🎯 Component Improvements

### el-button
- ✨ Gradient background on primary variant
- ✨ Shine effect on hover
- ✨ Modern shadow elevations
- ✨ Lift animation on hover
- ✨ Better active state feedback

### Future Enhancements
- Add more interactive examples in stories
- Create component composition examples
- Add accessibility documentation
- Create playground stories for testing

## 📦 Dependencies Added
- `@storybook/web-components-webpack5`
- `@storybook/manager-api`
- `@storybook/theming`

## 🔧 Configuration Updates
- Updated `main.ts` to use web-components framework
- Enhanced `preview.ts` with theme globals and better parameters
- Added custom theme in `manager.ts`
- Added theme switching logic in `preview-head.html`
