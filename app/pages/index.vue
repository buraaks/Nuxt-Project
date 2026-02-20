<template>
  <div class="relative overflow-hidden">
    <!-- Background -->
    <div class="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      <div class="glow-top" />
      <div class="glow-bottom" />
      <div class="grid-bg" />
    </div>

    <!-- Hero -->
    <section class="relative z-[1] text-center mx-auto max-w-3xl px-6 pt-[clamp(4rem,12vw,8rem)] pb-[clamp(3rem,8vw,5rem)]">
      <h1 class="text-[clamp(3rem,12vw,5.5rem)] font-extrabold leading-none tracking-tight text-white animate-fade-up">
        Burak <span class="bg-gradient-to-br from-primary-500 to-primary-300 bg-clip-text text-transparent">Temur</span>
      </h1>
      <UBadge
        variant="subtle"
        color="primary"
        size="lg"
        class="mt-5 uppercase tracking-[0.2em] font-medium rounded-full animate-fade-up-delay"
      >
        Developer &amp; Student
      </UBadge>
    </section>

    <!-- About -->
    <section class="relative z-[1] max-w-xl mx-auto px-6 pt-12 pb-20">
      <h2 class="text-[0.95rem] font-semibold tracking-[0.3em] uppercase text-white/85 mb-5">Hakkımda</h2>
      <div class="about-card relative border-l-2 border-primary-500 py-6 px-7 bg-gradient-to-br from-primary-500/[0.03] to-transparent rounded-r-[14px]">
        <ContentRenderer v-if="about" :value="about" class="about-content" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Burak Temur | Developer & Student',
  meta: [
    { name: 'description', content: 'Burak Temur - Developer & Student Portfolio' }
  ]
})

const { data: about } = await useAsyncData('about', () =>
  queryCollection('content').path('/about').first()
)
</script>

<style scoped>
/* Background glow effects */
.glow-top {
  position: absolute;
  width: 600px;
  height: 600px;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 62, 62, 0.15), transparent 70%);
  filter: blur(100px);
  animation: float 14s ease-in-out infinite alternate;
}

.glow-bottom {
  position: absolute;
  width: 400px;
  height: 400px;
  bottom: -100px;
  right: -50px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(120, 80, 200, 0.12), transparent 70%);
  filter: blur(100px);
  animation: float 10s ease-in-out infinite alternate-reverse;
}

.grid-bg {
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

/* About content (from Markdown) */
.about-content :deep(p) {
  font-size: clamp(0.93rem, 2vw, 1.02rem);
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

.about-content :deep(p + p) {
  margin-top: 1rem;
}

/* About card border overlay */
.about-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-left: none;
  border-radius: 0 14px 14px 0;
  pointer-events: none;
}

/* Animations */
.animate-fade-up {
  animation: fadeUp 0.6s 0.1s ease both;
}

.animate-fade-up-delay {
  animation: fadeUp 0.6s 0.2s ease both;
}

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
