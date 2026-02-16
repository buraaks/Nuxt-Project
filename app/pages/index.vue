<template>
  <div class="home">
    <div class="home__bg">
      <div class="home__glow home__glow--1" aria-hidden="true" />
      <div class="home__glow home__glow--2" aria-hidden="true" />
      <div class="home__grid" aria-hidden="true" />
    </div>

    <header class="home__hero">
      <p class="home__label">Merhaba, ben</p>
      <h1 class="home__title">Burak Temur</h1>
      <p class="home__subtitle">Developer & Student</p>
    </header>

    <section class="home__about">
      <div class="home__about-inner">
        <p class="home__about-lead">
          Benim adım Burak Temur, 17 yaşındayım ve meslek lisesinde 12. sınıf öğrencisiyim.
          Şu an yazılım alanında lise stajımı TREX Dijital Manufacturing'de yapmaktayım.
          Amacım yazılımda ve eğitim hayatımda kendimi geliştirmek.
        </p>
        <p class="home__about-text">
          Ortak ilgi alanlarımız varsa, iş görüşmesi yapmak veya sohbet etmek isterseniz
          benimle iletişime geçebilirsiniz.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Burak Temur | Developer & Student',
  meta: [
    { name: 'description', content: 'Portfolio of Burak Temur, a Developer and Student' }
  ]
})
</script>

<style scoped>
.home {
  --home-accent: #e84a4a;
  --home-accent-soft: rgba(232, 74, 74, 0.15);
  --home-accent-border: rgba(232, 74, 74, 0.35);
  --home-text: rgba(255, 255, 255, 0.92);
  --home-text-muted: rgba(255, 255, 255, 0.55);
  --home-bg: #0d0d0f;
  --home-card-bg: rgba(255, 255, 255, 0.03);

  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(2rem, 6vw, 4rem) 1.5rem clamp(4rem, 10vw, 6rem);
  overflow: hidden;
}

/* ---- Background ---- */
.home__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(232, 74, 74, 0.12), transparent),
    radial-gradient(ellipse 60% 40% at 100% 50%, rgba(232, 74, 74, 0.06), transparent),
    radial-gradient(ellipse 50% 30% at 0% 80%, rgba(120, 80, 200, 0.06), transparent),
    var(--home-bg);
}

.home__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  animation: home-glow 12s ease-in-out infinite alternate;
}

.home__glow--1 {
  width: min(90vw, 480px);
  height: min(90vw, 480px);
  top: -15%;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, var(--home-accent-soft) 0%, transparent 70%);
}

.home__glow--2 {
  width: min(60vw, 320px);
  height: min(60vw, 320px);
  bottom: 10%;
  right: -5%;
  background: radial-gradient(circle, rgba(120, 80, 200, 0.2) 0%, transparent 70%);
  animation-delay: -4s;
}

.home__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent 85%);
  -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent 85%);
}

@keyframes home-glow {
  from { opacity: 0.35; transform: translateX(-50%) scale(1); }
  to { opacity: 0.6; transform: translateX(-50%) scale(1.15); }
}

.home__glow--2 {
  animation: home-glow-2 10s ease-in-out infinite alternate;
  animation-delay: -4s;
}

@keyframes home-glow-2 {
  from { opacity: 0.3; }
  to { opacity: 0.5; }
}

/* ---- Hero ---- */
.home__hero {
  position: relative;
  z-index: 1;
  text-align: center;
  margin-bottom: clamp(2.5rem, 8vw, 4rem);
}

.home__label {
  font-size: clamp(0.8rem, 2vw, 0.95rem);
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--home-text-muted);
  margin: 0 0 0.75rem;
}

.home__title {
  font-size: clamp(2.5rem, 11vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 0;
  color: #fff;
  text-shadow: 0 0 40px var(--home-accent-soft);
}

.home__subtitle {
  font-size: clamp(0.95rem, 2.5vw, 1.25rem);
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--home-accent);
  margin: 1rem 0 0;
  padding: 0.5rem 1.25rem;
  border: 1px solid var(--home-accent-border);
  border-radius: 999px;
  display: inline-block;
  background: var(--home-accent-soft);
}

/* ---- About ---- */
.home__about {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 560px;
}

.home__about-inner {
  background: var(--home-card-bg);
  border: 1px solid var(--home-accent-border);
  border-radius: 16px;
  padding: clamp(1.5rem, 4vw, 2.25rem);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.02), 0 24px 48px -12px rgba(0, 0, 0, 0.5);
}

.home__about-lead {
  font-size: clamp(0.95rem, 2.2vw, 1.1rem);
  line-height: 1.7;
  color: var(--home-text);
  margin: 0 0 1rem;
}

.home__about-text {
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.65;
  color: var(--home-text-muted);
  margin: 0;
}
</style>
