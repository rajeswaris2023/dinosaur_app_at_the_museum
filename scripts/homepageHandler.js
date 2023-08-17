import data from '../dinosaurs.json' assert {type: 'json'};
function getDinosaurData() {
    return data.dinosaurs;
}
function getDinosaurFacts(dinosaurData, humanData) {
    let dinosaurFacts = [];
    for(let index = 0; index < dinosaurData.length; index++) {
        let dinosaur = new Dinosaur(dinosaurData[index].species, dinosaurData[index].weight, dinosaurData[index].height,
            dinosaurData[index].diet, dinosaurData[index].when, dinosaurData[index].fact);
        dinosaurFacts[index] = dinosaur.getDisplayData(humanData);
    }
    return dinosaurFacts;
}

function validate() {
    let inputs = document.getElementsByTagName('input');
    for(let index = 0; index < inputs.length; index++) {
        if(inputs[index].checkValidity() === false) {
            return false;
        }
    }
    return true;
}

function removeContainers() {
    let footerElement = document.getElementById('footer-container');
    footerElement.remove();
    let parentContainer = document.getElementById('parent-container');
    parentContainer.remove();
}

function getInputs() {
    const name = document.getElementById('name').value;
    const heightFeet = document.getElementById('feet').value;
    const heightInches = document.getElementById('inches').value;
    const weight = document.getElementById('weight').value;
    const diet = document.getElementById('diet').value;

    return new Human(name, heightFeet, heightInches, weight, diet);
}

function getHumanPicturePath() {
    return '../images/Human.jpg';
}
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

