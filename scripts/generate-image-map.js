const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname, '../public/images/products');
const products = require('../products.json');

const imageMap = {};

// Get all product folders
const folders = fs.readdirSync(productsDir);

folders.forEach(folder => {
  const folderPath = path.join(productsDir, folder);
  if (fs.statSync(folderPath).isDirectory()) {
    const files = fs.readdirSync(folderPath);
    
    // Find the first available image in priority order
    const imageFiles = files.filter(f => /\.(jpg|jpeg|png|webp|avif)$/i.test(f));
    
    if (imageFiles.length > 0) {
      // Priority: main.jpg > 1.jpg > 2.jpg > any other image
      let firstImage = imageFiles.find(f => f.toLowerCase() === 'main.jpg') ||
                      imageFiles.find(f => f === '1.jpg') ||
                      imageFiles.find(f => f === '2.jpg') ||
                      imageFiles[0];
      
      imageMap[folder] = firstImage;
    }
  }
});

console.log(JSON.stringify(imageMap, null, 2));
