/* Vicky Dresses catalogue renderer */
(() => {
  const money = value => value == null || Number.isNaN(Number(value))
    ? ""
    : `₹${Number(value).toLocaleString("en-IN")}`;

  function calculatePrice(p) {
    const mrp = Number(p.mrp);
    const sp = Number(p.sellingPrice);
    const d = Number(p.discount);

    if (p.discountType === "mrp" && Number.isFinite(mrp) && d > 0) {
      return { finalPrice: Math.round(mrp * (1 - d / 100)), basePrice: mrp, discounted: true, label: `${d}% OFF MRP` };
    }
    if (p.discountType === "sp" && Number.isFinite(sp) && d > 0) {
      return { finalPrice: Math.round(sp * (1 - d / 100)), basePrice: sp, discounted: true, label: `${d}% OFF SP` };
    }
    return { finalPrice: Number.isFinite(sp) ? sp : (Number.isFinite(mrp) ? mrp : null), basePrice: null, discounted: false, label: "" };
  }

  function whatsapp(p) {
    const c = calculatePrice(p);
    const text = `Hello Vicky Dresses, I am interested in ${p.name}${c.finalPrice != null ? ` (₹${c.finalPrice})` : ""}. Is it available?`;
    return `https://wa.me/916201016171?text=${encodeURIComponent(text)}`;
  }

  function card(p, dark=false) {
    const c = calculatePrice(p);
    const badge = c.discounted ? `<span class="discount-badge">${c.label}</span>` : "";
    const mrpNote = p.discountType === "sp" && p.mrp ? `<div class="mrp-note">MRP ${money(p.mrp)}</div>` : "";
    const price = c.finalPrice == null ? "" : c.discounted
      ? `<div class="price-row"><strong>${money(c.finalPrice)}</strong><del>${money(c.basePrice)}</del></div>`
      : `<div class="price-row"><strong>${money(c.finalPrice)}</strong></div>`;

    return `<article class="product ${dark ? "product-dark" : ""}">
      <a class="product-img" href="${p.image}" target="_blank" rel="noopener">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        ${badge}
      </a>
      <div class="product-info">
        <p>${p.category}</p>
        <h3>${p.name}</h3>
        ${mrpNote}${price}
        <a class="product-wa" href="${whatsapp(p)}" target="_blank" rel="noopener">💬 Enquire on WhatsApp →</a>
      </div>
    </article>`;
  }

  function offerCard(p) {
    const c = calculatePrice(p);
    return `<article class="offer-card offer-product">
      <span>${c.label}</span>
      <h3>${p.name}</h3>
      <p>${p.category}${c.finalPrice != null ? ` · ${money(c.finalPrice)}` : ""}</p>
      <a href="${whatsapp(p)}" target="_blank" rel="noopener">Enquire about this offer →</a>
    </article>`;
  }

  const featured = PRODUCTS.filter(p => p.featured);
  const offers = PRODUCTS.filter(p => p.offer && calculatePrice(p).discounted);

  document.getElementById("latest-grid").innerHTML = featured.slice(0, 6).map(p => card(p)).join("");
  document.getElementById("products-grid").innerHTML = featured.map(p => card(p, true)).join("");

  const specials = [
    ["MONTHLY OFFER", "Selected Styles on Sale", "Discount badges are calculated from MRP or SP and shown directly over product photos."],
    ["WHATSAPP", "Quick Enquiry", "Customers can ask about size, availability, price and current offers directly on WhatsApp."],
    ["FRESH CATALOGUE", "New Arrivals", "Refresh product photos, prices and discounts each month without changing the layout."]
  ];

  document.getElementById("offers-grid").innerHTML =
    specials.map(x => `<article class="offer-card"><span>${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p><a href="https://wa.me/916201016171?text=Hello%20Vicky%20Dresses%2C%20please%20tell%20me%20about%20your%20current%20offers." target="_blank" rel="noopener">Ask on WhatsApp →</a></article>`).join("") +
    offers.map(offerCard).join("");

  document.querySelectorAll("[data-shop-name]").forEach(e => e.textContent = SHOP.name);
  document.querySelectorAll("[data-shop-phone]").forEach(e => e.textContent = SHOP.displayPhone);
  document.querySelectorAll("[data-shop-location]").forEach(e => e.textContent = SHOP.location);
})();
