<template>
  <div class="home">
    <!-- Background -->
    <div class="bg" aria-hidden="true">
      <div class="bg__glow bg__glow--top" />
      <div class="bg__glow bg__glow--bottom" />
      <div class="bg__grid" />
    </div>

    <!-- Hero -->
    <section class="hero">
      <h1 class="hero__name">Burak <span class="hero__name--accent">Temur</span></h1>
      <p class="hero__role">Developer &amp; Student</p>
    </section>

    <!-- About -->
    <section class="about">
      <h2 class="section-title">Hakkımda</h2>
      <div class="about__card">
        <p>
          17 yasindayim ve meslek lisesinde 12. sinif ogrencisiyim.
          Su an yazilim alaninda lise stajimi
          <strong>TREX Dijital Manufacturing</strong>'de yapmaktayim.
        </p>
        <p>
          Amacim yazilimda ve egitim hayatimda kendimi surekli gelistirmek.
          Yeni teknolojiler ogrenmek ve projeler uretmek benim icin hem tutkum hem de hedefim.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Burak Temur | Developer & Student',
  meta: [
    { name: 'description', content: 'Burak Temur - Developer & Student Portfolio' }
  ]
})

</script>

<style scoped>
.home {
  --accent: #ff3e3e;
  --accent-soft: rgba(255, 62, 62, 0.12);
  --accent-border: rgba(255, 62, 62, 0.25);
  --text: rgba(255, 255, 255, 0.92);
  --text-muted: rgba(255, 255, 255, 0.5);
  --card-bg: rgba(255, 255, 255, 0.03);
  --card-border: rgba(255, 255, 255, 0.06);

  position: relative;
  overflow: hidden;
}

/* ===== Background ===== */
.bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.bg__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
}

.bg__glow--top {
  width: 600px;
  height: 600px;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(255, 62, 62, 0.15), transparent 70%);
  animation: float 14s ease-in-out infinite alternate;
}

.bg__glow--bottom {
  width: 400px;
  height: 400px;
  bottom: -100px;
  right: -50px;
  background: radial-gradient(circle, rgba(120, 80, 200, 0.12), transparent 70%);
  animation: float 10s ease-in-out infinite alternate-reverse;
}

.bg__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 60% 50% at 50% 30%, black, transparent);
  -webkit-mask-image: radial-gradient(ellipse 60% 50% at 50% 30%, black, transparent);
}

@keyframes float {
  from { opacity: 0.4; transform: translateX(-50%) scale(1); }
  to   { opacity: 0.7; transform: translateX(-50%) scale(1.2); }
}

/* ===== Hero ===== */
.hero {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: clamp(4rem, 12vw, 8rem) 1.5rem clamp(3rem, 8vw, 5rem);
  max-width: 720px;
  margin: 0 auto;
}

.hero__name {
  font-size: clamp(3rem, 12vw, 5.5rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
  color: #fff;
  margin: 0;
  animation: fadeUp 0.6s 0.1s ease both;
}

.hero__name--accent {
  background: linear-gradient(135deg, var(--accent), #ff7b7b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__role {
  font-size: clamp(0.9rem, 2.5vw, 1.15rem);
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 1.25rem 0 0;
  padding: 0.45rem 1.2rem;
  border: 1px solid var(--accent-border);
  border-radius: 999px;
  display: inline-block;
  background: var(--accent-soft);
  animation: fadeUp 0.6s 0.2s ease both;
}

.hero__actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  animation: fadeUp 0.6s 0.4s ease both;
}

/* ===== Buttons ===== */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.5rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
  cursor: pointer;
}

.btn--primary {
  background: var(--accent);
  color: #fff;
  border: 1px solid var(--accent);
}

.btn--primary:hover {
  background: #e63535;
  box-shadow: 0 0 24px rgba(255, 62, 62, 0.3);
  transform: translateY(-1px);
}

.btn--ghost {
  background: transparent;
  color: var(--text);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.btn--ghost:hover {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.04);
  transform: translateY(-1px);
}

.btn__icon {
  width: 18px;
  height: 18px;
}

/* ===== Section Title ===== */
.section-title {
  text-align: center;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 700;
  color: #fff;
  margin: 0 0 2rem;
  letter-spacing: 1px;
}

.section-title::after {
  content: '';
  display: block;
  width: 40px;
  height: 3px;
  background: var(--accent);
  border-radius: 2px;
  margin: 0.75rem auto 0;
}

/* ===== About ===== */
.about {
  position: relative;
  z-index: 1;
  max-width: 640px;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
}

.about__card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  padding: clamp(1.5rem, 4vw, 2.25rem);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.about__card p {
  font-size: clamp(0.93rem, 2vw, 1.05rem);
  line-height: 1.75;
  color: var(--text-muted);
  margin: 0;
}

.about__card p + p {
  margin-top: 1rem;
}

.about__card strong {
  color: var(--text);
}

/* ===== Animation ===== */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== Mobile ===== */
@media (max-width: 480px) {
  .hero__actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
