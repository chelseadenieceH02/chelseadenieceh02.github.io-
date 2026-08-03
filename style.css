/* ==========================================================================
   Benji Bakery — Main Stylesheet
   Built to match the Benji Bakery Style Guide (v1.0, 2026)
   ========================================================================== */

/* --- 1. CSS Custom Properties (Design Tokens from the Style Guide) --- */
:root {
  /* Primary palette */
  --cream: #FFFDF9;
  --dark-brown: #3E2723;
  --amber-gold: #D84315;
  --amber-gold-hover: #BF360C;

  /* Secondary palette */
  --soft-taupe: #F5EBE6;
  --white: #FFFFFF;

  /* Fonts */
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', Arial, sans-serif;

  /* Spacing scale */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2.5rem;
  --space-xl: 4rem;

  /* Effects */
  --radius: 4px;
  --shadow: 0 2px 10px rgba(62, 39, 35, 0.08);
  --transition: 0.2s ease;
}

/* --- 2. Reset & Base --- */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  /* Responsive font sizing: base size scales gently with viewport width */
  font-size: clamp(15px, 1vw + 12px, 18px);
}

body {
  font-family: var(--font-body);
  background-color: var(--cream);
  color: var(--dark-brown);
  line-height: 1.6;
  overflow-x: hidden;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

/* --- 3. Accessibility helpers --- */
/* Visually hidden but available to screen readers */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

/* Skip-to-content link: hidden until focused via keyboard */
.skip-link {
  position: absolute;
  top: -50px;
  left: 0;
  background: var(--amber-gold);
  color: var(--white);
  padding: 0.75rem 1.25rem;
  z-index: 1000;
  transition: top var(--transition);
  border-radius: 0 0 var(--radius) 0;
}

.skip-link:focus {
  top: 0;
}

/* Strong, visible focus state for keyboard navigation (WCAG 2.4.7) */
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 3px solid var(--amber-gold);
  outline-offset: 2px;
}

/* --- 4. Typography (per Style Guide type scale) --- */
h1, h2, h3, h4 {
  font-family: var(--font-heading);
  color: var(--dark-brown);
  line-height: 1.2;
}

h1 {
  font-weight: 700;
  font-size: clamp(2rem, 4vw + 1rem, 2.75rem); /* ~32px - 44px, responsive */
}

h2 {
  font-weight: 600;
  font-size: clamp(1.5rem, 2.5vw + 1rem, 2rem); /* ~24px - 32px */
  margin-bottom: var(--space-md);
}

h3 {
  font-weight: 500;
  font-size: clamp(1.25rem, 1.5vw + 1rem, 1.5rem); /* ~20px - 24px */
  margin-bottom: var(--space-sm);
}

p {
  margin-bottom: var(--space-sm);
}

.eyebrow {
  font-size: 0.8125rem; /* 13px caption */
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--amber-gold);
  font-weight: 600;
}

.section-intro {
  max-width: 640px;
  margin: 0 auto var(--space-lg);
  text-align: center;
  color: #6d4c41;
}

/* --- 5. Buttons & CTAs (per Style Guide specs) --- */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 24px;
  border-radius: var(--radius);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.9375rem; /* 15px */
  text-transform: uppercase;
  letter-spacing: 0.04em;
  border: none;
  cursor: pointer;
  transition: background-color var(--transition), color var(--transition), transform var(--transition);
}

.btn-primary {
  background-color: var(--amber-gold);
  color: var(--white);
}

.btn-primary:hover,
.btn-primary:focus-visible {
  background-color: var(--amber-gold-hover);
  transform: translateY(-1px);
}

.btn-secondary {
  background-color: transparent;
  color: var(--dark-brown);
  border: 1.5px solid var(--dark-brown);
}

.btn-secondary:hover,
.btn-secondary:focus-visible {
  background-color: var(--dark-brown);
  color: var(--white);
}

.text-link {
  color: var(--amber-gold);
  font-weight: 600;
  border-bottom: 1.5px solid transparent;
  transition: border-color var(--transition);
}

.text-link:hover,
.text-link:focus-visible {
  border-color: var(--amber-gold);
}

/* --- 6. Header / Navigation --- */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--cream);
  box-shadow: var(--shadow);
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-sm) var(--space-md);
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dark-brown);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo span {
  color: var(--amber-gold);
}

.nav-toggle {
  display: none;
  background: none;
  border: 2px solid var(--dark-brown);
  border-radius: var(--radius);
  padding: 0.4rem 0.6rem;
  font-size: 1.25rem;
  cursor: pointer;
  color: var(--dark-brown);
}

.main-nav ul {
  display: flex;
  gap: var(--space-md);
  align-items: center;
}

.main-nav a {
  font-weight: 500;
  padding: 0.5rem 0.25rem;
  border-bottom: 2px solid transparent;
  transition: border-color var(--transition), color var(--transition);
}

.main-nav a:hover,
.main-nav a:focus-visible,
.main-nav a[aria-current="page"] {
  color: var(--amber-gold);
  border-color: var(--amber-gold);
}

/* --- 7. Hero section --- */
.hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 70vh;
  color: var(--white);
  background-color: var(--dark-brown);
  overflow: hidden;
}

.hero img.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.55;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 640px;
  padding: var(--space-lg) var(--space-md);
  margin: 0 auto;
  text-align: center;
}

.hero h1 {
  color: var(--white);
  margin-bottom: var(--space-sm);
}

