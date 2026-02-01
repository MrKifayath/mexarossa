/**
 * Product name to image folder mapping
 * Maps product names from products.json to actual folder names in /public/images/products/
 */
const productImageMapping: Record<string, string> = {
  // Books - handle special characters
  "India: A History": "India A History",
  "India: A History v2": "India A History",
  "India: A History v3": "India A History",
  
  // Variants that share base product images
  "Cotton Kurti v2": "Cotton Kurti",
  "Cotton Kurti v3": "Cotton Kurti",
  "Cotton Kurti v4": "Cotton Kurti",
  "Running Shoes v2": "Running Shoes",
  "Running Shoes v3": "Running Shoes",
  "Running Shoes v4": "Running Shoes",
  "Cricket Bat v2": "Cricket Bat",
  "Cricket Bat v3": "Cricket Bat",
  "Cricket Bat v4": "Cricket Bat",
  "Yoga Mat v2": "Yoga Mat",
  "Yoga Mat v3": "Yoga Mat",
  "Yoga Mat v4": "Yoga Mat",
  "Dumbbell Set v2": "Dumbbell Set",
  "Dumbbell Set v3": "Dumbbell Set",
  "Dumbbell Set v4": "Dumbbell Set",
  "Camping Tent v2": "Camping Tent",
  "Camping Tent v3": "Camping Tent",
  "Camping Tent v4": "Camping Tent",
  "Coffee Maker v2": "Coffee Maker",
  "Coffee Maker v3": "Coffee Maker",
  "Coffee Maker v4": "Coffee Maker",
  "Microwave Oven v2": "Microwave Oven",
  "Microwave Oven v3": "Microwave Oven",
  "Microwave Oven v4": "Microwave Oven",
  "Air Purifier v2": "Air Purifier",
  "Air Purifier v3": "Air Purifier",
  "Office Chair v2": "Office Chair",
  "Office Chair v3": "Office Chair",
  "Study Table v2": "Study Table",
  "Study Table v3": "Study Table",
  "Bookshelf v2": "Bookshelf",
  "Bookshelf v3": "Bookshelf",
  "Denim Jeans v3": "Denim Jeans",
  "Denim Jeans v4": "Denim Jeans",
  "The Midnight Library v2": "The Midnight Library",
  "The Midnight Library v3": "The Midnight Library",
  "Indian Cooking Mastery v2": "Indian Cooking Mastery",
  "Indian Cooking Mastery v3": "Indian Cooking Mastery",
  "Atomic Habits v2": "Atomic Habits",
  "Atomic Habits v3": "Atomic Habits",
  "The Lean Startup v2": "The Lean Startup",
  "The Lean Startup v3": "The Lean Startup",
  "Cotton T-Shirt v4": "Cotton T-Shirt v3",
};

/**
 * Actual image filenames for each product folder
 * Generated from scanning /public/images/products/
 */
