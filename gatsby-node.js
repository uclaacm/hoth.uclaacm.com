const path = require('path');
const GalleryPageTemplate = path.resolve('./src/components/GalleryPage/GalleryPageTemplate.js');

function getHothWinners(allHothWinners) {
	const hothWinners = new Map();
	const devposts = new Map();
	for (const hoth of allHothWinners) {
		const winnersArray = [];
		for (const winner of hoth.parent.childYaml.winners) {
			const { category, description, image, link, title } = winner;
			const winnerMap = { category, description, image, link, title };
			winnersArray.push(winnerMap);
		}
		hothWinners.set(hoth.parent.name, winnersArray);
		devposts.set(hoth.parent.name, hoth.parent.childYaml.devpost);
	}
	return { hothWinners, devposts };
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
	const hothData = await graphql(`
	query HothDataQuery {
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
                      image
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
	const { hothWinners, devposts } = getHothWinners(hothData.data.allYaml.nodes);
	for (let i = 1; i <= hothWinners.size; i++) {
		const hothName = `hoth-${i}`;
		const winnerInfo = hothWinners.get(hothName);
		const devpostLink = devposts.get(hothName);
		const hothNum = i;
		createPage({
			path: `/gallery/${hothName}`,
			component: GalleryPageTemplate,
			context: {
				winnerInfo,
				devpostLink,
				hothNum
			}
		});
	}
};
