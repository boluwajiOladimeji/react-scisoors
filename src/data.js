import { nanoid } from 'nanoid';

export const links = [
  {
    href: 'home',
    text: 'My URLs',
  },
  {
    href: 'features',
    text: 'Features',
  },
  {
    href: 'pricing',
    text: 'Pricing',
  },
  {
    href: 'form',
    text: 'Analytics',
  },
  {
    href: 'questions',
    text: 'FAQs',
  },
];

export const footerSocials = [
  { src: './images/i.fi-social-twitter.svg' },
  {
    src: './images/svg.feather.svg',
  },
  {
    src: './images/i.fi-social-linkedin.svg',
  },
  {
    src: './images/i.fi-social-facebook.svg',
  },
];

export const footerWhy = ['Scissors 101', 'Integration and API', 'Pricing'];
export const footerSolutions = [
  'Social Media',
  'Digital Marketing',
  'Customer Service',
  'For Developers',
];

export const footerProducts = ['Link Management', 'QR Codes', 'Link-in-bio'];
export const footerCompany = [
  'About Scissor',
  'Careers',
  'Partners',
  'Press',
  'Contact',
  'Reviews',
];

export const footerResources = [
  'Blog',
  'Resource',
  'Developers',
  'App Connectors',
  'Support',
  'Trust Center',
  'Browser Extension',
  'Mobile App',
];

export const footerFeatures = [
  'Branded Links',
  'Mobile Links',
  'Campaign',
  'Management & Analytics',
  'QR Code Operation',
];

export const footerLegal = [
  'Privacy Policy',
  'Cookie Policy',
  'Terms of Service',
  'Acceptable Use Policy',
  'Code of Conduct',
];

export const questions = [
  {
    id: nanoid(),
    question: 'How does URL shortening work?',
    answer: `    URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.`,
  },
  {
    id: nanoid(),

    question: `Is it necessary to create an account to use the URL shortening
              service?`,
    answer: `URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.`,
  },
  {
    id: nanoid(),

    question: ` Are the shortened links permanent? Will they expire?`,
    answer: `  URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.`,
  },
  {
    id: nanoid(),

    question: `  Are there any limitations on the number of URLs I can shorten?`,
    answer: `  URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.`,
  },
  {
    id: nanoid(),

    question: ` Can I customize the shortened URLs to reflect my brand or content?`,
    answer: `URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.`,
  },
  {
    id: nanoid(),

    question: `  Can I track the performance of my shortened URLs?`,
    answer: `            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.`,
  },
  {
    id: nanoid(),

    question: `  How secure is the URL shortening service? Are the shortened links
              protected against spam or malicious activity?`,
    answer: `            URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.`,
  },
  {
    id: nanoid(),

    question: ` What is a QR code and what can it do?`,
    answer: `URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.`,
  },
  {
    id: nanoid(),

    question: `  Is there an API available for integrating the URL shortening
              service into my own applications or websites?`,
    answer: `URL shortening works by taking a long URL and creating a shorter,
            condensed version that redirects to the original URL. When a user
            clicks on the shortened link, they are redirected to the intended
            destination.`,
  },
];

export const features = [
  {
    id: nanoid(),
    img: './images/url-shortening.svg',
    title: 'URL Shortening',
    text: 'Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.',
  },
  {
    id: nanoid(),
    img: './images/edit.svg',
    title: 'Custom URLs',
    text: 'With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.',
  },
  {
    id: nanoid(),
    img: './images/grid.svg',
    title: 'QR Codes',
    text: 'Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.',
  },
  {
    id: nanoid(),
    img: './images/activity.svg',
    title: 'Data Analytics',
    text: 'Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.',
  },
];

export const plans = [
  {
    plan: 'Basic',
    type: 'Free',
    text: 'Free Plan for all users',
    img: './images/check-circle-blue.svg',
    active: false,
    list: [
      `Unlimited URL Shortening`,
      ` Unlimited Basic Link Analytics`,
      `Unlimited Customizable Short Links`,
      `Unlimited Standard Support`,
      `Unlimited Ad-Supported`,
    ],
  },
  {
    plan: 'Professional',
    type: '$15 / month',
    text: 'Ideal for business creators',
    img: './images/check-circle.svg',
    active: true,
    list: [
      `Enhanced Link Analytics`,
      `Custom Branded Domains`,
      `Advanced Link Customization`,
      `Priority Support`,
      `Ad-free Experience`,
    ],
  },
  {
    plan: 'Teams',
    type: '$25 / month',
    text: 'Share with up to 10 users',
    img: './images/check-circle-blue.svg',
    active: false,
    list: [
      `Team Collaboration`,
      `User Roles and Permissions`,
      `Enhance Security`,
      `API Access`,
      `Dedicated Account Manager`,
    ],
  },
];
