/**Afficher Projet**/

const apiWorks = "http://localhost:5678/api/works"

const sectionGallery = document.querySelector(".gallery")

fetch(apiWorks)
    .then( data => data.json()) /* récupère les données brut */
    .then( jsonlistPhotos => {
        console.log(jsonlistPhotos); /* affiche les éléments dans la console */
        afficherPhotos(jsonlistPhotos, sectionGallery)
    })

function afficherPhotos(array,container) {
    for (let i = 0; i < array.length; i++) { /* boucle for pour itéré chaque élément */
        const figurePhotos = document.createElement('figure')/* création élément figure */
        
        const imgPhotos = document.createElement('img') /* création de 'l'image */
        imgPhotos.src = array[i].imageUrl/* récuperer via l'url  */
        figurePhotos.appendChild(imgPhotos) /* rattache l'iamge à la figure */
        
        const figureDesc = document.createElement('figureDesc')/* création élément figureDesc pour le texte */
        figureDesc.innerHTML = array[i].title /* ajout texte dans figureDesc */
        figurePhotos.appendChild(figureDesc)/* ajout figureDesc sous l'image dans figure */

        container.appendChild(figurePhotos) /* on ajoute tout dans le conteneur */
    }
}


/** Afficher filter-bar**/

const apiCategories = "http://localhost:5678/api/categories"

const sectionFilterBar = document.querySelector(".filter-bar")

fetch(apiCategories)
    .then( data => data.json()) /* récupère les données brut */
    .then( jsonlistCategories => {
        console.log(jsonlistCategories); /* affiche les éléments dans la console */
        afficherFiltre(jsonlistCategories, sectionFilterBar)
    })

function afficherFiltre(categories, container) {
    for (let i = 0; i < categories.length; i++) {
        
        const buttonAll = document.createElement("tous")
        buttonAll.innerText = "Tous"
        container.appendChild(buttonAll)

        const filterButton = document.createElement('button') /* création des boutons */
        filterButton.innerText = categories[i].name, /* récupere les infos via le name */
        
        container.appendChild(filterButton) /* ajoute les boutons dans le container */

        
    }
    }