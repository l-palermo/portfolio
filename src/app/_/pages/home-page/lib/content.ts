import MailIcon from '../../../../_/assets/icons/mail.svg';
import LinkedinIcon from '../../../../_/assets/icons/linkedin-logo.svg';
import GithubIcon from '../../../../_/assets/icons/github-logo.svg';

const pageCopy = {
  headerGroup: {
    header: 'luigi palermo',
    subHeader: 'frontend engineer',
    description: 'I build accessible, inclusive products and digital experiences for the web.',
    resumeCta: 'View my resume',
  },
  footerAriaLabel: 'additional information',
  contacts: {
    ariaLabel: 'contact details',
    items: [
      {
        Icon: MailIcon,
        href: 'mailto:l-palermo@hotmail.it',
        ariaLabel: 'email',
      },
      {
        Icon: LinkedinIcon,
        href: 'https://www.linkedin.com/in/luigi-palermo-b09733a0/',
        ariaLabel: 'linkedin profile',
      },
      {
        Icon: GithubIcon,
        href: 'https://github.com/l-palermo',
        ariaLabel: 'github profile',
      },
    ],
  },
  details: {
    intro: [
      'I build <0>web applications</0> encompassing all stages of the process, with a strong focus on delivering <0>high-quality</0>, <0>accessible</0>, <0>well-tested</0> and <0>scalable</0> front-end solutions.',
      'Collaborate effectively within <0>cross-functional teams</0>, playing an active role in <0>architectural discussions</0> and contributing significantly to decision-making processes, fostering a unified and innovative approach.',
      'Take an active <0>mentoring role</0> to support and empower junior team members, providing valuable code reviews and <0>constructive feedback</0>. Actively promote a culture of <0>knowledge sharing</0>, continuous <0>learning</0>, and <0>collaboration</0>.',
    ],
    experiences: {
      title: 'Experiences',
      items: [
        {
          startDate: '01 . 2020',
          endDate: 'Present',
          role: 'Frontend engineer',
          company: 'ClearScore',
          description:
            'Developed the frontend and everything JavaScript for a greenfield project "DriveScore," working within a hybrid approach that combined Agile, Extreme Programming (XP), Kanban, and Lean methodologies.',
          ctaAriaLabel: 'Open details',
          destionationUrl: '/clearscore',
          technologies: ['React', 'Typescript', 'Node.js', 'Fastify', 'PostCSS', 'Gatsby'],
        },
      ],
    },
    projects: {
      title: 'Projects',
      items: [
        {
          title: 'project',
          name: 'Portfolio',
          description:
            "This website is built using Next.JS, React, and CSS Modules. It's an ongoing project, and more content and features will be added over time.",
          Icon: GithubIcon,
          iconDestinationUrl: 'https://github.com/l-palermo/portfolio',
          iconAriaLabel: 'Open on github',
          projectAriaLabel: 'Open project',
          projectDestinationUrl: 'https://luigipalermo.com',
          isSameTab: true,
          technologies: { ariaLabel: 'technologies', items: ['React', 'Typescript', 'Next.js', 'PostCSS', 'Figma'] },
        }
      ],
    },
  },
};

export default pageCopy;
