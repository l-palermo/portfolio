import TelephoneIcon from '../assets/svgs/telephone.svg';
import MailIcon from '../assets/svgs/mail.svg';
import LinkedinIcon from '../assets/svgs/linkedin-logo.svg';
import GithubIcon from '../assets/svgs/github-logo.svg';

const config = {
  headerGroup: {
    header: 'luigi palermo',
    subHeader: 'frontend engineer',
    description: 'I build accessible, inclusive products and digital experiences for the web.',
  },
  details: {
    intro: [
      {
        skill:
          'I build web applications encompassing all stages of the process, with a strong focus on delivering high-quality, accessible, well-tested and scalable front-end solutions.',
      },
      {
        skill:
          'Collaborate effectively within cross-functional teams, playing an active role in architectural discussions and contributing significantly to decision-making processes, fostering a unified and innovative approach.',
      },
      {
        skill:
          'Take an active mentoring role to support and empower junior team members, providing valuable code reviews and constructive feedback. Actively promote a culture of knowledge sharing, continuous learning, and collaboration.',
      },
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
        },
        {
          startDate: '07 . 2020',
          endDate: '10 . 2020',
          role: 'Frontend engineer',
          company: 'Ocyan',
          description: 'Developed the onboarding UI and the new version of dashboard',
          ctaAriaLabel: 'Open details',
          destionationUrl: '/ocyan',
        },
      ],
    },
    projects: {
      title: 'Projects',
      items: [
        {
          name: 'Caturday',
          description:
            'Search for the latest trending memes and create a collection of your favourites. Reactm, Amplify, GraphQl',
          Icon: GithubIcon,
          iconDestinationUrl: 'https://github.com/l-palermo/react-amplify-app',
          iconAriaLabel: 'Open on github',
          projectAriaLabel: 'Open project',
          projectDestinationUrl: 'https://caturday.uk',
        },
        {
          name: 'Portfolio',
          description:
            'This website, simple description on main tech design choices of this website',
          Icon: GithubIcon,
          iconDestinationUrl: 'https://github.com/l-palermo/portfolio',
          iconAriaLabel: 'Open on github',
          projectAriaLabel: 'Open project',
          projectDestinationUrl: 'https://luigipalermo.com',
        },
      ],
    },
  },
  footerAriaLabel: 'additional information',
  contacts: {
    ariaLabel: 'contact details',
    items: [
      {
        Icon: TelephoneIcon,
        href: 'tel:+447490393368',
        ariaLabel: 'phone number',
      },
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
};

export default config;
