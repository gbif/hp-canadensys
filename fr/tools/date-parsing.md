---
layout: compose
composition:
  - type: heroImage
  - type: pageMarkdown
  - type: blank
    inlineData: 
      markdownContent: |
        <iframe style="
        width: 80%;
        max-height: 80vh;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid #00000011;
        background-color: white;
        border-radius: 6px;
        box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
        color: #4a4a4a;
        display: block;
        padding: 1.25rem;"
        seamless frameborder="150" src="https://data.canadensys.net/tools/dates" height = '790' width="1370" scrolling='yes' ></iframe> 
lang-ref: date-parsing
lang: fr
title: Conversion de dates
background: http://media.canadensys.net/cmmf/5897a.jpg
imageLicense: |
  <em>Plasmodium</em> Marchiafava & Celli, 1885 collecté au Canada par McNeil, Raymond, [Cercle des Mycologues de Montréal](https://www.gbif.org/occurrence/1135067379)
#description:
height: 70vh
#toc: true
---

Utilisez cet outil pour convertir des dates en leurs différentes composantes. Entrez ou collez les dates sur des lignes séparées. Les dates peuvent être précédées d''un identifiant optionnel qui doit être séparé de la valeur par un tab ou une barre verticale |.

**Example d'entrée** 
Jun 13, 2008 
15 Jan 2011 
2009 IV 02 
2 VII 1986 
 
1 | 1999/02/24 
2 | 02/17/1921

<div id="app-container"></div>
 
 <script>
// Get a reference to the app container
const appContainer = document.getElementById('app-container');

// API endpoint URL
const apiUrl = 'https://data.canadensys.net/tools/dates.json';

// Fetch data from the API
fetch(apiUrl)
  .then(data => {
    return data.json();
  })
  .then(results => {
    console.log(results.iso8601)
  });
  



  // .then(response => response.json())
  // .then(data => {
    // Process the data and update the app container's content
    // appContainer.innerHTML = `<h2>${data.title}</h2><p>${data.description}</p>`;
  // })
  // .catch(error => {
    // console.error('Error fetching data:', error);
  // });
</script>
