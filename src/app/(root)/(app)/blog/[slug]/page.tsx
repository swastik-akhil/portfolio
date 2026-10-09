import { getBlogPost, getBlogPosts } from '@/utils/get-blog-posts'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import PageTitle from '../../components/PageTitle'

type BlogPostPageProps = {
  params: { slug: string }
}

export const dynamicParams = false

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join('-')}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ArticleImage({ alt = '', ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img {...props} alt={alt} className="h-auto max-w-full" />
}

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {}
  }

  return {
    title: `${post.metadata.title} - Akhil Agrawal`,
    description: post.metadata.summary,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.summary,
      type: 'article',
      url: `/blog/${post.slug}`,
      publishedTime: post.metadata.publishedAt,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <PageTitle title={post.metadata.title} />
      <article className="prose max-w-none prose-neutral dark:prose-invert">
        <MDXRemote source={post.content} options={{ blockJS: false }} components={{ Table, Image: ArticleImage }} />
      </article>
    </>
  )
}
