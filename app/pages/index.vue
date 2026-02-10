<template>
  <div class="hero-section">
    <div class="glow-sphere"></div>
    <div class="header">
      <h1 class="title">Burak Temur</h1>
      <p class="subtitle">Developer & Student</p>
    </div>
    <div class="about-me">
      <p>
        Hi, I'm Burak Temur, a passionate developer and student. I specialize in web development and enjoy creating innovative solutions. Welcome to my portfolio!
      </p>
    </div>
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
.hero-section {
  min-height: 80vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-bottom: 2rem; /* İçerik ile footer arasına mesafe */
}

.glow-sphere {
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
  filter: blur(50px);
  z-index: 0;
  animation: pulse-glow 8s infinite alternate;
}

.header {
  text-align: center;
  z-index: 1;
  padding: 2rem;
}

.title {
  font-size: clamp(3rem, 12vw, 6rem);
  color: rgba(255, 255, 255, 0.1);
  -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.8);
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  animation: flicker 5s infinite;
  margin: 0;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  letter-spacing: clamp(4px, 1vw, 8px);
  font-weight: 800;
  text-transform: uppercase;
  line-height: 1;
}

.subtitle {
  font-size: clamp(1rem, 3vw, 2rem);
  color: #ff3e3e;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  display: inline-block;
  margin-top: 1.5rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 300;
  padding: 10px 20px;
  -webkit-text-stroke: 0.5px rgba(255, 62, 62, 0.5);
  text-shadow: 0 0 15px rgba(255, 62, 62, 0.4);
  animation: flicker 4s infinite reverse;
}
.about-me {
  margin-top: 0rem;
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  color: #fff;
  max-width: 600px;
  text-align: center;
  z-index: 1;
  position: relative;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background-color: rgba(255, 62, 62, 0.1);
  padding: 1rem 2rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 62, 62, 0.3);
  box-shadow: 0 0 20px rgba(255, 62, 62, 0.2);
  margin-left: auto;
  margin-right: auto;
}
</style>
