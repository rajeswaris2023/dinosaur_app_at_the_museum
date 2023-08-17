import data from '../dinosaurs.json' assert {type: 'json'};

/**
 * @description Fetches dinosaur data from imported json file
 * @returns {any[]} dinosaur data objects
 */
function getDinosaurData() {
    return data.dinosaurs;
}

/**
 * @description Creates dinosaur object and fetches display data for each dinosaur
 * @param {any[]} dinosaurData
 * @param {Human} humanData
 * @returns {Dinosaur[]}
 */
function getDinosaurFacts(dinosaurData, humanData) {
    let dinosaurFacts = [];
    for(let index = 0; index < dinosaurData.length; index++) {
        let dinosaur = new Dinosaur(dinosaurData[index].species, dinosaurData[index].weight, dinosaurData[index].height,
            dinosaurData[index].diet, dinosaurData[index].when, dinosaurData[index].fact);
        dinosaurFacts[index] = dinosaur.getDisplayData(humanData);
    }
    return dinosaurFacts;
}

/**
 * @description Checks validatity of input elements
 * @returns {boolean} Validity
 */
function validate() {
    let inputs = document.getElementsByTagName('input');
    for(let index = 0; index < inputs.length; index++) {
        if(inputs[index].checkValidity() === false) {
            return false;
        }
    }
    return true;
}

/**
 * @description Removes input form container and footer
 */
function removeContainers() {
    let footerElement = document.getElementById('footer-container');
    footerElement.remove();
    let parentContainer = document.getElementById('parent-container');
    parentContainer.remove();
}

/**
 * @description Gathers inputs from form
 * @returns {Human} Returns a human object populated with form inputs
 */
function getInputs() {
    const name = document.getElementById('name').value;
    const heightFeet = document.getElementById('feet').value;
    const heightInches = document.getElementById('inches').value;
    const weight = document.getElementById('weight').value;
    const diet = document.getElementById('diet').value;

    return new Human(name, heightFeet, heightInches, weight, diet);
}

/**
 * @description Path of human image
 * @returns {string} Returns path of human image
 */
function getHumanPicturePath() {
    return '../images/Human.jpg';
}

/**
 * @description Compare button event handler
 * @param event
 */
function handleCompare(event) {
    if(!validate()) {
        return;
    }
    let humanData = getInputs();
    const dinosaurFacts = getDinosaurFacts(getDinosaurData(), humanData);

    removeContainers();
    let tiles = createTilesPage(dinosaurFacts, humanData.getName(), getHumanPicturePath());
    document.body.appendChild(tiles);
    event.stopPropagation();
}

let compareButton = document.getElementById('compare-button');
compareButton.addEventListener(
    'click',
    handleCompare,
    {'capture': false}
);

