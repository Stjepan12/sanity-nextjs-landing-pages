export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5ea041ca0a35b748bd2df498',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-aexemfgc',
                  apiId: '492430b6-8832-4c07-8007-a31d4292196a'
                },
                {
                  buildHookId: '5ea041cae73a3745e2fecdd4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xxw46tqn',
                  apiId: '092ce34a-986e-41bd-a8a8-52a19f5cb57b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Stjepan12/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xxw46tqn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
