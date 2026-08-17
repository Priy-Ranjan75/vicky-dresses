# Vicky Dresses — Catalogue Update Guide

## Product images

Put new product images inside `assets/`.

Use clean images without filenames, prices, or discount text inside the image.

Then set the filename in `products.js`:

```js
image: "assets/new-shirt.jpg"
```

## Product data

Edit `products.js`:

```js
{
  id: "shirt-new",
  name: "New Casual Shirt",
  category: "Shirts",
  image: "assets/new-shirt.jpg",
  mrp: 1500,
  sellingPrice: 1200,
  discountType: "sp",
  discount: 10,
  featured: true,
  offer: true
}
```

## Discount types

### Discount on MRP

```js
discountType: "mrp"
```

Example:

```js
mrp: 1500,
sellingPrice: 1200,
discountType: "mrp",
discount: 20
```

Final price: **₹1,200**

### Discount on Selling Price

```js
discountType: "sp"
```

Example:

```js
mrp: 1500,
sellingPrice: 1200,
discountType: "sp",
discount: 10
```

Final price: **₹1,080**

### No discount

```js
discountType: null,
discount: null
```

No discount badge is shown.

## Visibility

```js
featured: true
```

Shows the product in the main catalogue.

```js
offer: true
```

Shows the product in Offers when a valid discount is present.

## Shop info & phone number

Edit the `SHOP` object at the top of `products.js`:

```js
const SHOP = {
  name: "Vicky Dresses",
  whatsapp: "916201016171",
  displayPhone: "62010 16171",
  location: "...",
  hours: "..."
};
```

Every WhatsApp and call link on the page reads from `SHOP.whatsapp` automatically —
you never need to edit `index.html` to change the phone number.

## Promo cards (Offers section)

Edit `SPECIAL_OFFERS` in `products.js` to change the three general promo cards
shown at the top of the Offers section (separate from per-product discount badges):

```js
{ badge:"MONTHLY OFFER", title:"...", text:"..." }
```

## Monthly update

For normal catalogue updates, edit only:

- `products.js`
- `assets/`

Do not put discount text into the product image. The website creates the discount badge automatically.

After saving, commit the changes to GitHub Pages.
