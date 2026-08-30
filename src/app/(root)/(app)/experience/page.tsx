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
      'Redeveloped the GATEOverflow test portal to closely match the official GATE examination interface, creating afamiliar experience for GATE aspirants and now used by 260,000+ students, including 10,000+ daily.',
      ' Fixed bugs, resolved user-reported issues, and delivered regular improvements across the GateOverflow platform.',
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
      ' Developed E-KYC feature, integrated an open source library Peer.js for real-time video communication and leveraged AWS S3 for secure and scalable data storage. This implementation enabled substantial cost savings ',
      'Automated EMI collection using a serverless architecture with AWS Lambda, improving reliability and reducing manual follow-ups.',
      'Made improvements based on requirements and feedback, helping the platform better support daily business needs.'
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
