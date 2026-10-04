import './style.css'

const products = [
  { name: 'Easy Chanaa Cap / Black', image: '/assets/black_cap_instagram_4x5.png', tone: '01' },
  { name: 'Easy Chanaa Cap / Red', image: '/assets/red_cap_instagram_4x5.png', tone: '02' },
  { name: 'Easy Chanaa Cap / White', image: '/assets/white_cap_instagram_4x5.png', tone: '03' },
]

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="Easy Chanaa home">EASY CHANAA<span>®</span></a>
    <nav class="nav" aria-label="Main navigation">
      <a href="#collection">Collection</a>
      <a href="#story">Our story</a>
      <a href="#contact">Contact</a>
    </nav>
    <a class="header-link" href="#collection">Shop the drop <span>↗</span></a>
  </header>

  <main id="top">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">Independent headwear · Since 2024</p>
        <h1 id="hero-title">Easy on.<br><em>Everything else.</em></h1>
        <p class="hero-intro">Thoughtful caps for the days that do the most. Designed in small runs, made to move with you.</p>
        <a class="button button-dark" href="#collection">Explore the collection <span>↓</span></a>
      </div>
      <div class="hero-art">
        <img src="/assets/original_three_caps_instagram_studio.png" alt="Three Easy Chanaa caps in black, red, and white" />
        <p class="art-note">The first colour study<br /><strong>Black / Red / White</strong></p>
      </div>
    </section>

    <section class="marquee" aria-label="Brand statement">
      <div>MOVE LIGHT · KEEP IT EASY · MOVE LIGHT · KEEP IT EASY · </div>
    </section>

    <section class="collection section-shell" id="collection" aria-labelledby="collection-title">
      <div class="section-heading">
        <div><p class="eyebrow">01 / The first drop</p><h2 id="collection-title">The essentials,<br /><em>reconsidered.</em></h2></div>
        <p class="section-aside">One shape. Three moods.<br />No overthinking required.</p>
      </div>
      <div class="product-grid">
        ${products.map((product) => `<article class="product-card"><div class="product-image"><img src="${product.image}" alt="Easy Chanaa ${product.name} cap" loading="lazy" /><span>${product.tone}</span></div><div class="product-meta"><h3>${product.name}</h3><p>Limited first run <span>↗</span></p></div></article>`).join('')}
      </div>
    </section>

    <section class="story section-shell" id="story" aria-labelledby="story-title">
      <div class="story-image"><img src="/assets/same_cap_different_colors_photo_fill_bordered_easy_chanaa_4x5.png" alt="Easy Chanaa campaign artwork" loading="lazy" /></div>
      <div class="story-copy"><p class="eyebrow">02 / Why Easy Chanaa</p><h2 id="story-title">Good things<br /><em>feel easy.</em></h2><p>Easy Chanaa started with a simple idea: the things you reach for every day should feel like they belong there. Our first cap is built around that instinct — a considered fit, a clean mark, and just enough character.</p><a class="text-link" href="#contact">Get to know us <span>↗</span></a></div>
    </section>

    <section class="contact section-shell" id="contact" aria-labelledby="contact-title">
      <p class="eyebrow">03 / Stay in the loop</p><h2 id="contact-title">The easy<br /><em>way in.</em></h2><p class="contact-intro">Drop your email for the next release, new colourways, and other good news.</p><form class="signup-form" onsubmit="event.preventDefault(); this.querySelector('button').textContent = 'You’re on the list ✓'; this.querySelector('input').value = '';" aria-label="Email signup"><label class="sr-only" for="email">Email address</label><input id="email" type="email" placeholder="your@email.com" required /><button type="submit">Sign me up <span>↗</span></button></form>
    </section>
  </main>

  <footer class="site-footer"><a class="wordmark" href="#top">EASY CHANAA<span>®</span></a><p>Made for the everyday.</p><div class="footer-links"><a href="mailto:hello@easychanaa.com">Email</a><a href="#top">Instagram</a><a href="#top">Terms</a></div><p class="copyright">© ${new Date().getFullYear()} Easy Chanaa</p></footer>
`
