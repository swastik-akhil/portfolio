import type { Metadata } from 'next'
import { FiArrowUpRight, FiCamera } from 'react-icons/fi'
import PageTitle from '../components/PageTitle'

export const metadata: Metadata = {
  title: 'Art - Akhil Agrawal',
  description: 'A collection of visual experiments and creative work by Akhil Agrawal.',
  openGraph: {
    title: 'Art - Akhil Agrawal',
    url: '/art',
  },
  alternates: {
    canonical: '/art',
  },
}

export default function ArtPage() {
  return (
    <>
      <PageTitle title="Art" />
      <section aria-labelledby="art-intro" className="grid gap-8 pb-5 md:grid-cols-[minmax(0,0.85fr)_minmax(300px,1.15fr)] md:items-end">
        <div className="pb-2">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-black/50 dark:text-white/50">Visual diary</p>
          <h2 id="art-intro" className="mb-5 max-w-md text-3xl font-bold leading-tight md:text-4xl">
            Frames found beyond the screen.
          </h2>
          <p className="max-w-md leading-7 text-black/70 dark:text-white/70">
            Photography is where I slow down, look closer, and collect small stories in light, shadow, and movement.
          </p>
        </div>

        <a
          href="https://pixel.akhilag.me/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Explore the photography portfolio at pixel.akhilag.me (opens in a new tab)"
          className="group relative block min-h-[300px] overflow-hidden bg-[#c8c0b6] p-5 text-white transition-transform duration-500 hover:-translate-y-1 md:min-h-[360px]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,#f5dfaa_0,transparent_24%),radial-gradient(circle_at_78%_70%,#6d3038_0,transparent_31%),linear-gradient(135deg,#273442_0%,#719197_47%,#d8b080_100%)] transition-transform duration-700 group-hover:scale-105"
          />
          <div
            aria-hidden="true"
            className="absolute -left-16 top-14 h-56 w-56 rounded-full border-[28px] border-white/25 transition-transform duration-700 group-hover:translate-x-7"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-[16%] h-[72%] w-[34%] rotate-[18deg] bg-black/20 backdrop-blur-[1px]"
          />
          <div className="relative z-10 flex h-full min-h-[260px] flex-col justify-between md:min-h-[320px]">
            <div className="flex items-start justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-black/10 backdrop-blur-sm">
                <FiCamera size={18} />
              </span>
              <FiArrowUpRight
                size={22}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </div>
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-white/75">Photography portfolio</p>
              <p className="text-2xl font-bold tracking-tight md:text-3xl">pixel.akhilag.me</p>
              <span className="mt-4 inline-block border-b border-white/70 pb-1 text-sm font-bold">Explore the collection</span>
            </div>
          </div>
        </a>
      </section>
    </>
  )
}
