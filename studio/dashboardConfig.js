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
                  buildHookId: '5fccf893ded7dd7c34f5715d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3zryeteq',
                  apiId: 'f98d5a10-2e80-4c87-9abc-8061e39c4c15'
                },
                {
                  buildHookId: '5fccf893d9f2fa4f8bb34512',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-eae1qz6m',
                  apiId: 'df32ef0c-a7ab-42d6-b129-eb83cbca6886'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AJF-ops/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-eae1qz6m.netlify.app', category: 'apps'}
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
