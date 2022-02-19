const path = require('path');
const GalleryPageTemplate = path.resolve('./src/components/GalleryPage/GalleryPageTemplate.js');

function getHothWinners(allHothWinners) {
	const hothWinners = new Map();
	const devposts = new Map();
	const allHothNames = new Map();
	const allGalleryLinks = new Map();
	for (const hoth of allHothWinners) {
		const winnersArray = [];
		for (const winner of hoth.parent.childYaml.winners) {
			const { category, description, image, link, title } = winner;
			const winnerCopy = { category, description, image, link, title };
			winnersArray.push(winnerCopy);
		}
		hothWinners.set(hoth.parent.name, winnersArray);
		devposts.set(hoth.parent.name, hoth.parent.childYaml.devpost);
		allHothNames.set(hoth.parent.name, hoth.parent.childYaml.name);
		allGalleryLinks.set(hoth.parent.name, `/gallery/${hoth.parent.name}`);
	}
	return { hothWinners, devposts, allHothNames, allGalleryLinks };
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
	const hothData = await graphql(`
	query HothDataQuery {
        allYaml(sort: {fields: name, order: DESC}) {
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
	const { hothWinners, devposts, allHothNames, allGalleryLinks } = getHothWinners(hothData.data.allYaml.nodes);
	for (const key of hothWinners.keys()) {
		const hothName = allHothNames.get(key);
		const winnerInfo = hothWinners.get(key);
		const devpostLink = devposts.get(key);
		const galleryLink = allGalleryLinks.get(key);
		const hothNames = Array.from(allHothNames.values());
		const galleryLinks = Array.from(allGalleryLinks.values());
		// This is an absurd number of props and there is probably a much
		// better way to do this that somebody can figure out at a later time
		// On the bright side it is now easier to change names and links
		createPage({
			path: `${galleryLink}`,
			component: GalleryPageTemplate,
			context: {
				winnerInfo,
				devpostLink,
				hothNames, // all HOTH names for GalleryMenu
				galleryLinks, // all links for GalleryMenu
				hothName // name of current HOTH for Winners
			}
		});
	}
};
