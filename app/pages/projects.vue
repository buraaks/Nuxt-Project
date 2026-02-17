<template>
  <div class="projects-page">
    <section class="projects-intro">
      <h1>Projeler</h1>
      <p>GitHub Projelerim.</p>
    </section>

    <div v-if="pending" class="loading">
      <span class="spinner"></span>
      <p>Depolar yükleniyor...</p>
    </div>

    <div v-else-if="error" class="error-state">
      <p>Depolar yüklenirken bir hata oluştu.</p>
      <button class="retry-btn" @click="refresh()">Tekrar Dene</button>
    </div>

    <section v-else class="projects-grid">
      <article
        v-for="repo in repos"
        :key="repo.id"
        class="project-card"
      >
        <div class="project-header">
          <h2 class="project-title">{{ repo.name }}</h2>
          <span v-if="repo.stargazers_count > 0" class="stars">
            &#9733; {{ repo.stargazers_count }}
          </span>
        </div>
        <p class="project-desc">{{ repo.description || 'Açıklama bulunmuyor.' }}</p>
        <div class="project-meta">
          <span v-if="repo.language" class="tag language-tag">
            <span class="lang-dot" :style="{ background: langColor(repo.language) }"></span>
            {{ repo.language }}
          </span>
          <span v-for="topic in repo.topics" :key="topic" class="tag">{{ topic }}</span>
        </div>
        <div class="project-links">
          <a
            :href="repo.html_url"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link"
          >
            GitHub →
          </a>
          <a
            v-if="repo.homepage"
            :href="repo.homepage"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link demo-link"
          >
            Demo →
          </a>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Projeler | Burak Temur',
  meta: [
    { name: 'description', content: 'Burak Temur - GitHub depoları' }
  ]
})

const { data: repos, pending, error, refresh } = await useFetch(
  'https://api.github.com/users/buraaks/repos',
  {
    transform: (data) => {
      return data
        .filter((repo) => !repo.fork)
        .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
    }
  }
)

const langColors = {
  'Vue': '#41b883',
  'JavaScript': '#f1e05a',
  'TypeScript': '#3178c6',
  'C#': '#178600',
  'Python': '#3572A5',
  'HTML': '#e34c26',
  'CSS': '#563d7c',
  'Java': '#b07219',
  'Go': '#00ADD8',
  'Rust': '#dea584',
  'C++': '#f34b7d',
  'C': '#555555',
  'PHP': '#4F5D95',
  'Ruby': '#701516',
  'Swift': '#F05138',
  'Kotlin': '#A97BFF',
  'Dart': '#00B4AB'
}

function langColor(language) {
  return langColors[language] || '#ff3e3e'
}
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

/* Loading */
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4rem 0;
}

.loading p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.95rem;
}

.spinner {
  width: 36px;
  height: 36px;
  border: 3px solid rgba(255, 62, 62, 0.15);
  border-top-color: #ff3e3e;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Error */
.error-state {
  text-align: center;
  padding: 4rem 0;
}

.error-state p {
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1rem;
}

.retry-btn {
  background: rgba(255, 62, 62, 0.15);
  color: #ff3e3e;
  border: 1px solid rgba(255, 62, 62, 0.3);
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.retry-btn:hover {
  background: rgba(255, 62, 62, 0.25);
  border-color: rgba(255, 62, 62, 0.5);
}

/* Grid */
.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Card */
.project-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 62, 62, 0.2);
  border-radius: 12px;
  padding: 1.5rem 1.75rem;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  border-color: rgba(255, 62, 62, 0.4);
  box-shadow: 0 0 24px rgba(255, 62, 62, 0.1);

}

.project-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.project-title {
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}

.stars {
  color: #f1e05a;
  font-size: 0.85rem;
  white-space: nowrap;
}

.project-desc {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0 0 1rem;
  flex: 1;
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

.language-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.06);
}

.lang-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}

.project-links {
  display: flex;
  gap: 1rem;
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

.demo-link {
  color: #41b883;
}
</style>
