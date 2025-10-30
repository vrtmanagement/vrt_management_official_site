import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogBySlug } from '../blogs-data'
import { blogs } from '../blogs-data'
import { Badge } from '@/components/ui/badge'

export default async function BlogDetailPage({ params }) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)

  if (!blog) return notFound()

  const recommended = blogs.filter((b) => b.slug !== blog.slug).slice(0, 8)

  return (
    <div className="mx-auto max-w-6xl px-4 pt-28 pb-12">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Left: Main blog content */}
        <article className="lg:col-span-8 border rounded-2xl p-6">
          <header>
            <h1 className="text-5xl font-bold tracking-tight" style={{ fontFamily: 'Lora, serif' }}>{blog.title}</h1>
            <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
              <span style={{ fontFamily: 'Inter, serif' }}>By {blog.author}</span>
              <span style={{ fontFamily: 'Inter, serif' }}>{new Date(blog.date).toLocaleDateString()}</span>
            </div>
          </header>

          <div className="relative mt-6 h-96 w-full overflow-hidden rounded-xl">
            <Image src={blog.image} alt={blog.title} fill className="object-cover" />
          </div>

          {/* Intro/lead paragraph */}
          {blog.intro ? (
            <p className="mt-8 text-lg leading-8 text-muted-foreground" style={{ fontFamily: 'Inter, serif' }}>
              {blog.intro}
            </p>
          ) : null}

          {/* Rich sections if provided; fallback to simple content */}
          {Array.isArray(blog.sections) && blog.sections.length > 0 ? (
            <div className="mt-10 space-y-6">
              {blog.sections.map((sec, i) => (
                <section key={i} className="rounded-2xl border bg-background/60 p-5 backdrop-blur">
                  <h2 className="text-xl font-semibold" style={{ fontFamily: 'Lora, serif' }}>{sec.heading}</h2>
                  {(sec.subheading ? [sec.subheading] : []).map((sub, idx) => (
                    <h3 key={idx} className="mt-1 text-base font-medium" style={{ fontFamily: 'Lora, serif' }}>{sub}</h3>
                  ))}
                  <div className="mt-2 space-y-3">
                    {Array.isArray(sec.paragraphs) && sec.paragraphs.map((p, idx) => (
                      <p key={idx} className="text-lg leading-8 text-muted-foreground" style={{ fontFamily: 'Inter, serif' }}>{p}</p>
                    ))}
                    {Array.isArray(sec.list) ? (
                      <ul className="list-disc pl-5 text-lg leading-8 text-muted-foreground" style={{ fontFamily: 'Inter, serif' }}>
                        {sec.list.map((item, li) => (
                          <li key={li}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <section className="prose prose-neutral mt-8 max-w-none dark:prose-invert">
              <div>
                {(blog.content || '').split('\n').map((line, idx) => (
                  <p key={idx} className="text-lg leading-8 text-muted-foreground" style={{ fontFamily: 'Inter, serif' }}>{line}</p>
                ))}
              </div>
            </section>
          )}
        </article>

        {/* Right: Recommended posts */}
        <aside className="lg:col-span-4">
          <div className="sticky top-24 rounded-2xl border bg-background/60 p-5 backdrop-blur">
            <h2 className="text-xl font-semibold" style={{ fontFamily: 'Lora, serif' }}>Recommended</h2>
            <ul className="mt-4 space-y-4">
              {recommended.map((post) => (
                <li key={post.slug} className="group">
                  <Link href={`/blogs/${post.slug}`} className="block">
                    <div className="font-medium group-hover:underline text-muted-foreground" style={{ fontFamily: 'Inter, serif' }}>
                      {post.title}
                    </div>
                    <div className="text-xs text-muted-foreground" style={{ fontFamily: 'Inter, serif' }}>
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}


