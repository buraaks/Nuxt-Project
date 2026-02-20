export default defineCachedEventHandler(
  async () => {
    const data = await $fetch<any[]>('https://api.github.com/users/buraaks/repos', {
      headers: { Accept: 'application/vnd.github.v3+json' }
    })

    return data
      .filter((repo) => !repo.fork)
      .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        topics: repo.topics
      }))
  },
  { maxAge: 3600 }
)
