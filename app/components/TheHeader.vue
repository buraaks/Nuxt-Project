<template>
  <header
    class="sticky top-0 z-50 backdrop-blur-2xl border-b transition-all duration-300"
    :class="scrolled
      ? 'bg-[#1a1a1a]/85 border-primary-500/12 shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
      : 'bg-[#1a1a1a]/60 border-transparent'"
  >
    <div class="max-w-[1100px] mx-auto px-8 py-3.5 grid grid-cols-[1fr_auto_1fr] items-center max-sm:flex max-sm:justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="inline-flex items-center no-underline w-fit group" @click="closeAll">
        <svg class="block transition-all duration-300 group-hover:scale-105 group-hover:[filter:drop-shadow(0_0_6px_rgba(255,62,62,0.4))]" width="28" height="24" viewBox="0 0 28 24" fill="none">
          <path d="M10 4L3 12L10 20" stroke="#ff3e3e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18 4L25 12L18 20" stroke="rgba(255,255,255,0.55)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="flex items-center justify-center gap-1 max-sm:hidden">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-white/55 no-underline text-sm font-medium tracking-wide px-4 py-2 rounded-lg transition-all duration-200 hover:text-white/90 hover:bg-white/[0.04] [&.router-link-exact-active]:text-primary-500"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Actions -->
      <div class="flex items-center justify-end gap-3">
        <UPopover
          :content="{ side: 'bottom', align: 'end', sideOffset: 8 }"
          :ui="{ content: 'z-[200]' }"
        >
          <UButton
            icon="i-lucide-ellipsis"
            variant="outline"
            color="neutral"
            size="xs"
            aria-label="Iletisim"
          />

          <template #content>
            <div class="contact-panel">
              <a
                v-for="item in socialLinks"
                :key="item.label"
                :href="item.url"
                target="_blank"
                rel="noopener"
                class="contact-item group"
              >
                <UIcon :name="item.icon" class="size-4 shrink-0" :style="{ color: item.color }" />
                <span class="text-[13px] text-white/65 group-hover:text-white transition-colors">{{ item.label }}</span>
              </a>
              <div class="mx-2.5 my-1 h-px bg-white/[0.06]" />
              <button class="contact-item group w-full" @click="copyEmail">
                <UIcon :name="copied ? 'i-lucide-check' : 'i-lucide-mail'" class="size-4 shrink-0" :style="{ color: copied ? '#4ade80' : '#ff3e3e' }" />
                <span class="text-[13px] transition-colors" :class="copied ? 'text-emerald-400' : 'text-white/65 group-hover:text-white'">
                  {{ copied ? 'Kopyalandı!' : 'buraktemur0816@gmail.com' }}
                </span>
              </button>
            </div>
          </template>
        </UPopover>

        <!-- Mobile Burger -->
        <button
          class="hidden max-sm:flex flex-col justify-center gap-[5px] size-9 p-1.5 bg-transparent border border-white/8 rounded-lg cursor-pointer transition-all duration-200 hover:border-white/20 active:scale-90"
          aria-label="Menu"
          @click="isOpen = !isOpen"
        >
          <span class="block w-full h-0.5 bg-white rounded-sm transition-all duration-300" />
          <span class="block w-full h-0.5 bg-white rounded-sm transition-all duration-300" />
          <span class="block w-full h-0.5 bg-white rounded-sm transition-all duration-300" />
        </button>
      </div>
    </div>

    <!-- Mobile Nav -->
    <Transition name="slide">
      <nav v-if="isOpen" class="absolute top-full inset-x-0 z-50 flex flex-col px-8 pb-5 pt-2 border-t border-white/5 bg-[#1a1a1a] shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="flex items-center gap-1.5 text-white/60 no-underline text-base font-medium py-3 border-b border-white/[0.04] last:border-0 transition-colors duration-200 hover:text-primary-500 [&.router-link-exact-active]:text-primary-500"
          @click="closeAll"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </Transition>
  </header>
</template>

<script setup>
const links = [
  { to: '/', label: 'Anasayfa' },
  { to: '/projects', label: 'Projeler' }
]

const isOpen = ref(false)
const scrolled = ref(false)
const copied = ref(false)

const socialLinks = [
  { label: 'GitHub', icon: 'i-simple-icons-github', url: 'https://github.com/buraaks', color: '#e6edf3' },
  { label: 'LinkedIn', icon: 'i-simple-icons-linkedin', url: 'https://www.linkedin.com/in/burak-temur-a39432300/', color: '#0a66c2' },
  { label: 'Instagram', icon: 'i-simple-icons-instagram', url: 'https://www.instagram.com/burak._.tmr8', color: '#e4405f' },
  { label: 'Discord', icon: 'i-simple-icons-discord', url: 'https://discord.com/channels/828344938944921630', color: '#5865f2' }
]

function closeAll() {
  isOpen.value = false
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText('buraktemur0816@gmail.com')
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch {
    /* fallback */
  }
}

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.contact-panel {
  width: 220px;
  padding: 4px;
  background: #1c1c1c;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s ease;
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.06);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
