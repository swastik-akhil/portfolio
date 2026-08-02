import type { Metadata } from 'next'
import PageTitle from '../components/PageTitle'
import ExperienceTimeline, { IExperience } from './components/ExperienceTimeline'



export const metadata: Metadata = {
  title: 'Experience - Akhil Agrawal',
  openGraph: {
    title: 'Experience - Akhil Agrawal',
    url: '/experience',
  },
  alternates: {
    canonical: '/experience',
  },
}

const experiences: IExperience[] = [
  {
    company: 'GateOverflow',
    position: 'Freelance Developer',
    location: 'Remote, London, UK',
    startDate: 'April 2026',
    endDate: 'July 2026',
    description: [
      'Redesigned the GATEOverflow quiz portal to closely replicate the official GATE examination interface.',
      'Enhanced the experience of a platform used by 260,000+ GATE aspirants through an intuitive and responsive interface.',
    ],
    // technologies: ['Ruby', 'Ruby on Rails', 'React', 'AWS', 'PostgreSQL', 'Docker', 'Sidekiq', 'Redis'],
  },
  {
    company: 'GoComet',
    position: 'Backend Developer Intern',
    location: 'Remote, Banglore, India',
    startDate: 'November 2024',
    endDate: 'March 2025',
    description: [
      'Worked on GoComet’s flagship logistics product serving 1,000+ clients, including Honda, Unilever, TATA Motors, and Schneider Electric.',
      'Integrated multiple shipping and logistics provider websites into the GoComet platform to enable real-time shipment tracking and visibility.',
      'Automated browser interactions for reliable data collection while minimizing detection, supporting logistics intelligence and operational efficiency.',
      // 'Collaborated on backend features and integrations to build scalable and maintainable data pipelines.',
    ],
    // technologies: ['Ruby', 'Ruby on Rails', 'React', 'AWS', 'PostgreSQL', 'Docker', 'Sidekiq', 'Redis'],
  },
  {
    company: 'Credknow Finetune Limited',
    position: 'Full Stack Developer Intern',
    location: 'Remote, Pune, India',
    startDate: 'August 2024',
    endDate: 'November 2024',
    description: [
      'Developed the E-KYC feature by integrating Peer.js for real-time video communication and AWS S3 for secure, scalable document storage.',
      'Implemented a cost-effective E-KYC workflow, resulting in substantial infrastructure cost savings.',
      'Automated EMI collection using a serverless architecture with AWS Lambda, improving reliability and reducing manual intervention.',
      'Developed REST APIs and responsive user interfaces to deliver a seamless user experience.'
    ],
    // technologies: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'Redis', 'Socket.io', 'HLS'],
  },
//   {
//     company: 'Startup Company',
//     position: 'Junior Developer',
//     location: 'Delhi, India',
//     startDate: 'Jan 2020',
//     endDate: 'May 2021',
//     description: [
//       'Contributed to frontend development using React and TypeScript',
//       'Integrated third-party APIs and payment gateways',
//       'Participated in daily standups and sprint planning sessions',
//       'Developed reusable component library for the design system',
//     ],
//     technologies: ['React', 'JavaScript', 'HTML/CSS', 'Git', 'Figma'],
//   },
]

export default function ExperiencePage() {
  return (
    <>
      <PageTitle title="Experience" />
      <ExperienceTimeline experiences={experiences} />
    </>
  )
}
