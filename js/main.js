import { products, WHATSAPP } from './products.js';
import { mount3D } from './viewer3d.js';

/* ---------- Hero photo ---------- */
const heroPhoto = 'easy-chanaa-shorts-grade-05-watermarked.jpg';
if (heroPhoto) {
  const img = Object.assign(document.createElement('img'), {
    src: heroPhoto,
    alt: 'Easy Chanaa piece being worn',
    fetchPriority: 'high'
  });
  document.getElementById('heroShot').replaceChildren(img);
}

/* ---------- Product grid ---------- */
const grid = document.getElementById('productGrid');
const placeholders = Array.from({ length: 4 }, () => ({
  name: 'Product name',
  price: 'R000',
  photos: [],
  model: ''
}));
const list = products.length ? products : placeholders;

function makeCard(p) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'card reveal';

  const shot = document.createElement('span');
  shot.className = 'shot';
  if (p.photos && p.photos[0]) {
    const im = new Image();
    im.src = p.photos[0];
    im.alt = p.name;
    im.loading = 'lazy';
    shot.append(im);
  } else {
    const slot = document.createElement('span');
    slot.className = 'slot';
    slot.textContent = 'Photo';
    shot.append(slot);
  }

  const name = document.createElement('span');
  name.className = 'card__name';
  name.textContent = p.name;

  const price = document.createElement('span');
  price.className = 'card__price';
  price.textContent = p.price;

  btn.append(shot, name, price);
  btn.addEventListener('click', () => openModal(p));
  return btn;
}

grid.replaceChildren(...list.map(makeCard));

/* ---------- Scroll reveal ---------- */
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('is-visible'));
}

/* ---------- Product pop-up ---------- */
const dlg = document.getElementById('productModal');
const pmTitle = document.getElementById('pmTitle');
const pmPrice = document.getElementById('pmPrice');
const gallery = document.getElementById('pmGallery');
const stage3d = document.getElementById('pm3d');
const toggle3d = document.getElementById('pmToggle3d');
const orderBtn = document.getElementById('pmOrder');
let current3D = null;

function openModal(p) {
  pmTitle.textContent = p.name;
  pmPrice.textContent = p.price;

  const photos = p.photos && p.photos.length ? p.photos : [null];
  gallery.replaceChildren(...photos.map((src) => {
    const item = document.createElement('div');
    item.className = 'gallery__item';
    if (src) {
      const im = new Image();
      im.src = src;
      im.alt = p.name;
      item.append(im);
    } else {
      item.textContent = 'Photo';
    }
    return item;
  }));
  gallery.scrollLeft = 0;

  gallery.hidden = false;
  stage3d.hidden = true;
  toggle3d.hidden = !p.model;
  toggle3d.textContent = 'View in 3D';
  toggle3d.onclick = () => {
    const show3D = stage3d.hidden;
    stage3d.hidden = !show3D;
    gallery.hidden = show3D;
    toggle3d.textContent = show3D ? 'View photos' : 'View in 3D';
    if (show3D && !current3D) current3D = mount3D(stage3d, p.model);
  };

  const msg = 'Hi Easy Chanaa, I would like to order: ' + p.name;
  orderBtn.href = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg);

  document.body.classList.add('no-scroll');
  dlg.showModal();
}

dlg.addEventListener('close', () => {
  document.body.classList.remove('no-scroll');
  if (current3D) {
    current3D.destroy();
    current3D = null;
  }
});

dlg.addEventListener('click', (e) => {
  if (e.target === dlg) dlg.close();
});

document.getElementById('pmClose').addEventListener('click', () => dlg.close());
