# Vicky Dresses — Aapki Apni Dukan

Static, responsive catalogue website for Vicky Dresses, Dhamdaha, Purnia.

## Important: catalogue updates every 3–4 days

You do NOT need to edit `index.html` for normal catalogue updates.

1. Put the new product photo inside `assets/`.
2. Open `products.js`.
3. Add or edit a product object in `PRODUCTS`.
4. Change `image:` to the new filename.
5. Set `name`, `category`, optional `price`, optional `oldPrice`, optional `discount`, `featured`, and `offer`.
6. Commit the changes to GitHub. GitHub Pages will publish automatically.

Example:

```js
{ id:'shirt-new', name:'Blue Casual Shirt', category:'Shirts', image:'assets/blue-shirt.jpg', price:799, oldPrice:999, discount:20, featured:true, offer:true }
```

## Offers

Edit `SPECIAL_OFFERS` in `products.js` to change the shop-value offers. The current demo includes:
- Selected clothing discounts
- Shop ₹2,000 and get a deo free
- Shop ₹2,500 and get a deo free

Confirm the actual offer/terms with the shop owner before publishing.

## WhatsApp

Change `SHOP.whatsapp` in `products.js` if this template is sold to another shop. Product enquiry links are generated automatically.

## Deploy

Upload the contents of this folder to the GitHub repository root and enable GitHub Pages from the `main` branch, `/ (root)`.
