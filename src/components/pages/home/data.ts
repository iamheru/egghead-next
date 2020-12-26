const data = [
  {
    id: 'video',
    name: 'Work Smarter',
    title: 'Rethinking How to Use a Keyboard',
    description:
      'A keyboard is the gateway to code. Your hands are the tools that manage the keyboard. Many people develop pain in their hands from repetitive stress injuries that can seriously damage their ability to code. This talk is about making your keyboard experience as gentle as possible on your hands so your hands are happier and you work more effeciently.',
    instructor: 'John Lindquist',
    instructor_path: '/q/resources-by-john-lindquist',
    path:
      'talks/egghead-save-your-hands-and-save-your-time-rethinking-how-to-use-a-keyboard',
    poster:
      'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1606471489/next.egghead.io/posters/egghead-save-your-hands-and-save-your-time-rethinking-how-to-use-a-keyboard_2x_shrink.png',
    hls_url:
      'https://d2c5owlt6rorc3.cloudfront.net/egghead-save-your-hands-and-save-your-time-rethinking-how-to-use-a-keyboard-McpE69LtI/hls/egghead-save-your-hands-and-save-your-time-rethinking-how-to-use-a-keyboard-McpE69LtI.m3u8',

    dash_url:
      'https://d2c5owlt6rorc3.cloudfront.net/egghead-save-your-hands-and-save-your-time-rethinking-how-to-use-a-keyboard-McpE69LtI/dash/egghead-save-your-hands-and-save-your-time-rethinking-how-to-use-a-keyboard-McpE69LtI.mpd',

    subtitlesUrl:
      'https://egghead.io/api/v1/lessons/egghead-save-your-hands-and-save-your-time-rethinking-how-to-use-a-keyboard/subtitles',
  },
  {
    id: 'featured',
    title: 'Featured',
    resources: [
      {
        name: 'Newest Course',
        title: 'React Real-Time Messaging with GraphQL using urql and OneGraph',
        byline: 'Ian Jones',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/409/013/square_280/EGH_RealtimeGraphqL.png',
        path:
          'playlists/react-real-time-messaging-with-graphql-using-urql-and-onegraph-be5a',
      },
      {
        name: 'Featured Playlist',
        title: 'Scale React Development with NX',
        byline: 'Juri Strumpflohner',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/405/344/full/EGH_ScalingReactNx.png',
        path: 'playlists/scale-react-development-with-nx-4038',
      },
      {
        name: 'Level Up',
        title: 'Advanced JavaScript Foundations',
        byline: 'Tyler Clark',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/353/full/foundation.png',
        path: 'courses/advanced-javascript-foundations',
      },
    ],
  },
  {
    id: 'devEssentials',
    name: 'Practice Makes Perfect',
    title: 'Web Development Essentials',
    description: '',
    resources: [
      {
        title: 'Web Security Essentials: MITM, CSRF, and XSS',
        byline: 'Mike Sherov・50m・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/413/square_280/EGH_WebSecurity.png',
        path: 'courses/web-security-essentials-mitm-csrf-and-xss',
      },
      {
        title: "The Beginner's Guide to React",
        byline: 'Kent C. Dodds・2h 27m・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/160/full/EGH_BeginnersReact2.png',
        path: 'courses/the-beginner-s-guide-to-react',
      },
      {
        title: 'Fix Common Git Mistakes',
        byline: 'Chris Achard・44m・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/401/full/GitMistakes_1000.png',
        path: 'courses/fix-common-git-mistakes',
      },
      {
        title: 'GraphQL Query Language',
        byline: 'Eve Porcello・30m・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/236/full/EGH_GraphQLQuery_Final.png',
        path: 'courses/graphql-query-language',
      },
      {
        title: 'Develop Accessible Web Apps with React',
        byline: 'Erin Doyle・1h 28m・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/412/full/AccessibleReact_1000.png',
        path: 'courses/develop-accessible-web-apps-with-react',
      },
      {
        title: 'Debug the DOM in Chrome with the Devtools Elements panel',
        byline: 'Mykola Bilokonsky・25m・Course',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/060/full/EGH_Chrome_Elements.png',
        path: 'courses/using-chrome-developer-tools-elements',
      },
    ],
  },
  {
    id: 'stateManagement',
    name: 'Research Panel',
    title: 'React State Management in 2020',
    description: '',
    resources: [
      {
        title: 'Using Redux in Modern React Apps with Mark Erikson',
        byline: 'Mark Erikson & Joel Hooks・90m・Chat',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/386/thumb/redux.png',
        path:
          'lessons/react-using-redux-in-modern-react-apps-with-mark-erikson?pl=react-state-management-2020-6bec',
      },
      {
        title: 'XState for State Management in React Apps with David Khourshid',
        byline: 'David Khourshid & Joel Hooks・55m・Chat',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/282/thumb/xstate.png',
        path:
          'lessons/react-xstate-for-state-management-in-react-apps-with-david-khourshid?pl=react-state-management-2020-6bec',
      },
      {
        title: 'State Management in React with Chance Strickland',
        byline: 'Chance Strickland & Joel Hooks・46m・Chat',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/thumb/react.png',
        path:
          'lessons/react-state-management-in-react-with-chance-strickland?pl=react-state-management-2020-6bec',
      },
      {
        title:
          'Using Recoil to Manage Orthogonal State in React Apps with David McCabe',
        byline: 'David McCabe & Joel Hooks・34m・Chat',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/thumb/react.png',
        path:
          'lessons/react-using-recoil-to-manage-orthogonal-state-in-react-apps-with-david-mccabe?pl=react-state-management-2020-6bec',
      },
      {
        title: 'Managing Complex State in React with Jared Palmer',
        byline: 'Jared Palmer & Joel Hooks・1h 28m・Chat',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/thumb/react.png',
        path:
          'lessons/egghead-managing-complex-state-in-react-with-jared-palmer?pl=react-state-management-2020-6bec',
      },
    ],
  },
  {
    id: 'sideProject',
    name: 'Weekend Side Project',
    title: 'Build a Video Chat App with Twilio and Gatsby',
    path: 'courses/build-a-video-chat-app-with-twilio-and-gatsby',
    image:
      'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/395/full/TwilioGatsby_Final.png',
    byline: 'Jason Lengstorf',
    description:
      'In this workshop, Jason Lengstorf will take you from an empty project folder all the way through deployment of a Twilio-powered video chat app built on Gatsby.',
  },
  {
    id: 'mdxConf',
    name: 'Future of Markdown',
    title: 'MDX Conf 2020',
    path: 'playlists/mdx-conf-3fc2',
    byline: 'Chris Biscardi',
    image:
      'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/289/full/mdx.png',
    description:
      'MDX has grown rapidly since the first commit two and a half years ago. Learn how MDX increases developer productivity, improves educational content authoring, and even peek behind the curtains to see how MDX works.',
    resources: [
      {
        title: 'Demystifying MDX',
        byline: 'Cole Bremis',
        path: 'talks/mdx-demystifying-mdx',
      },
      {
        title: 'MDX v2 Syntax',
        byline: 'Laurie Barth',
        path: 'talks/egghead-mdx-v2-syntax',
      },
      {
        title: 'MDX and VueJS/NuxtJS',
        byline: 'Cole Bremis',
        path: 'talks/mdx-mdx-and-vuejs-nuxtjs',
      },
      {
        title: 'Migrating to MDX',
        byline: 'Monica Powell',
        path: 'talks/mdx-migrating-to-mdx',
      },
      {
        title: 'Personal Site Playground with MDX',
        byline: 'Prince Wilson',
        path: 'talks/mdx-personal-site-playgrounds-with-mdx',
      },
      {
        title: 'The X in MDX',
        byline: 'Rodrigo Pombo',
        path: 'talks/mdx-the-x-in-mdx',
      },
      {
        title: 'Digital Gardening with MDX Magic',
        byline: 'Kathleen McMahon',
        path: 'talks/mdx-digital-gardening-with-mdx-magic',
      },
    ],
  },
  {
    id: 'schedule',
    name: 'Schedule',
    title: 'Upcoming Events',
    resources: [
      {
        title: 'egghead talk with James Quick and Jason Lengstorf',
        byline: 'Dec 2nd @ 12PM PST',
        path:
          'https://egghead.zoom.us/webinar/register/5416061508899/WN_cvmQMHRzRj6aad9pkBWoFg',
        calendar: '',
      },
    ],
  },
  {
    id: 'topics',
    name: 'Popular Topics',
    resources: [
      {
        title: 'React',
        path: 's/react',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/026/thumb/react.png',
      },
      {
        title: 'JavaScript',
        path: 's/javascript',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/205/thumb/javascriptlang.png',
      },
      {
        title: 'Angular',
        path: 's/angular',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/300/thumb/angular2.png',
      },
      {
        title: 'Node',
        path: 's/node',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/thumb/nodejslogo.png',
      },
      {
        title: 'Gatsby',
        path: 's/gatsby',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/211/thumb/gatsby.png',
      },
      {
        title: 'GraphQL',
        path: 's/graphql',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/034/thumb/graphqllogo.png',
      },
      {
        title: 'AWS',
        path: 's/aws',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/001/090/thumb/aws.png',
      },
      {
        title: 'RxJS',
        path: 's/rxjs',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/375/thumb/rxlogo.png',
      },
      {
        title: 'Redux',
        path: 's/redux',
        image:
          'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/386/thumb/redux.png',
      },
    ],
  },
  {
    id: 'swag',
    name: 'swag',
    title: '',
    path: 'https://store.egghead.io',
    resources: [
      {
        title: 'GraphQL Query Language Poster',
        path: 'https://store.egghead.io/product/poster-graphql-query-language',
        image:
          'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1606472163/next.egghead.io/store/poster-graphql-query-language.png',
      },
      {
        title: 'egghead Crewneck',
        path: 'https://store.egghead.io/product/egghead-crewneck',
        image:
          'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1606474619/next.egghead.io/store/egghead-crewneck.png',
      },
      // {
      //   title: 'Shirt',
      //   path: 'https://store.egghead.io/product/egghead-shirt',
      //   image:
      //     'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1606473230/next.egghead.io/store/egghead-shirt.jpg',
      // },
      // {
      //   title: 'Beanie',
      //   path: 'https://store.egghead.io/product/knit-beanie',
      //   image:
      //     'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1606472232/next.egghead.io/store/knit-beanie.jpg',
      // },
    ],
  },
]

export default data