import { HOST } from '@/constans/common'
import { getBlogPosts } from '@/utils/get-blog-posts'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts()

  const staticRoutes = [
    {
      url: HOST,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${HOST}/about`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${HOST}/blog`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${HOST}/experience`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${HOST}/projects`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${HOST}/art`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${HOST}/contact`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  const blogRoutes = posts.map((post) => ({
    url: `${HOST}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes]
}
