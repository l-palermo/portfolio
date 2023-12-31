const components = {
  TextLink: 'TextLink',
  TextHighlight: 'TextHighlight',
} as const;

const pageCopy = {
  backNavigation: {
    path: '/',
    cta: 'Back to home',
  },
  intro: {
    ariaLabel: 'intro',
    items: [
      {
        components: [
          {
            componentId: components.TextLink,
            props: { href: 'https://drivescore.com', target: '_blank', rel: 'noopener noreferrer' },
          },
        ],
        text: 'During my tenure at ClearScore, my primary focus was on a new product called <0>DriveScore</0>.',
      },
      {
        components: [{ componentId: components.TextHighlight }],
        text: 'DriveScore is an application that offers insights into how to enhance driving skills and contribute to saving money on insurance premiums. As the <0>sole frontend developer</0> in the team, I assumed responsibility for all frontend and JavaScript-related tasks.',
      },
      {
        components: [{ componentId: components.TextHighlight }],
        text: "Before joining DriveScore, I worked on the <0>design system</0> team, where I constructed <0>accessible components</0> for the <0>ClearScore Design System</0>. Subsequently, I joined the Resolve team and created the <0>COVID Hub</0>, a section of the app to keep our users informed about the latest news regarding how the COVID outbreak was impacting the UK's financial environment."
      }
    ],
  },
  roleSummary: {
    title: 'Highlights',
    tasks: [
      'Indepenendently built the <0>insurance journey</0>,consisting of a <0>67 fields</0> form with cross filed <0>conditional logic validation</0>, <0>products list</0> and <0>products details</0> page for both <0>mobile platform</0> (webviews) and <0>desktop</0>.',
      'Thanks to the <0>Micro Frontend Architecture</0> the application of <0>SOLID programming principles</0>, I have enabled the seemless deployment of the DriveScore pages to different platforms, including the main ClearScore product.',
      'Utilized the <0>Backend for Frontend</0> pattern to <0>reduce client logic</0>, leading to enhanced user experience and improved application performances.',
      'I used the <0>trophy testing strategy</0> to thoroughly test the application and its features. This included different types of tests like <0>E2E</0>, <0>integration</0>, and <0>unit tests</0>. This approach ensures complete coverage and efficient testing.',
      "Contribute to developing the native app's features by creating and implementing backend services and endpoints. These will serve a transformed data layer, simplifying client logic and allowing for separate iterations beyond the native app's release cycle.",
      'Utilized <0>Server-Side Rendering</0> and <0>Static Site Generation</0> tools to deliver dynamic and performant web applications and marketing websites.',
      'Utilized HTML to implement a robust <0>accessibility</0> strategy by incorporating semantic elements and proper markup. I enhanced <0>screen reader compatibility</0> and provided a seamless browsing experience by following <0>WCAG guidelines</0>.',
      '<0>Maximized use of CSS</0> to effectively reduce image size and optimize page loading time enhancing overall web performance',
      'Led research and seamless <0>integration of user-friendly tools</0>, like <0>haedles CMS (Conentful)</0>, empowering the team to efficiently deliver value and quality to users.',
      'Applied <0>critical thinking</0> skills to evaluate existing features, identifying areas for improvement and employing refactoring techniques to optimize <0>code efficiency</0> and <0>readability</0>.',
      'Demonstrated a strong work ethic by taking <0>full ownership of the feature lifecycle</0>, encompassing development, testing, deployment, and <0>proactive monitoring</0>.',
    ],
  },
  technologies: {
    title: 'Technologies',
    items: [
      'Javascript',
      'Typescript',
      'React',
      'Redux',
      'React Query',
      'Node.js',
      'Fastify',
      'Next.js',
      'Gatsby',
      'SVG',
      'CSS',
      'PostCSS',
      'Storybook',
      'Figma',
      'Jest',
      'React Testing Library',
      'Cypress',
      'Sentry',
      'SignalFx',
      'Datadog',
      'Grafana',
      'Terraform',
      'Jenkins',
    ],
  },
  appPreviews: {
    accessibilityIntro:
      'Note: The following sections consist of screen recordings of the apps, which do not include sound or captions at this time. However, audio and captions will be provided in the near future. To ensure accessibility to video content, a brief description will be provided for each video.',
    notSupportedVideo: 'Your browser does not support the video tag.',
    sections: [
      {
        title: 'Website',
        videos: [
          {
            title: 'DriveScore website overview',
            description:
              "The user navigates to drivescore.com, scrolls down the page, and views several explanatory sections on how the app works, its features, and how they can use it to save money. The user then clicks on 'Partner with Us,' where we provide a form for potential partners to get in touch with us. Finally, the user clicks on 'Login,' which redirects them to the web app.",
            isPortrait: false,
            filePaths: [
              'https://videos.ctfassets.net/66i3mz6tlbxo/470yygqMTiTAiGMbzZQDAn/7946709b835f1ebb1f6fc0d7d165fbae/drivescore-website.mp4',
            ],
          },
        ],
      },
      {
        title: 'Drivescore webapp',
        videos: [
          {
            title: 'Login and Dashboard',
            description:
              'A user completes the login form and demonstrates that the email undergoes field-level validation. Upon clicking "Continue," they successfully log into the DriveScore web app and are subsequently redirected to the DriveScore dashboard. The DriveScore dashboard is segmented into three sections. The top section is dedicated to obtaining insurance quotes, displaying a header, a description, and a button labelled "Get a Quote." The middle section pertains to the user\'s score, presenting a brief description of the user\'s score along with an animated speedometer that showcases the score. The bottom section guides the user to download the mobile app, providing a web-based QR code for the download.',
            isPortrait: false,
            filePaths: ['https://videos.ctfassets.net/66i3mz6tlbxo/2QfpWuCGXm32YFdtFXv80i/7cb46cafca0012f19f748e967095a996/drivescore-webapp-login.mp4'],
          },
          {
            title: 'Insurance Form and PLP/PDP',
            description:
              "A user navigates to the summary of the insurance form and proceeds through the form sections to review their details. They first navigate to the car section, then the driver's section, and finally the cover section. After showcasing field validation and search functionalities of the form, they proceed by clicking on 'Get a Quote,' which leads them to the product list page. On this page, a variety of products are displayed, along with options to refine the search results. Ultimately, the user makes a selection by choosing a specific product. This selection then redirects them to the product details page.",
            isPortrait: false,
            filePaths: ['https://videos.ctfassets.net/66i3mz6tlbxo/6AnRhE66g6Trot20Cainwp/1e653da6f9cf5bd873fc6f3ce09c8040/drivescore-webapp-form.mp4'],
          },
        ],
      },
      {
        title: 'ClearScore webapp',
        videos: [
          {
            title: 'Drivescore pages in ClearScore webapp',
            description:
              'A user arrives at the ClearScore homepage and subsequently clicks on the DriveScore Hub icon located in the top navigation. This action redirects them to the DriveScore Hub, where the aforementioned DriveScore dashboard is displayed. Following this, the user clicks on "Get a Quote" and is directed to the summary page of the insurance quote form. From there, they navigate to the offers page, select "Car Insurance," and demonstrate that this link also leads to the insurance quote summary page.',
            isPortrait: false,
            filePaths: ['https://videos.ctfassets.net/66i3mz6tlbxo/7eLTq2mDAcvyuqPILSBUsF/3942f6924109715707ce0cb6a85a885c/drivescore-in-clearscore-webapp.mp4'],
          },
        ],
      },
      {
        title: 'Native app login',
        videos: [
          {
            title: 'Magic Login and login with credentials',
            description:
              'The following videos respectively depict a user logging in via a magic link and via credentials. In the magic link scenario, the user only needs to input their email address, and upon submission, an email is dispatched to their inbox containing a link embedded with a specific app-generated token. Clicking on the link within the email redirects the user to the app and automatically logs them in. In the credentials scenario, the user disregards the email and instead opts to click on the "Login with Credentials" call-to-action. This action redirects them to the conventional login page, where the email is pre-filled, and the browser automatically populates the password. Following this, they click "Continue" and are consequently logged into the app.',
            isPortrait: true,
            filePaths: [
              'https://videos.ctfassets.net/66i3mz6tlbxo/1i0sP0kCwwXsHZeg64PCIE/c8be438161f49c1da2855ad8149524cc/drivescore-magic-login.mp4',
              'https://videos.ctfassets.net/66i3mz6tlbxo/52lseNVkpu8evgSYaAm6Rb/0e37a37025fce21401016c5113d938bc/drivescore-credentials-login.mp4',
            ],
          },
        ],
      }
    ],
  },
};

export default pageCopy;