.hero p {
  font-size: 1.125rem;
  margin-bottom: var(--space-md);
}

.hero-ctas {
  display: flex;
  gap: var(--space-sm);
  justify-content: center;
  flex-wrap: wrap;
}

/* --- 8. Generic section spacing --- */
section {
  padding: var(--space-xl) 0;
}

.bg-taupe {
  background-color: var(--soft-taupe);
}

.bg-brown {
  background-color: var(--dark-brown);
  color: var(--white);
}

.bg-brown h2 {
  color: var(--white);
}

/* --- 9. Grid & Flexbox layout utilities --- */
.grid {
  display: grid;
  gap: var(--space-md);
}

.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }

.flex-row {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* --- 10. Cards --- */
.card {
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: transform var(--transition), box-shadow var(--transition);
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(62, 39, 35, 0.14);
}

.card img {
  aspect-ratio: 1 / 1;
  object-fit: cover;
  width: 100%;
}

.card-body {
  padding: var(--space-sm);
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-body h3 {
  margin-bottom: 0.25rem;
}

.card-price {
  font-weight: 700;
  color: var(--amber-gold);
  margin-top: auto;
  padding-top: var(--space-xs);
}

.badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  background-color: var(--soft-taupe);
  color: var(--dark-brown);
  margin-right: 0.35rem;
  margin-bottom: 0.35rem;
}

/* --- 11. Team member profiles (About page) --- */
.team-member {
  text-align: center;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto var(--space-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  color: var(--white);
  background-color: var(--amber-gold);
  border: 4px solid var(--soft-taupe);
}

/* --- 12. Forms (Custom Order / Feedback page) --- */
.form-wrapper {
  max-width: 640px;
  margin: 0 auto;
  background-color: var(--white);
  padding: var(--space-lg);
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.form-group {
  margin-bottom: var(--space-md);
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.4rem;
}

.required-flag {
  color: var(--amber-gold);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  font-family: var(--font-body);
  font-size: 1rem;
  padding: 0.75rem;
  border: 1.5px solid #d8ccc4;
  border-radius: var(--radius);
  background-color: var(--cream);
  color: var(--dark-brown);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--amber-gold);
}

.form-group small {
  display: block;
  color: #6d4c41;
  margin-top: 0.25rem;
  font-size: 0.8125rem;
}

.error-message {
  display: block;
  color: #B71C1C;
  font-size: 0.8125rem;
  margin-top: 0.35rem;
  font-weight: 600;
}

.form-group.has-error input,
.form-group.has-error select,
.form-group.has-error textarea {
  border-color: #B71C1C;
}

fieldset {
  border: 1.5px solid #d8ccc4;
  border-radius: var(--radius);
  padding: var(--space-sm);
  margin-bottom: var(--space-md);
}

fieldset legend {
  font-weight: 600;
  padding: 0 0.4rem;
}

.checkbox-row {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.checkbox-row input {
  width: auto;
  margin-top: 0.3rem;
}

#form-success {
  display: none;
  background-color: #E8F5E9;
  border: 1.5px solid #2E7D32;
  color: #1B5E20;
  padding: var(--space-sm);
  border-radius: var(--radius);
  margin-bottom: var(--space-md);
  font-weight: 600;
}

/* --- 13. Info blocks (Contact page) --- */
.info-card {
  background-color: var(--white);
  padding: var(--space-md);
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.info-card h3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

table.hours-table {
  width: 100%;
  border-collapse: collapse;
}

table.hours-table th,
table.hours-table td {
  text-align: left;
  padding: 0.5rem 0.25rem;
  border-bottom: 1px solid var(--soft-taupe);
}

.map-frame {
  width: 100%;
  border: 0;
  border-radius: 8px;
  min-height: 300px;
}

/* --- 14. Footer --- */
.site-footer {
  background-color: var(--dark-brown);
  color: var(--cream);
  padding: var(--space-lg) 0 var(--space-md);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);
}

.footer-grid h4 {
  color: var(--white);
  font-family: var(--font-body);
  font-size: 1rem;
  margin-bottom: var(--space-sm);
}

.footer-grid a,
.footer-grid p {
  color: #d7c4bb;
  display: block;
  margin-bottom: 0.5rem;
}

.footer-grid a:hover,
.footer-grid a:focus-visible {
  color: var(--amber-gold);
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.15);
  padding-top: var(--space-sm);
  text-align: center;
  font-size: 0.8125rem;
  color: #b39a90;
}

/* --- 15. Utility --- */
.text-center { text-align: center; }
.mt-lg { margin-top: var(--space-lg); }
.mb-lg { margin-bottom: var(--space-lg); }

/* --- 16. Responsive breakpoints --- */

/* Tablet */
@media (max-width: 900px) {
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
  .grid-3 { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}

/* Mobile */
@media (max-width: 640px) {
  .nav-toggle {
    display: block;
  }

  .main-nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--cream);
    box-shadow: var(--shadow);
  }

  .main-nav.open {
    display: block;
  }

  .main-nav ul {
    flex-direction: column;
    align-items: stretch;
    padding: var(--space-sm) var(--space-md) var(--space-md);
    gap: 0;
  }

  .main-nav li {
    border-bottom: 1px solid var(--soft-taupe);
  }

  .main-nav a {
    display: block;
    padding: 0.85rem 0.25rem;
  }

  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }

  .hero {
    min-height: 60vh;
  }

  .form-wrapper {
    padding: var(--space-md);
  }
}
