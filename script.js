const menuBtn = document.querySelector(".menu-btn");
const links = document.querySelector(".nav-links");

if (menuBtn && links) {
  menuBtn.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

const waNumber = SHOP.whatsapp;

const money = value =>
  value == null ? "" : `₹${Number(value).toLocaleString("en-IN")}`;

function calculatePrice(product) {
  const mrp = Number(product.mrp);
  const sp = Number(product.sellingPrice);
  const discount = Number(product.discount);

  if (!Number.isFinite(discount) || discount <= 0 || !product.discountType) {
    return {
      finalPrice: Number.isFinite(sp) ? sp : (Number.isFinite(mrp) ? mrp : null),
      basePrice: Number.isFinite(sp) ? sp : null,
      hasDiscount: false
    };
  }

  if (product.discountType === "mrp" && Number.isFinite(mrp)) {
    return {
      finalPrice: Math.round(mrp * (1 - discount / 100)),
      basePrice: mrp,
      hasDiscount: true
    };
  }

  if (product.discountType === "sp" && Number.isFinite(sp)) {
    return {
      finalPrice: Math.round(sp * (1 - discount / 100)),
      basePrice: sp,
      hasDiscount: true
    };
  }

  return {
    finalPrice: Number.isFinite(sp) ? sp : (Number.isFinite(mrp) ? mrp : null),
    basePrice: Number.isFinite(sp) ? sp : null,
    hasDiscount: false
  };
}

const waLink = product => {
  const calc = calculatePrice(product);
  const priceText = calc.finalPrice ? ` (₹${calc.finalPrice})` : "";
  const text = `Hello ${SHOP.name}, I am interested in ${product.name}${priceText}. Is it available?`;
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
};

function productCard(product, dark = false) {
  const calc = calculatePrice(product);

  const discount = calc.hasDiscount
    ? `<span class="discount-badge">${product.discount}% OFF ${product.discountType === "mrp" ? "MRP" : "SP"}</span>`
    : "";

  let price = "";
  if (calc.finalPrice != null) {
    if (calc.hasDiscount) {
      price = `<div class="price-row">
        <strong>${money(calc.finalPrice)}</strong>
        <del>${money(calc.basePrice)}</del>
        <small>${product.discountType === "mrp" ? "after MRP discount" : "after SP discount"}</small>
      </div>`;
    } else {
      price = `<div class="price-row"><strong>${money(calc.finalPrice)}</strong></div>`;
    }
  }

  const mrpLine = product.mrp && product.discountType === "sp"
    ? `<div class="mrp-note">MRP ${money(product.mrp)}</div>`
    : "";

  return `
    <article class="product ${dark ? "product-dark" : ""}">
      <a class="product-img" href="${product.image}" target="_blank" rel="noopener">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${discount}
      </a>
      <div class="product-info">
        <p>${product.category}</p>
        <h3>${product.name}</h3>
        ${mrpLine}
        ${price}
        <a class="product-wa" href="${waLink(product)}" target="_blank" rel="noopener">
          💬 Enquire on WhatsApp →
        </a>
      </div>
    </article>
  `;
}

const featured = PRODUCTS.filter(p => p.featured);
const offers = PRODUCTS.filter(p => p.offer && p.discount && (p.discountType === "mrp" || p.discountType === "sp"));

document.getElementById("latest-grid").innerHTML =
  featured.slice(0, 6).map(p => productCard(p)).join("");

document.getElementById("products-grid").innerHTML =
  featured.map(p => productCard(p, true)).join("");

document.getElementById("offers-grid").innerHTML =
  SPECIAL_OFFERS.map(o => `
    <article class="offer-card">
      <span>${o.badge}</span>
      <h3>${o.title}</h3>
      <p>${o.text}</p>
      <a href="https://wa.me/${waNumber}?text=${encodeURIComponent("Hello Vicky Dresses, please tell me about your current offers.")}"
         target="_blank" rel="noopener">Ask on WhatsApp →</a>
    </article>
  `).join("") +
  offers.map(p => `
    <article class="offer-card offer-product">
      <span>${p.discount}% OFF ${p.discountType === "mrp" ? "MRP" : "SP"}</span>
      <h3>${p.name}</h3>
      <p>${p.category}${p.price ? ` · ${money(p.price)}` : ""}</p>
      <a href="${waLink(p)}" target="_blank" rel="noopener">Enquire about this offer →</a>
    </article>
  `).join("");

document.querySelectorAll("[data-shop-name]").forEach(el => {
  el.textContent = SHOP.name;
});
document.querySelectorAll("[data-shop-phone]").forEach(el => {
  el.textContent = SHOP.displayPhone;
});
document.querySelectorAll("[data-shop-location]").forEach(el => {
  el.textContent = SHOP.location;
});
