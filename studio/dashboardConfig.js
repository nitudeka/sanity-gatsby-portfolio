export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '614c005177c2fb2b4fe58bed',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-epfbrxjj',
                  apiId: 'af9e038b-d42c-43c5-b8d7-e28727286590'
                },
                {
                  buildHookId: '614c0051ad70b333eb530e64',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-75eye5ay',
                  apiId: '4402f782-a9e2-41cc-9ace-771db7423188'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nitudeka/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-75eye5ay.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
