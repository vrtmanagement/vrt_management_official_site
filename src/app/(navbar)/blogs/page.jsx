import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { blogs } from './blogs-data'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const Page = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight" style={{ fontFamily: 'Lora, serif' }}>Blog and Insights</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, serif' }}>
          Exploring design, marketing, and growth strategies.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {blogs.map((post) => (
          <Link key={post.slug} href={`/blogs/${post.slug}`} className="group block h-full">
            <Card className="h-full overflow-hidden rounded-2xl border border-black/10 bg-background/60 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ring-1 ring-transparent flex flex-col">
              <CardHeader className="p-0">
                <div className="relative w-full h-56 lg:h-64 overflow-hidden rounded-t-2xl bg-white">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-100"
                    priority={false}
                  />
                </div>
              </CardHeader>
              <CardContent className="py-4 flex h-full flex-col">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-wide text-muted-foreground" style={{ fontFamily: 'Inter, serif' }}>
                  <span>{post.author}</span>
                  <span className="h-1 w-1 rounded-full bg-red-500/70" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="mt-3 py-3">
                  <CardTitle className="text-lg  tracking-wide transition-colors group-hover:text-red-600" style={{ fontFamily: 'Lora, serif' }}>
                    {post.title}
                  </CardTitle>
                </div>
                <div className="mt-auto pt-4">
                  <div className="border-t border-black/20"></div>
                  <div className="mt-4">
                  <span
                    className={
                      buttonVariants({ variant: 'cta', size: 'sm' }) +
                      ' rounded-full px-4 py-2 shadow-sm transition-all hover:shadow-md'
                    }
                  >
                    <span className="inline-flex items-center gap-2">
                      Read blog
                      <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Page