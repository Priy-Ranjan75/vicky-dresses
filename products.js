/*
 VICKY DRESSES — MONTHLY CATALOGUE UPDATE FILE
 ------------------------------------------------
 For normal monthly updates, edit ONLY this file.

 1. Add the new photo to /assets
 2. Change image to that filename
 3. Update name/category/mrp/sellingPrice/discountType/discount
 4. Set featured:true to show in the main catalogue
 5. Set offer:true to show in the Offers section
 6. Commit to GitHub — GitHub Pages publishes automatically

 IMPORTANT:
 - discountType: "mrp" = discount is calculated from MRP.
 - discountType: "sp" = discount is calculated from the normal selling price.
 - discountType: null = no discount calculation.
 - discount: 20 means 20% OFF and appears as a badge ON the product image.
 - mrp/sellingPrice are optional where appropriate.
*/

const SHOP = {
  name: "Vicky Dresses",
  whatsapp: "916201016171",
  displayPhone: "62010 16171",
  location: "Opposite to SBI Bank, Dhamdaha, Purnia, Bihar, India",
  hours: "9:00 AM – 11:00 PM · Every day"
};

const PRODUCTS = [
  { id:"shirt-black", name:"Premium Black Shirt", category:"Shirts", image:"assets/shirt-black.jpg", mrp:1099, sellingPrice:899, discountType:"mrp", discount:18, featured:true, offer:true },
  { id:"kurta-maroon", name:"Maroon Kurta", category:"Ethnic Wear", image:"assets/kurta-maroon.jpg", mrp:1499, sellingPrice:1199, discountType:"mrp", discount:20, featured:true, offer:true },
  { id:"shirt-striped", name:"Classic Striped Shirt", category:"Shirts", image:"assets/shirt-striped.jpg", mrp:999, sellingPrice:999, discountType:null, discount:null, featured:true, offer:false },
  { id:"jeans", name:"Men's Denim Jeans", category:"Jeans", image:"assets/jeans.jpg", mrp:1599, sellingPrice:1299, discountType:"mrp", discount:19, featured:true, offer:true },
  { id:"jockey", name:"Jockey Essentials", category:"Jockey", image:"assets/jockey.jpg", mrp:null, sellingPrice:null, discountType:null, discount:null, featured:true, offer:false },
  { id:"fragrance", name:"Men's Fragrance", category:"Fragrances", image:"assets/fragrance.jpg", mrp:799, sellingPrice:699, discountType:"mrp", discount:13, featured:true, offer:true },
  { id:"footwear", name:"Men's Footwear", category:"Footwear", image:"assets/footwear.jpg", mrp:1799, sellingPrice:1499, discountType:"mrp", discount:17, featured:true, offer:true },
  { id:"watch", name:"Classic Chronograph Watch", category:"Accessories", image:"assets/watch.jpg", mrp:null, sellingPrice:1999, discountType:null, discount:null, featured:true, offer:false },
  { id:"denim-stack", name:"Denim Collection", category:"Jeans", image:"assets/denim-stack.jpg", mrp:null, sellingPrice:null, discountType:"sp", discount:15, featured:true, offer:true },
  { id:"puma-tshirt", name:"Premium Sports T-Shirt", category:"T-Shirts", image:"assets/puma-tshirt.jpg", mrp:999, sellingPrice:899, discountType:"sp", discount:10, featured:true, offer:true }
];

const SPECIAL_OFFERS = [
  { badge:"MONTHLY OFFER", title:"Selected Styles on Sale", text:"Discounts are shown directly on the product image so customers can see the offer immediately." },
  { badge:"WHATSAPP", title:"Quick Enquiry", text:"Customers can ask about size, availability, price and current offers directly on WhatsApp." },
  { badge:"FRESH CATALOGUE", title:"New Arrivals", text:"The catalogue can be refreshed every month without changing the website layout." }
];
