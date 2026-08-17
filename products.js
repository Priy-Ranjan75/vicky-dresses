/*
  VICKY DRESSES - EASY CATALOGUE UPDATE FILE
  ------------------------------------------------
  Every 3-4 days, you only need to update this file.
  Put the new photo inside /assets and change the image filename below.

  discount: set a number like 20 for 20% off, or null for no discount.
  price / oldPrice are optional. Set them to null if you don't want to show prices.
  featured: true puts the product in the main catalogue.
  offer: true puts it in the Discounts & Offers section.
*/

const SHOP = {
  name: 'Vicky Dresses',
  whatsapp: '916201016171',
  displayPhone: '62010 16171',
  location: 'Opposite to SBI Bank, Dhamdaha, Purnia, Bihar, India'
};

const PRODUCTS = [
  { id:'shirt-01', name:'Casual Shirts', category:'Shirts', image:'assets/product-1.png', price:null, oldPrice:null, discount:null, featured:true, offer:false },
  { id:'tee-01', name:'Premium T-Shirts', category:'T-Shirts', image:'assets/product-2.png', price:null, oldPrice:null, discount:null, featured:true, offer:false },
  { id:'kurta-01', name:'Ethnic Kurta', category:'Ethnic Wear', image:'assets/product-3.png', price:null, oldPrice:null, discount:10, featured:true, offer:true },
  { id:'jacket-01', name:'Smart Jackets', category:'Jackets', image:'assets/product-4.png', price:null, oldPrice:null, discount:null, featured:true, offer:false },
  { id:'denim-01', name:'Denim Styles', category:'Jeans', image:'assets/product-5.png', price:null, oldPrice:null, discount:15, featured:true, offer:true },
  { id:'party-01', name:'Party Wear', category:'Party Wear', image:'assets/product-6.png', price:null, oldPrice:null, discount:null, featured:true, offer:false },
  { id:'shoes-01', name:'Men’s Footwear', category:'Footwear', image:'assets/product-7.png', price:null, oldPrice:null, discount:null, featured:true, offer:false },
  { id:'belt-01', name:'Belts & Accessories', category:'Accessories', image:'assets/product-8.png', price:null, oldPrice:null, discount:null, featured:true, offer:false },
  { id:'bag-01', name:'Bags', category:'Bags', image:'assets/product-9.png', price:null, oldPrice:null, discount:null, featured:true, offer:false },
  { id:'trouser-01', name:'Trousers', category:'Trousers', image:'assets/product-10.png', price:null, oldPrice:null, discount:10, featured:true, offer:true },
  { id:'jockey-01', name:'Jockey Essentials', category:'Jockey', image:'assets/product-11.png', price:null, oldPrice:null, discount:null, featured:true, offer:false }
];

const SPECIAL_OFFERS = [
  { title:'Extra Savings', text:'Selected clothing styles are available with special discounts.', badge:'UP TO 15% OFF' },
  { title:'Shop ₹2,000 & Get a Deo Free', text:'Free deodorant on purchases of ₹2,000 or more. Terms may apply.', badge:'FREE DEO' },
  { title:'Shop ₹2,500 & Get a Deo Free', text:'Special free-deo offer on purchases of ₹2,500 or more. Ask in store for details.', badge:'FREE DEO' }
];
