<template>
  <header class="header" :class="{ 'header--scrolled': scrolled }">
    <div class="container">
      <NuxtLink to="/" class="logo" @click="closeAll">
        <svg class="logo__mark" width="28" height="24" viewBox="0 0 28 24" fill="none">
          <path d="M10 4L3 12L10 20" stroke="#ff3e3e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18 4L25 12L18 20" stroke="rgba(255,255,255,0.55)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </NuxtLink>

      <nav class="nav">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav__link"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="actions">
        <div class="dropdown" ref="dropdownRef">
          <button
            class="dropdown__toggle"
            :class="{ 'dropdown__toggle--active': dropdownOpen }"
            aria-label="Iletisim"
            @click="dropdownOpen = !dropdownOpen"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="18" height="18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
            </svg>
          </button>

          <Transition name="pop">
            <div v-if="dropdownOpen" class="dropdown__menu">
              <a
                href="https://github.com/buraaks"
                target="_blank"
                rel="noopener noreferrer"
                class="dropdown__item"
                @click="dropdownOpen = false"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
                <svg class="dropdown__external" viewBox="0 0 20 20" fill="currentColor" width="12" height="12"><path d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/burak-temur-a39432300/"
                target="_blank"
                rel="noopener noreferrer"
                class="dropdown__item"
                @click="dropdownOpen = false"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
                <svg class="dropdown__external" viewBox="0 0 20 20" fill="currentColor" width="12" height="12"><path d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/burak._.tmr8"
                target="_blank"
                rel="noopener noreferrer"
                class="dropdown__item"
                @click="dropdownOpen = false"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Instagram
                <svg class="dropdown__external" viewBox="0 0 20 20" fill="currentColor" width="12" height="12"><path d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"/></svg>
              </a>
              <div class="dropdown__divider" />
              <button class="dropdown__item dropdown__item--email" @click="copyEmail">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="16" height="16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/>
                </svg>
                <span class="dropdown__email-text">
                  {{ copied ? 'Kopyalandi!' : 'buraktemur0816@gmail.com' }}
                </span>
                <svg v-if="!copied" class="dropdown__copy" viewBox="0 0 24 24" fill="none" stroke="currentColor" width="14" height="14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                </svg>
                <svg v-else class="dropdown__copy dropdown__copy--done" viewBox="0 0 24 24" fill="none" stroke="currentColor" width="14" height="14" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </button>
            </div>
          </Transition>
        </div>

        <button
          class="burger"
          :class="{ 'burger--open': isOpen }"
          aria-label="Menu"
          @click="isOpen = !isOpen"
        >
          <span class="burger__line" />
          <span class="burger__line" />
          <span class="burger__line" />
        </button>
      </div>
    </div>

    <Transition name="slide">
      <nav v-if="isOpen" class="mobile">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="mobile__link"
          @click="closeAll"
        >
          {{ link.label }}
        </NuxtLink>
        <div class="mobile__socials">
          <a href="https://github.com/buraaks" target="_blank" rel="noopener noreferrer" class="mobile__social" @click="closeAll">GitHub</a>
          <span class="mobile__dot">&middot;</span>
          <a href="https://www.linkedin.com/in/burak-temur-a39432300/" target="_blank" rel="noopener noreferrer" class="mobile__social" @click="closeAll">LinkedIn</a>
          <span class="mobile__dot">&middot;</span>
          <a href="https://www.instagram.com/burak._.tmr8" target="_blank" rel="noopener noreferrer" class="mobile__social" @click="closeAll">Instagram</a>
        </div>
        <button class="mobile__email" @click="copyEmail">
          {{ copied ? 'Kopyalandi!' : 'E-posta kopyala' }}
        </button>
      </nav>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const links = [
  { to: '/', label: 'Anasayfa' },
  { to: '/projects', label: 'Projeler' }
]

const isOpen = ref(false)
const scrolled = ref(false)
const dropdownOpen = ref(false)
const dropdownRef = ref(null)
const copied = ref(false)

function closeAll() {
  isOpen.value = false
  dropdownOpen.value = false
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText('buraktemur0816@gmail.com')
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch {
    /* fallback - ignore */
  }
}

function onClickOutside(e) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    dropdownOpen.value = false
  }
}

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onClickOutside)
})
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(26, 26, 26, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid transparent;
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.header--scrolled {
  background: rgba(26, 26, 26, 0.85);
  border-bottom-color: rgba(255, 62, 62, 0.12);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0.9rem 2rem;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

/* Logo */
.logo {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  width: fit-content;
}

.logo__mark {
  display: block;
  filter: drop-shadow(0 0 0px transparent);
  transition: filter 0.3s ease, transform 0.3s ease;
}

.logo:hover .logo__mark {
  filter: drop-shadow(0 0 6px rgba(255, 62, 62, 0.4));
  transform: scale(1.05);
}

/* Desktop Nav */
.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
}

.nav__link {
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: color 0.25s ease, background 0.25s ease;
}

.nav__link:hover {
  color: rgba(255, 255, 255, 0.9);
  background: rgba(255, 255, 255, 0.04);
}

.nav__link.router-link-exact-active {
  color: #ff3e3e;
}

/* Right actions */
.actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
}

/* Dropdown */
.dropdown {
  position: relative;
}

.dropdown__toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  padding: 0.45rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: none;
  cursor: pointer;
  transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease;
}

.dropdown__toggle:hover,
.dropdown__toggle--active {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.04);
}

.dropdown__menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 240px;
  background: rgba(30, 30, 30, 0.98);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 0.4rem;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.dropdown__item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  width: 100%;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease;
  text-align: left;
}

.dropdown__item:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.06);
}

.dropdown__external {
  margin-left: auto;
  opacity: 0.3;
}

.dropdown__divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
  margin: 0.3rem 0.5rem;
}

.dropdown__item--email {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
}

.dropdown__item--email:hover {
  color: #ff3e3e;
  background: rgba(255, 62, 62, 0.06);
}

.dropdown__email-text {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dropdown__copy {
  margin-left: auto;
  opacity: 0.4;
  flex-shrink: 0;
}

.dropdown__copy--done {
  color: #4ade80;
  opacity: 1;
}

/* Dropdown transition */
.pop-enter-active,
.pop-leave-active {
  transition: all 0.2s ease;
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.96);
}

/* Burger */
.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  padding: 6px;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.burger:hover {
  border-color: rgba(255, 255, 255, 0.2);
}

.burger__line {
  display: block;
  width: 100%;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: center;
}

.burger--open .burger__line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.burger--open .burger__line:nth-child(2) {
  opacity: 0;
}

.burger--open .burger__line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Nav */
.mobile {
  display: flex;
  flex-direction: column;
  padding: 0.5rem 2rem 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(26, 26, 26, 0.95);
}

.mobile__link {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  transition: color 0.2s ease;
}

.mobile__link:last-child {
  border-bottom: none;
}

.mobile__link:hover,
.mobile__link.router-link-exact-active {
  color: #ff3e3e;
}

.mobile__socials {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.mobile__social {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.mobile__social:hover {
  color: #ff3e3e;
}

.mobile__dot {
  color: rgba(255, 255, 255, 0.15);
  font-size: 0.75rem;
}

.mobile__email {
  margin-top: 0.75rem;
  padding: 0.55rem 0;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  transition: color 0.2s ease;
}

.mobile__email:hover {
  color: #ff3e3e;
}

/* Transitions */
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

/* Responsive */
@media (max-width: 640px) {
  .container {
    display: flex;
    justify-content: space-between;
  }

  .nav {
    display: none;
  }

  .burger {
    display: flex;
  }
}
</style>
