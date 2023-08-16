import data from '../dinosaurs.json' assert {type: 'json'};
function getDinosaurData() {
    return data.dinosaurs;
}
function getDinosaurFacts(dinosaurData, humanWeight, humanHeightFeet, humanHeightInches) {
    let dinosaurFacts = [];
    for(let index = 0; index < dinosaurData.length; index++) {
        let dinosaur = new Dinosaur(dinosaurData[index].species, dinosaurData[index].weight, dinosaurData[index].height,
            dinosaurData[index].diet, dinosaurData[index].period, dinosaurData[index].fact);
        dinosaurFacts[index] = dinosaur.getDisplayData(humanWeight, humanHeightFeet, humanHeightInches);
    }
    return dinosaurFacts;
}

function validate() {
    let inputs = document.getElementsByTagName("input");
    for(let index = 0; index < inputs.length; index++) {
        if(inputs[index].checkValidity() === false) {
            return false;
        }
    }
    return true;
}

function removeContainers() {
    let footerElement = document.getElementById("footer-container");
    footerElement.remove();
    let parentContainer = document.getElementById("parent-container");
    parentContainer.remove();
}

function getInputs() {
    const humanWeight = document.getElementById("weight").value;
    const humanHeightFeet = document.getElementById("feet").value;
    const humanHeightInches = document.getElementById("inches").value;

    return {
        weight: humanWeight,
        heightFeet: humanHeightFeet,
        heightInches: humanHeightInches
    };
}

function getHumanPicturePath() {
    return "../images/Human.jpg";
}
function handleCompare(event) {
    if(!validate()) {
        return;
    }
    let inputs = getInputs();
    const dinosaurFacts = getDinosaurFacts(getDinosaurData(), inputs.weight, inputs.heightFeet, inputs.heightInches);

    removeContainers();
    let tiles = createTilesPage(dinosaurFacts, getHumanPicturePath());
    document.body.appendChild(tiles);

    event.stopPropagation();
}

let compareButton = document.getElementById("compare-button");
compareButton.addEventListener(
    'click',
    handleCompare,
    {'capture': false}
);

