export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62b0218f77999b6b1b06fdd7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-bvtuehww',
                  apiId: '8f2feae2-b829-4b6d-806d-30fcae66c66a'
                },
                {
                  buildHookId: '62b0218f6d06766b2726bfa0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-aixzx89u',
                  apiId: '4fc069fc-8e13-488f-9eb5-35726d2bf578'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/feliche93/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-aixzx89u.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
