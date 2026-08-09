import tushar from '@/assets/tushar.jpg'
import { RESUME_URL } from '@/constans/common'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'



export const metadata: Metadata = {
  title: 'About - Akhil Agrawal',
  openGraph: {
    title: 'About - Akhil Agrawal',
    url: '/about',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <PageTitle title="About" />
      <div className="md:flex">
        <div className="mb-5 md:w-56">
          <Image src={tushar} alt="Foto Akhil Agrawal" className="block w-full" placeholder="blur" />
        </div>
        <div className="md:flex-1 md:pl-6">
          <h2 className="mb-2 text-xl font-bold">I’m Akhil Agrawal</h2>
          <div className="mb-6">
            <p className="mb-1">
              Software Engineer based in India, currently pursuing a Master's degree in Mathematics & Computing at IIT Patna. <br />
              Graduated with a Bachelor's in Computer Science Engineering, passionate about building scalable software and solving complex problems.
              <br />You can use me as a factory generating code.
            </p>
          </div>
          <h2 className="mb-2 text-xl font-bold">What I believe</h2>
          <div className="mb-6">
            <p className="mb-1">
            Great developers aren’t defined by the tools they use, but by how they think and solve problems.
            </p>
          </div>
          <h2 className="mb-2 text-xl font-bold">Tech I love</h2>
          <div className="mb-6">
            <p className="mb-1">Node.js, C/C++, Javascript, Python, SQL/NoSQL</p>
            <p className="italic text-[#2e92ff] font-medium">Hire me, and I'll make your tech stack my next favorite!</p>
          </div>
          <a
            download
            target="_blank"
            rel="nofollow"
            href={RESUME_URL}
            className="mr-3 inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Resume
          </a>
          <Link
            href="/contact"
            rel="nofollow"
            className="inline-block bg-white px-5 py-3 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black"
          >
            Contact me
          </Link>
        </div>
      </div>
    </>
  )
}
