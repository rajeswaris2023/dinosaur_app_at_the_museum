function createDivElement(className) {
    let divElement = document.createElement('div');
    divElement.className = className;
    return divElement;
}

function createImageElement(id, sourcePath, altText) {
    let image = document.createElement('img');
    image.id = id;
    image.src = sourcePath;
    image.alt = altText;
    return image;
}

function createSpanElement(className, innerHTML) {
    let spanElement = document.createElement('span');
    spanElement.className = className;
    spanElement.innerHTML = innerHTML;
    return spanElement;
}
function createSpeciesDiv(species) {
    let divElement = createDivElement('dino-name-div');
    let spanElement = createSpanElement('dino-name', species);
    divElement.appendChild(spanElement);

    return divElement;
}

function createImageDiv(picturePath) {
    let divElement = createDivElement('dino-pic-div');
    let imageElement = createImageElement('dino-img', picturePath, 'Image did not load');
    divElement.appendChild(imageElement);

    return divElement;
}

function createBackLink(href) {
    let backLink = document.createElement('a');
    backLink.href = href;
    backLink.id = 'back-link';
    backLink.innerHTML = 'Back';
    return backLink;
}

function getHomePageUrl() {
    return '../HomePage.html';
}

function createFactDiv(dinoFact) {
    let divElement = createDivElement('dino-fact-div');
    let spanElement = createSpanElement('dino-fact', dinoFact);
    divElement.appendChild(spanElement);

    return divElement;
}

function createChildTileDiv(dinosaurFact) {
    let tileDiv = createDivElement('tile-div');

    const speciesDiv = createSpeciesDiv(dinosaurFact.species);
    tileDiv.appendChild(speciesDiv);
    
    const imageDiv = createImageDiv(dinosaurFact.picturePath);
    tileDiv.appendChild(imageDiv);

    const factDiv = createFactDiv(dinosaurFact.fact);
    tileDiv.appendChild(factDiv);

    return tileDiv;
}

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

function setPageBodyStyle() {
    document.body.style.width = '100%';
}
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