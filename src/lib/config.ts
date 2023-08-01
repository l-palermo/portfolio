import TelephoneIcon from "../assets/svgs/telephone.svg";
import MailIcon from "../assets/svgs/mail.svg";
import LinkedinIcon from "../assets/svgs/linkedin-logo.svg";
import GithubIcon from "../assets/svgs/github-logo.svg";

const config = {
  headerGroup: {
    hedaer: "luigi palermo",
    subHeader: "frontend engineer",
    description:
      "I build accessible, inclusive products and digital experiences for the web.",
  },
  contacts: {
    ariaLabel: "contacts",
    items: [
      {
        Icon: TelephoneIcon,
        href: "tel:+447490393368",
        ariaLabel: "phone number",
      },
      {
        Icon: MailIcon,
        href: "mailto:l-palermo@hotmail.it",
        ariaLabel: "email",
      },
      {
        Icon: LinkedinIcon,
        href: "https://www.linkedin.com/in/luigi-palermo-b09733a0/",
        ariaLabel: "linkedin profile",
      },
      {
        Icon: GithubIcon,
        href: "https://github.com/l-palermo",
        ariaLabel: "github profile",
      },
    ],
  },
};

export default config;
