const SPACE = process.env.CONTENTFUL_SPACE_ID
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN

async function apiCall(query, variables) {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`;
    const options = {
        method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${TOKEN}`,
		},
		body: JSON.stringify({ query, variables }),
    }
    return await fetch(fetchUrl, options)
}

async function getProjects() {
    const query = `{
        talksCollection {
            items {
                sys {
                    id
                }
                title
                description {
                    json
                }
                link
                type
                previewImage {
                    description
                    url
                }
            }
        }
    }`;
    const response = await apiCall(query);
    const json = await response.json();
    return await json.data.talksCollection.items

}

async function getPage(title) {
    const query=`
    query($title:String) {
        pageCollection(where:{title:$title}){
          items{
            title
            description{
              json
            }
            rolesCollection{
              items{
                roleTitle
              }
            }
            linksCollection{
              items {
                name
                url
              }
            }
            seoMetadata{
              title
              ogImage {
                url
              }
              description
            }
          }
        }
      }
    `
    const variables = {
        title: title
    };
    const response = await apiCall(query,variables);
    const json = await response.json();
    return await json.data.pageCollection.items[0]
}

export const client = {getProjects, getPage}