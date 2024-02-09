export default {
  /**
   * basic Information
   */
  title: `gembitious.github.io`,
  description: `개발자 젬빗`,
  language: `ko`,
  siteUrl: `https://gembitious.github.io/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: ``, //`gembitious/gembitious.github.io`,
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `김국호`,
    nickname: `젬빗`,
    stack: ['Frontend', 'React', 'Typescript'],
    bio: {
      email: `hassamnet@gmail.com`,
      residence: 'Suwon, South Korea',
    },
    social: {
      github: `https://github.com/gembitious`,
      linkedIn: `https://www.linkedin.com/in/gukho-kim-635032128/`,
      resume: `https://`,
    },
    dropdown: {
      tistory: 'https://',
      velog: 'https://',
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: 'category1',
      category: 'featured-category1',
    },
    {
      title: 'category2',
      category: 'featured-category2',
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
    {
      category: 'Career',
      date: '2022.01.04 - NOW',
      en: 'A Corp.',
      kr: 'A 회사',
      info: 'A 팀',
      link: '',
    },
    {
      category: 'Career',
      date: '2021.01.04 - 2022.01.04',
      en: 'B Corp.',
      kr: 'B 회사',
      info: 'B 팀',
      link: '',
    },
    {
      category: 'Activity',
      date: '2023.07 - NOW',
      en: 'Community',
      kr: '커뮤니티',
      info: 'IT 커뮤니티',
      link: '',
    },
  ],

  /**
   * metadata for Playground Page
   */
  projects: [
    {
      title: 'Portfolio',
      description: '포트폴리오',
      techStack: ['React', 'Next.js', 'Typescript'],
      thumbnailUrl: '', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: '',
        demo: '',
        googlePlay: '',
        appStore: '',
      },
    },
  ],

  /**
   * metadata for Buy Me A Coffee
   */
  remittances: {
    toss: {
      link: 'https://toss.me/gembit',
      qrCode: '*.svg', // Path to your in the 'assets' folder
    },
    kakaopay: {
      qrCode: '*.svg', // Path to your in the 'assets' folder
    },
  },
};
