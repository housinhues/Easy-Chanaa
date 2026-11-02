import { products, WHATSAPP } from './products.js';

const dlg = document.getElementById('productModal');
const gallery = document.getElementById('pmGallery');
const openButtons = document.querySelectorAll('[data-open-product]');
const firstProduct = products[0];

function openProduct(product) {
  if (!product || !dlg) return;

  document.getElementById('pmTitle').textContent = product.name;
  document.getElementById('pmPrice').textContent = product.price || 'Price on request';

  const photos = product.photos || [];
  gallery.replaceChildren(...photos.map((src, index) => {
    const item = document.createElement('div');
    item.className = 'gallery__item';
    const image = new Image();
    image.src = src;
    image.alt = `${product.name}, photo ${index + 1} of ${photos.length}`;
    image.decoding = 'async';
    item.append(image);
    return item;
  }));
  gallery.scrollLeft = 0;

  const message = `Hi Easy Chanaa, I'm interested in the ${product.name}. Could you share sizing, availability and price?`;
  document.getElementById('pmOrder').href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

  document.body.classList.add('no-scroll');
  dlg.showModal();
}

openButtons.forEach((button) => button.addEventListener('click', () => openProduct(firstProduct)));

dlg.addEventListener('close', () => document.body.classList.remove('no-scroll'));
dlg.addEventListener('click', (event) => {
  if (event.target === dlg) dlg.close();
});
document.getElementById('pmClose').addEventListener('click', () => dlg.close());
