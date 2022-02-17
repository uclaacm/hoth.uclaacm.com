const path = require('path');
const GalleryPageTemplate = path.resolve('./src/components/GalleryPage/GalleryPageTemplate.js');

function getHothWinners(allHothWinners) {
	const hothWinners = new Map();
	for (const hoth of allHothWinners) {
		const winnersArray = [];
		for (const winner of hoth.parent.childYaml.winners) {
			const { category, description, id, link, title } = winner;
			const winnerMap = { category, description, id, link, title };
			winnersArray.push(winnerMap);
		}
		hothWinners.set(hoth.parent.name, winnersArray);
	}
	return hothWinners;
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
	const numPages = 8;
	const hothData = await graphql(`
	{
        allYaml(sort: {fields: name, order: ASC}) {
            nodes {
              parent {
                ... on File {
                  id
                  name
                  childYaml {
                    name
                    devpost
                    winners {
                      category
                      description
                      id
                      link
                      title
                    }
                  }
                }
              }
            }
          }
	  }
    `);
	const winnersInfo = getHothWinners(hothData.data.allYaml.nodes);
	for (let i = 1; i <= numPages; i++) {
		const winnerInfo = winnersInfo.get(`hoth-${i}`);
		createPage({
			path: `/gallery/hoth-${i}`,
			component: GalleryPageTemplate,
			context: {
				winnerInfo
			}
		});
	}
};
