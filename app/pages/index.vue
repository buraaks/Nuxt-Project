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
      <h2 class="about__title">Hakkımda</h2>
      <div class="about__card">
        <p>
          17 yasinda, meslek lisesi son sinif ogrencisiyim. Yazilim alaninda
          <strong class="trex"><a href="https://trex.com.tr">TREX Dijital Manufacturing</a></strong> bunyesinde stajimi surduruyorum.
        </p>
        <p>
          Hem yazilimda hem de egitim hayatimda surekli kendimi gelistirmeyi hedefliyorum.
          Yeni teknolojileri kesfetmek, projeler uretmek ve ogrendiklerimi uygulamaya dokmek
          benim icin bir tutku.
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

/* ===== About ===== */
.about {
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin: 0 auto;
  padding: 3rem 1.5rem 5rem;
}

.about__title {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 0 1.25rem;
}

.about__card {
  position: relative;
  border-left: 2px solid var(--accent);
  padding: 1.5rem 1.75rem;
  background: linear-gradient(135deg, rgba(255, 62, 62, 0.03), transparent 60%);
  border-radius: 0 14px 14px 0;
}

.about__card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid var(--card-border);
  border-left: none;
  border-radius: 0 14px 14px 0;
  pointer-events: none;
}

.about__card p {
  font-size: clamp(0.93rem, 2vw, 1.02rem);
  line-height: 1.8;
  color: var(--text-muted);
  margin: 0;
}

.about__card p + p {
  margin-top: 1rem;
}

.about__card strong {
  color: var(--text);
  font-weight: 600;
}
.trex a {
  color: var(--text);
  text-decoration: none;
  transition: color 0.3s, border-color 0.3s;
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

</style>
