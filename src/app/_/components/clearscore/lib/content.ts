const pageCopy = {
  backNavigation: {
    path: '/',
    cta: 'Back to home',
  },
  intro: [
    'During my time at ClearScore, I primarily focused on DriveScore.',
    'DriveScore is an application that offers insights into how to enhance driving skills and contribute to saving money on insurance premiums. As the sole frontend developer in the team, I assumed responsibility for all frontend and JavaScript-related tasks.',
  ],
  roleSummary: {
    title: 'Highlights',
    tasks: [
      'Indepenendently built the insurance journey,consisting of a 67 fields form with cross filed conditional logic validation, products list and products details page for both mobile platform (webviews) and desktop.',
      'Thanks to the Micro Frontend Architecture the application of SOLID programming principles, I have enabled the seemless deployment of the DriveScore pages to different platforms, including the main ClearScore product.',
      'Utilized the Backend for Frontend pattern to reduce client logic, leading to enhanced user experience and improved application performances.',
      'Utilized Server-Side Rendering and Static Site Generation tools to deliver dynamic and performant web applications and marketing websites.',
      'Utilized HTML to implement a robust accessibility strategy by incorporating semantic elements and proper markup. I enhanced screen reader compatibility and provided a seamless browsing experience by following WCAG guidelines.',
      'Maximized use of CSS to effectively reduce image size and optimize page loading time enhancing overall web performance',
      'Led research and seamless integration of user-friendly tools, empowering the team to efficiently deliver value and quality to users.',
      'Applied critical thinking skills to evaluate existing features, identifying areas for improvement and employing refactoring techniques to optimize code efficiency and readability.',
      'Demonstrated a strong work ethic by taking full ownership of the feature lifecycle, encompassing development, testing, deployment, and proactive monitoring.',
    ],
  },
  appPreviews: {
    accessibleIntro:
      'The following sections comprise screen recordings of the app, which lack sound or captions. A brief description will be provided for each video, and the video itself will be concealed to the screen reader.',
    sections: [
      {
        title: 'Drivescore webapp',
        videos: [
          {
            title: 'Login and Dashboard',
            description: 'A user completes the login form and demonstrates that the email undergoes field-level validation. Upon clicking "Continue," they successfully log into the DriveScore web app and are subsequently redirected to the DriveScore dashboard. The DriveScore dashboard is segmented into three sections. The top section is dedicated to obtaining insurance quotes, displaying a header, a description, and a button labelled "Get a Quote." The middle section pertains to the user\'s score, presenting a brief description of the user\'s score along with an animated speedometer that showcases the score. The bottom section guides the user to download the mobile app, providing a web-based QR code for the download.',
            isPortrait: false,
            filePaths: ['videos/clearscore/drivescore-webapp-login.mp4'],
          },
          {
            title: 'Insurance Form and PLP/PDP',
            description: 'A user navigates to the summary of the insurance form and proceeds through the form sections to review their details. They first navigate to the car section, then the driver\'s section, and finally the cover section. After confirming that the data is correct, they click on "Get a Quote," leading them to the product list page, which displays a range of products along with options to refine the results. Ultimately, the user selects a specific product and is then redirected to the product details page.',
            isPortrait: false,
            filePaths: ['videos/clearscore/drivescore-webapp-form.mp4'],
          },
        ],
      },
      {
        title: 'ClearScore webapp',
        videos: [
          {
            title: 'Drivescore pages in ClearScore webapp',
            description: 'A user arrives at the ClearScore homepage and subsequently clicks on the DriveScore Hub icon located in the top navigation. This action redirects them to the DriveScore Hub, where the aforementioned DriveScore dashboard is displayed. Following this, the user clicks on "Get a Quote" and is directed to the summary page of the insurance quote form. From there, they navigate to the offers page, select "Car Insurance," and demonstrate that this link also leads to the insurance quote summary page.',
            isPortrait: false,
            filePaths: ['videos/clearscore/drivescore-in-clearscore-webapp.mp4'],
          },
        ],
      },
      {
        title: 'Native app login',
        videos: [
          {
            title: 'Magic Login and login with credentials',
            description: 'The following videos are in portrait format and respectively depict a user logging in via a magic link and via credentials. In the magic link scenario, the user only needs to input their email address, and upon submission, an email is dispatched to their inbox containing a link embedded with a specific app-generated token. Clicking on the link within the email redirects the user to the app and automatically logs them in. In the credentials scenario, the user disregards the email and instead opts to click on the "Login with Credentials" call-to-action. This action redirects them to the conventional login page, where the email is pre-filled, and the browser automatically populates the password. Following this, they click "Continue" and are consequently logged into the app.',
            isPortrait: true,
            filePaths: [
              'videos/clearscore/drivescore-magic-login.mp4',
              'videos/clearscore/drivescore-credentials-login.mp4',
            ],
          },
        ],
      },
    ],
  },
};

export default pageCopy;
