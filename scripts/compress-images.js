#!/usr/bin/env node
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// Get all jpg and png files in public directory
const imageFiles = fs.readdirSync(publicDir).filter(file => 
  /\.(jpg|jpeg|png)$/i.test(file)
);

console.log(`Found ${imageFiles.length} images to compress...\n`);

imageFiles.forEach(async (file) => {
  const inputPath = path.join(publicDir, file);
  const outputPath = path.join(publicDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
  
  try {
    const info = await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const newSize = info.size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
    
    console.log(`✓ ${file} → ${path.basename(outputPath)}`);
    console.log(`  ${(originalSize / 1024 / 1024).toFixed(2)} MB → ${(newSize / 1024 / 1024).toFixed(2)} MB (${savings}% smaller)\n`);
  } catch (err) {
    console.error(`✗ Error processing ${file}:`, err.message);
  }
});
