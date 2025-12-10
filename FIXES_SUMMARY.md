# Fixes Applied

## Dark Theme
- ✅ Added complete dark theme CSS variables in `src/global/styles.scss`
- ✅ Includes dark mode borders, shadows, and surfaces
- ✅ Theme decorator added to Storybook preview
- ✅ Theme switcher in toolbar applies `data-theme` attribute

## Checkbox & Switch Boolean State
- ✅ Made `checked` prop mutable and reflective in both components
- ✅ Components now properly update their checked state when toggled
- ✅ Events emit the new boolean value
- ✅ Props reflect to attributes for proper HTML behavior

## Storybook Improvements
- ✅ Theme decorator applies theme to document root
- ✅ Theme persists across story navigation
- ✅ Better story examples for checkbox and switch

## Known Issues to Address
- ⚠️ MDX documentation files have syntax errors (Introduction.mdx, DesignTokens.mdx)
- Recommendation: Remove or simplify these files

## How to Test

1. Build components:
```bash
yarn build
```

2. Start Storybook:
```bash
yarn storybook
```

3. Test theme switcher:
   - Click theme icon in toolbar
   - Toggle between light/dark
   - Components should update colors

4. Test checkbox/switch:
   - Click checkbox - should toggle checked state
   - Click switch - should toggle on/off
   - Check browser console for change events