const imageFilenames: Record<string, string> = {
  "Air Purifier": "main.jpg",
  "Ambrane 20W Fast Charger": "main.jpg",
  "Atomic Habits": "main.jpg",
  "Bed Frame": "4.jpg",
  "Bluetooth Speaker": "main.jpg",
  "boAt Airdopes 131 TWS Earbuds": "main.jpg",
  "Bookshelf": "4.jpg",
  "Bose QuietComfort 45": "main.jpg",
  "Camping Tent": "1.jpg",
  "Coffee Maker": "MAIN.jpg",
  "Cotton Kurti": "main.jpg",
  "Cotton T-Shirt": "2.jpg",
  "Cotton T-Shirt v2": "main.jpg",
  "Cotton T-Shirt v3": "main.jpg",
  "Cricket Bat": "main.jpg",
  "Denim Jeans": "main.jpg",
  "Denim Jeans v2": "main.jpg",
  "Dumbbell Set": "2.jpg",
  "Electric Toothbrush": "main.jpg",
  "Fire-Boltt Phoenix Pro": "main.jpg",
  "Fire-Boltt Phoenix Pro Smartwatch": "main.jpg",
  "Formal Cotton Shirt": "main.jpg",
  "Formal Cotton Shirt v2": "main.jpg",
  "Formal Cotton Shirt v3": "main.jpg",
  "Formal Cotton Shirt v4": "main.jpg",
  "Gaming Mouse": "main.jpg",
  "Hair Dryer": "main.jpg",
  "HP 32GB USB 3.0 Flash Drive": "main.jpg",
  "India A History": "main.jpg",
  "Indian Cooking Mastery": "main.jpg",
  "Infinix Hot 30i": "main.jpg",
  "Intex Computer Speakers": "main.jpg",
  "Intex IT-2202 SUF OS 2.1 Computer Speakers": "main.jpg",
  "iPad Air": "main.jpg",
  "iPhone 15": "main.jpg",
  "itel A70": "main.jpg",
  "Laptop Bag": "61fFhsdHn4L._SX679_.jpg",
  "Lava Blaze 2 5G": "main.jpg",
  "Lenovo Legion 5": "main.jpg",
  "LG 55 OLED": "main.avif",
  "Logitech B175 Wireless Mouse": "main.jpg",
  "MacBook Air M2": "main.jpg",
  "Mi 10000mAh Power Bank 3i": "main.jpg",
  "Microwave Oven": "main.avif",
  "Moisturizer": "main.jpg",
  "Noise ColorFit Pro 4 Alpha Smartwatch": "main.jpg",
  "Office Chair": "4.webp",
  "OnePlus 12": "main.jpg",
  "Phone Case": "main.jpg",
  "POCO C65": "main.jpg",
  "POCO X6": "main.jpg",
  "Portronics Konnect L 1.2M USB Cable": "main.jpg",
  "Portronics Toad 20 Car Charger": "main.jpg",
  "Power Bank": "main.jpg",
  "Quantum QHM7468 2.4GHz Wireless Keyboard Mouse Combo": "main.jpg",
  "Realme 12": "main.jpg",
  "Realme Buds Air 3 Neo": "main.jpg",
  "Realme C55": "main.jpg",
  "Redgear A-15 Wired Gaming Headset": "main.jpg",
  "Redmi A3": "main.jpg",
  "Redmi Note 13": "main.jpg",
  "Refrigerator": "in-top-mount-freezer-convertible-5-in-1-rt41db6a4b22hl-543334301.avif",
  "Running Shoes": "2.jpg",
  "Samsung Galaxy A15": "main.jpg",
  "Samsung Galaxy M04": "main.jpg",
  "Shampoo": "main.jpg",
  "Silk Saree": "main.jpg",
  "Silk Saree v2": "main.jpg",
  "Silk Saree v3": "main.jpg",
  "Silk Saree v4": "main.jpg",
  "Smartwatch": "main.jpg",
  "Sofa": "56101502sd01877_01_1920x1080.webp",
  "Sony WH-1000XM5": "main.jpg",
  "Study Table": "4.jpg",
  "Sunglasses": "main.jpg",
  "Syska 10000mAh Power Bank": "main.jpg",
  "Tecno Spark 10 Pro": "main.jpg",
  "The Lean Startup": "main.jpg",
  "The Midnight Library": "main.jpg",
  "Washing Machine": "main.avif",
  "Watch": "main.jpg",
  "Wireless Earbuds": "main.jpg",
  "Wireless Keyboard": "main.jpg",
  "Yoga Mat": "main.jpg",
  "Zebronics Zeb-Sound Bomb 1 Speaker": "main.jpg"
};

/**
 * Get the main product image path based on product name
 * Uses actual filenames from the image folders
 */
export function getProductImage(productName: string): string {
  // Check if there's a mapping for this product
  const mappedName = productImageMapping[productName] || productName;
  
  // Get the actual filename
  const filename = imageFilenames[mappedName] || 'main.jpg';
  
  // Return the full path
  return `/images/products/${mappedName}/${filename}`;
}

/**
 * Get all product images for a product in priority order
 * Tries: main.jpg, 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg
 */
export function getProductImages(productName: string): string[] {
  const mappedName = productImageMapping[productName] || productName;
  const images: string[] = [];
  
  // Add the actual first image
  const firstImage = imageFilenames[mappedName];
  if (firstImage) {
    images.push(`/images/products/${mappedName}/${firstImage}`);
  }
  
  // Add standard numbered images as fallbacks
  for (let i = 1; i <= 5; i++) {
    images.push(`/images/products/${mappedName}/${i}.jpg`);
  }
  
  return images;
}

/**
 * Get the first available image for a product
 * Returns the path that should be tried first
 */
export function getFirstAvailableImage(productName: string): string {
  return getProductImage(productName);
}

/**
 * Fallback image if product image doesn't exist
 */
export const FALLBACK_IMAGE = '/placeholder.jpg';
