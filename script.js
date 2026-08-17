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
      return { finalPrice: Math.round(mrp * (1 - d / 100)), basePrice: mrp, discounted: true, label: `${d}% OFF` };
    }
    if (p.discountType === "sp" && Number.isFinite(sp) && d > 0) {
      return { finalPrice: Math.round(sp * (1 - d / 100)), basePrice: sp, discounted: true, label: `${d}% OFF` };
    }
    return { finalPrice: Number.isFinite(sp) ? sp : (Number.isFinite(mrp) ? mrp : null), basePrice: null, discounted: false, label: "" };
  }

  function whatsapp(p) {
    const c = calculatePrice(p);
    const text = `Hello ${SHOP.name}, I am interested in ${p.name}${c.finalPrice != null ? ` (₹${c.finalPrice})` : ""}. Is it available?`;
    return `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(text)}`;
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

  const generalWa = `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(`Hello ${SHOP.name}, please tell me about your current offers.`)}`;

  document.getElementById("offers-grid").innerHTML =
    SPECIAL_OFFERS.map(x => `<article class="offer-card"><span>${x.badge}</span><h3>${x.title}</h3><p>${x.text}</p><a href="${generalWa}" target="_blank" rel="noopener">Ask on WhatsApp →</a></article>`).join("") +
    offers.map(offerCard).join("");

  document.querySelectorAll("[data-shop-name]").forEach(e => e.textContent = SHOP.name);
  document.querySelectorAll("[data-shop-phone]").forEach(e => e.textContent = SHOP.displayPhone);
  document.querySelectorAll("[data-shop-location]").forEach(e => e.textContent = SHOP.location);

  // Keep every WhatsApp link on the page pointed at SHOP.whatsapp, so the
  // phone number only ever needs to be changed in one place (products.js).
  document.querySelectorAll('a[href^="https://wa.me/"]').forEach(a => {
    try {
      const u = new URL(a.getAttribute("href"));
      u.pathname = `/${SHOP.whatsapp}`;
      a.setAttribute("href", u.toString());
    } catch (e) { /* ignore malformed links */ }
  });
  document.querySelectorAll('a[href^="tel:"]').forEach(a => {
    a.setAttribute("href", `tel:${SHOP.whatsapp.replace(/^91/, "")}`);
  });
})();
