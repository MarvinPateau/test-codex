const axios = require('axios');

async function getPages() {
  try {
    const response = await axios.get('https://www.pesonolight.fr/wp-json/wp/v2/pages');
    const pages = response.data;

    console.log('--- Liste des pages WordPress ---');
    pages.forEach(page => {
      console.log(`ID: ${page.id} | Titre: ${page.title.rendered}`);
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des pages :', error.message);
  }
}

getPages();
