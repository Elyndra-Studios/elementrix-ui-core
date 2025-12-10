#!/usr/bin/env node
/**
 * Script to convert all story files from document.createElement to lit-html
 * Run with: node convert-stories.js
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Simple stories that just need basic conversion
const simpleStories = [
  'el-alert', 'el-breadcrumbs', 'el-chip', 'el-pagination', 'el-progress',
  'el-select', 'el-skeleton', 'el-tabs', 'el-toggle-group', 'el-tooltip',
  'el-accordion', 'el-dropdown', 'el-form-field', 'el-menu', 'el-popover',
  'el-aspect-ratio', 'el-spacer', 'el-calendar', 'el-color-picker',
  'el-data-grid', 'el-date-picker', 'el-image', 'el-nav', 'el-rating',
  'el-search', 'el-sidebar', 'el-slider', 'el-stepper', 'el-table',
  'el-time-picker', 'el-carousel', 'el-command', 'el-drawer',
  'el-empty-state', 'el-file-upload', 'el-form', 'el-portal', 'el-transition'
];

async function convertStory(filePath) {
  console.log(`Converting: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already converted
  if (content.includes("from 'lit-html'")) {
    console.log(`  ✓ Already converted`);
    return;
  }
  
  // Add lit-html import after the first import
  content = content.replace(
    /(import type { Meta, StoryObj } from '@storybook\/web-components-vite';)/,
    "$1\nimport { html } from 'lit-html';"
  );
  
  // This is a simplified conversion - manual review recommended
  console.log(`  ⚠ Needs manual review - added lit-html import only`);
  
  fs.writeFileSync(filePath, content, 'utf8');
}

async function main() {
  const storyFiles = await glob('src/components/**/*.stories.ts', {
    cwd: __dirname,
    absolute: true
  });
  
  console.log(`Found ${storyFiles.length} story files\n`);
  
  for (const file of storyFiles) {
    // Skip already converted files
    if (file.includes('el-badge') || file.includes('el-button') || 
        file.includes('el-checkbox') || file.includes('el-input') ||
        file.includes('el-label') || file.includes('el-switch') ||
        file.includes('el-textarea') || file.includes('el-card') ||
        file.includes('el-modal') || file.includes('el-container') ||
        file.includes('el-stack') || file.includes('el-grid')) {
      continue;
    }
    
    await convertStory(file);
  }
  
  console.log('\n✓ Conversion complete!');
  console.log('⚠ Please manually review and update render functions to use html`` templates');
}

main().catch(console.error);
