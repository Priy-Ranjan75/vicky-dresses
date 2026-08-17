const menuBtn = document.querySelector('.menu-btn');
const links = document.querySelector('.nav-links');
if (menuBtn && links) {
  menuBtn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }));
}

const waNumber = (typeof SHOP !== 'undefined' && SHOP.whatsapp) || '916201016171';
const money = v => v == null ? '' : `₹${Number(v).toLocaleString('en-IN')}`;
const waLink = (product) => {
  const text = `Hello Vicky Dresses, I am interested in ${product.name}${product.price ? ` (₹${product.price})` : ''}. Is it available?`;
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
};

function productCard(p, dark=false) {
  const discount = p.discount ? `<span class="discount-badge">${p.discount}% OFF</span>` : '';
  const price = p.price ? `<div class="price-row"><strong>${money(p.price)}</strong>${p.oldPrice ? `<del>${money(p.oldPrice)}</del>` : ''}</div>` : '';
  return `<article class="product ${dark ? 'product-dark' : ''}"><a class="product-img" href="${p.image}" target="_blank"><img src="${p.image}" alt="${p.name}" loading="lazy">${discount}</a><div class="product-info"><p>${p.category}</p><h3>${p.name}</h3>${price}<a class="product-wa" href="${waLink(p)}" target="_blank" rel="noopener">💬 Enquire on WhatsApp →</a></div></article>`;
}

const featured = PRODUCTS.filter(p => p.featured);
const offers = PRODUCTS.filter(p => p.offer || p.discount);
document.getElementById('latest-grid').innerHTML = featured.slice(0,6).map(p => productCard(p)).join('');
document.getElementById('products-grid').innerHTML = featured.map(p => productCard(p,true)).join('');

document.getElementById('offers-grid').innerHTML = SPECIAL_OFFERS.map(o => `<article class="offer-card"><span>${o.badge}</span><h3>${o.title}</h3><p>${o.text}</p><a href="https://wa.me/${waNumber}?text=${encodeURIComponent('Hello Vicky Dresses, please tell me about your current discounts and offers.')}" target="_blank" rel="noopener">Ask on WhatsApp →</a></article>`).join('') + offers.map(p => `<article class="offer-card offer-product"><span>${p.discount}% OFF</span><h3>${p.name}</h3><p>${p.category} · Selected item offer</p><a href="${waLink(p)}" target="_blank" rel="noopener">Enquire about this offer →</a></article>`).join('');
