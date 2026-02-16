<template>
  <div class="projects-page">
    <section class="projects-intro">
      <h1>Projeler</h1>
      <p>Geliştirdiğim projelerden bazıları.</p>
    </section>

    <section class="projects-grid">
      <article
        v-for="project in projects"
        :key="project.id"
        class="project-card"
      >
        <h2 class="project-title">{{ project.title }}</h2>
        <p class="project-desc">{{ project.description }}</p>
        <div class="project-meta">
          <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link"
        >
          Görüntüle →
        </a>
      </article>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Projeler | Burak Temur',
  meta: [
    { name: 'description', content: 'Burak Temur - Geliştirdiğim projeler' }
  ]
})

const projects = [
  {
    id: 1,
    title: 'Nuxt Portfolio',
    description: 'Bu site. Nuxt 4 ile geliştirilmiş, statik hosting için uyumlu kişisel portfolyo.',
    tags: ['Nuxt', 'Vue', 'SSG'],
    link: null
  },
  {
    id: 2,
    title: 'Örnek Proje 2',
    description: 'Buraya kendi projenizi ekleyebilirsiniz. Kısa bir açıklama yazın.',
    tags: ['Web', 'API'],
    link: null
  },
  {
    id: 3,
    title: 'Örnek Proje 3',
    description: 'GitHub veya canlı demo linki ekleyebilirsiniz. link alanını doldurmanız yeterli.',
    tags: ['JavaScript', 'Frontend'],
    link: null
  }
]
</script>

<style scoped>
.projects-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

.projects-intro {
  text-align: center;
  margin-bottom: 3rem;
}

.projects-intro h1 {
  color: #fff;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin: 0 0 0.5rem;
  letter-spacing: 2px;
}

.projects-intro p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.1rem;
  margin: 0;
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 62, 62, 0.2);
  border-radius: 12px;
  padding: 1.5rem 1.75rem;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.project-card:hover {
  border-color: rgba(255, 62, 62, 0.4);
  box-shadow: 0 0 24px rgba(255, 62, 62, 0.1);
}

.project-title {
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
}

.project-desc {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0 0 1rem;
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.tag {
  font-size: 0.75rem;
  color: #ff3e3e;
  background: rgba(255, 62, 62, 0.12);
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  letter-spacing: 0.5px;
}

.project-link {
  font-size: 0.9rem;
  color: #ff3e3e;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.project-link:hover {
  opacity: 0.85;
  text-decoration: underline;
}
</style>
