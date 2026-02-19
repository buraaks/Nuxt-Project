<template>
  <div class="max-w-[900px] mx-auto px-6 py-8 pb-16">
    <section class="text-center mb-12">
      <h1 class="text-white text-[clamp(2rem,5vw,3rem)] font-bold tracking-wider mb-2">Projeler</h1>
      <p class="text-white/60 text-lg">GitHub Projelerim.</p>
    </section>

    <!-- Loading -->
    <div v-if="pending" class="flex flex-col gap-6 py-8">
      <USkeleton v-for="i in 3" :key="i" class="h-40 w-full rounded-xl" />
    </div>

    <!-- Error -->
    <div v-else-if="error" class="text-center py-16">
      <p class="text-white/60 mb-4">Depolar yüklenirken bir hata oluştu.</p>
      <UButton variant="soft" color="primary" icon="i-lucide-refresh-cw" @click="refresh()">
        Tekrar Dene
      </UButton>
    </div>

    <!-- Projects -->
    <section v-else class="flex flex-col gap-6">
      <article
        v-for="repo in repos"
        :key="repo.id"
        class="flex flex-col bg-white/[0.03] border border-primary-500/20 rounded-xl px-7 py-6 transition-all duration-200 hover:border-primary-500/40 hover:shadow-[0_0_24px_rgba(255,62,62,0.1)]"
      >
        <div class="flex items-center justify-between mb-2">
          <h2 class="text-white text-xl font-semibold">{{ repo.name }}</h2>
          <span v-if="repo.stargazers_count > 0" class="text-yellow-300 text-sm whitespace-nowrap">
            &#9733; {{ repo.stargazers_count }}
          </span>
        </div>

        <p class="text-white/75 text-[0.95rem] leading-relaxed mb-4 flex-1">
          {{ repo.description || 'Açıklama bulunmuyor.' }}
        </p>

        <div class="flex flex-wrap gap-2 mb-3">
          <UBadge v-if="repo.language" variant="subtle" color="neutral" class="gap-1.5">
            <span class="inline-block size-2 rounded-full" :style="{ background: langColor(repo.language) }" />
            {{ repo.language }}
          </UBadge>
          <UBadge v-for="topic in repo.topics" :key="topic" variant="subtle" color="primary">
            {{ topic }}
          </UBadge>
        </div>

        <div class="flex gap-3 pt-1">
          <UButton
            :to="repo.html_url"
            target="_blank"
            variant="link"
            color="primary"
            size="sm"
            trailing-icon="i-lucide-arrow-up-right"
          >
            GitHub
          </UButton>
          <UButton
            v-if="repo.homepage"
            :to="repo.homepage"
            target="_blank"
            variant="link"
            color="neutral"
            size="sm"
            trailing-icon="i-lucide-arrow-up-right"
            class="text-emerald-400 hover:text-emerald-300"
          >
            Demo
          </UButton>
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
