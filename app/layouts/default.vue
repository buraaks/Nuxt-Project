<template>
  <div class="layout-wrapper">
    <TheHeader />
    <main>
      <slot />
    </main>
    <footer>
      <p>&copy; 2026 Burak Temur. Tüm hakları saklıdır.</p>
    </footer>
  </div>
</template>

<style>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}


main {
  flex: 1;
}

footer {
  text-align: center;
  padding: 1.5rem 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(12px);
  margin-top: auto;
}

footer p {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.8rem;
  letter-spacing: 1px;
}
</style>
