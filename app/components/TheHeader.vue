<template>
  <header class="main-header">
    <nav class="nav-container">
      <div class="logo">BT</div>
      <ul class="nav-links">
        <li><NuxtLink to="/" class="nav-link">Anasayfa</NuxtLink></li>
        <li><NuxtLink to="/projects" class="nav-link">Projeler</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.main-header {
  padding: 1.5rem 2rem;
  background: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: 900;
  font-size: 1.5rem;
  color: #fff;
  letter-spacing: 2px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.nav-link:hover, .router-link-active {
  color: #ff3e3e;
  text-shadow: 0 0 10px rgba(255, 62, 62, 0.3);
}
</style>
