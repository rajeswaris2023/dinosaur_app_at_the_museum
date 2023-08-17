/**
 * @description Creates new div element
 * @param className
 * @returns {HTMLDivElement}
 */
function createDivElement(className) {
    let divElement = document.createElement('div');
    divElement.className = className;
    return divElement;
}

/**
 * @description Creates new image element
 * @param id
 * @param sourcePath
 * @param altText
 * @returns {HTMLImageElement}
 */
function createImageElement(id, sourcePath, altText) {
    let image = document.createElement('img');
    image.id = id;
    image.src = sourcePath;
    image.alt = altText;
    return image;
}

/**
 * @description Creates new span element
 * @param className
 * @param innerHTML
 * @returns {HTMLSpanElement}
 */
function createSpanElement(className, innerHTML) {
    let spanElement = document.createElement('span');
    spanElement.className = className;
    spanElement.innerHTML = innerHTML;
    return spanElement;
}

/**
 * @description Creates div that wraps species name
 * @param species
 * @returns {HTMLDivElement}
 */
function createSpeciesDiv(species) {
    let divElement = createDivElement('dino-name-div');
    let spanElement = createSpanElement('dino-name', species);
    divElement.appendChild(spanElement);

    return divElement;
}

/**
 * @description Creates div that wraps dinosaur image
 * @param picturePath
 * @returns {HTMLDivElement}
 */
function createImageDiv(picturePath) {
    let divElement = createDivElement('dino-pic-div');
    let imageElement = createImageElement('dino-img', picturePath, 'Image did not load');
    divElement.appendChild(imageElement);

    return divElement;
}

/**
 * @description Creates anchor element for returning back to home page
 * @param href
 * @returns {HTMLAnchorElement}
 */
function createBackLink(href) {
    let backLink = document.createElement('a');
    backLink.href = href;
    backLink.id = 'back-link';
    backLink.innerHTML = 'Back';
    return backLink;
}

/**
 * @description Home page url
 * @returns {string}
 */
function getHomePageUrl() {
    return '../HomePage.html';
}

/**
 * @description Creates div that wraps dinosaur fact
 * @param dinoFact
 * @returns {HTMLDivElement}
 */
function createFactDiv(dinoFact) {
    let divElement = createDivElement('dino-fact-div');
    let spanElement = createSpanElement('dino-fact', dinoFact);
    divElement.appendChild(spanElement);

    return divElement;
}

/**
 * @description Creates div that wraps species name, image and fact
 * @param dinosaurFact
 * @returns {HTMLDivElement}
 */
function createChildTileDiv(dinosaurFact) {
    let tileDiv = createDivElement('tile-div');

    const speciesDiv = createSpeciesDiv(dinosaurFact.getSpecies());
    tileDiv.appendChild(speciesDiv);
    
    const imageDiv = createImageDiv(dinosaurFact.getPicturePath());
    tileDiv.appendChild(imageDiv);

    const factDiv = createFactDiv(dinosaurFact.getFact());
    tileDiv.appendChild(factDiv);

    return tileDiv;
}

/**
 * @description Creates tile div that wraps human name, image and back link
 * @param humanName
 * @param humanPicturePath
 * @returns {HTMLDivElement}
 */
function createHumanTileDiv(humanName, humanPicturePath) {
    let tileDiv = createDivElement('tile-div');

    const speciesDiv = createSpeciesDiv(humanName);
    tileDiv.appendChild(speciesDiv);

    let pictureDivElement = createDivElement('human-pic-div');
    let imageElement = createImageElement('human', humanPicturePath, 'Human Image did not load');
    pictureDivElement.appendChild(imageElement);
    tileDiv.appendChild(pictureDivElement);

    let linkDivElement = createDivElement('link-div');
    let backLink = createBackLink(getHomePageUrl());
    linkDivElement.appendChild(backLink);

    tileDiv.appendChild(linkDivElement);

    return tileDiv;
}

/**
 * @description Sets body width to 100%
 */
function setPageBodyStyle() {
    document.body.style.width = '100%';
}

/**
 * @description Creates all 9 tiles
 * @param dinosaurFacts
 * @param humanName
 * @param humanPicturePath
 * @returns {HTMLDivElement}
 */
function createTilesPage(dinosaurFacts, humanName, humanPicturePath) {
    setPageBodyStyle();
    let tilesDiv = createDivElement('tiles');

    for(let index = 0; index < dinosaurFacts.length; index++) {
        if(index === 4) {
            const humanDiv = createHumanTileDiv(humanName, humanPicturePath);
            tilesDiv.appendChild(humanDiv);
        }
        const tileDiv = createChildTileDiv(dinosaurFacts[index]);
        tilesDiv.appendChild(tileDiv);
    }

    return tilesDiv;
}