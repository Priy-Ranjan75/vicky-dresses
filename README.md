# Vicky Dresses — Sellable Static Catalogue Website

This version was rebuilt after cross-checking the live GitHub Pages site and repository structure.

## What was fixed

- Removed the visible filename text such as `product-1.jpg` from catalogue photos.
- Replaced the broken/blank product assets with clean crops from the usable images already present in the original project.
- Made product cards align consistently with a fixed image area and responsive grid.
- Added a real discount badge **on top of the product image**.
- Discount is controlled by `discount:` in `products.js`.
- Price, old price and discount are separate data fields.
- Mobile navigation is fixed and remains usable at smaller widths.
- The Offers section no longer depends on the product image itself containing a discount.
- Kept WhatsApp enquiry buttons for every product.
- Normal monthly catalogue work can be done without editing `index.html`.


## Pricing and discount rules

The catalogue supports three discount modes:

### 1. Discount on MRP

```js
{
  mrp: 1500,
  sellingPrice: 1200,
  discountType: "mrp",
  discount: 20
}
```

The website calculates **20% of ₹1,500 = ₹300**, so the customer sees **₹1,200**.

### 2. Discount on Selling Price (SP)

```js
{
  mrp: 1500,
  sellingPrice: 1200,
  discountType: "sp",
  discount: 10
}
```

The website calculates **10% of ₹1,200 = ₹120**, so the customer sees **₹1,080**.

The image badge says **10% OFF SP**.

### 3. No discount

```js
{
  mrp: 1500,
  sellingPrice: 1500,
  discountType: null,
  discount: null
}
```

The website shows **₹1,500** with no discount badge.

### Important

Use only these values:

- `"mrp"` — discount calculated from MRP
- `"sp"` — discount calculated from selling price
- `null` — no discount

The website calculates the final customer price automatically. You should not manually calculate the discounted amount.

## Monthly update workflow

For each monthly update:

1. Put the new product photo into `assets/`.
2. Open `products.js`.
3. Add or edit one product object.
4. Change `image:` to the new filename.
5. Update `name`, `category`, `price`, `oldPrice`, `discount`.
6. Set `featured:true` if it should appear in the catalogue.
7. Set `offer:true` if it should also appear in the Offers section.
8. Commit the changes to GitHub.
9. GitHub Pages publishes the updated site.

### Example

```js
{
  id:"shirt-new",
  name:"New Casual Shirt",
  category:"Shirts",
  image:"assets/shirt-new.jpg",
  mrp:1500,
  sellingPrice:1200,
  discountType:"sp",
  discount:10,
  featured:true,
  offer:true
}
```

The customer will see:

**20% OFF** as a badge directly over the product photo.

The actual photo stays clean. This is important because the shop can change the discount next month without editing the image.

## Important distinction

This is a static GitHub Pages website. It does **not** include a customer login/admin dashboard.

That is actually useful for a monthly update service:

- Client sends new photos + price/discount list.
- You update `products.js` and `assets/`.
- You commit/publish the update.
- You can charge a monthly catalogue maintenance fee.

If the client later wants to update products themselves from a browser, that should be sold as a separate upgrade because it requires a backend/admin system.

## Suggested service model

### Starter
One-time website setup + deployment.

### Monthly Catalogue Care
A fixed number of product photo/price/discount updates each month.

Suggested commercial structure in India:

- One-time setup: **₹4,999–₹9,999**
- Monthly catalogue maintenance: **₹999–₹2,499/month**
- Extra product beyond the monthly allowance: **₹50–₹150/product**
- Larger redesign / new section: quote separately
- Customer-managed admin panel: separate project, typically **₹8,000+** depending on backend and hosting

These are positioning suggestions, not mandatory market prices.

## Deploy on GitHub Pages

Upload the contents of this folder to the repository root.

Then in GitHub:

`Settings → Pages → Deploy from a branch → main → /(root)`

The website will publish from the repository.

## Client handover

For a paid client, give them:

- Website URL
- WhatsApp number configured in `products.js`
- Monthly update plan
- Number of catalogue updates included
- Turnaround time
- Extra-update price
- What counts as a redesign versus a normal catalogue update

Do not promise unlimited updates under a fixed monthly price.
