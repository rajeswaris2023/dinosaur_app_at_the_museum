class Dinosaur {
    constructor(species, weight, height, diet, period, fact) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.period = period;
        this.fact = fact;
    }

    compareWeight(humanWeight) {
        if(humanWeight > this.weight) {
            const ratio = Math.round(humanWeight / this.weight);
            return "You are approximately " + ratio + " times heavier than this dinosaur";
        }
        else {
            const ratio = Math.floor(this.weight / humanWeight);
            return "This dinosaur is approximately " + ratio + " times heavier than you";
        }
    }
    compareHeight(humanHeightFeet, humanHeightInches) {
        const humanHeightInInches = (humanHeightFeet * 12) + humanHeightInches;
        const dinosaurHeightInInches = this.height * 12;
        if(humanHeightInInches > dinosaurHeightInInches) {
            const heightRatio = Math.round(humanHeightInInches / dinosaurHeightInInches);
            return "You are approximately " + heightRatio + " times taller than this dinosaur";
        }
        else {
            const heightRatio = Math.floor(dinosaurHeightInInches / humanHeightInInches);
            return "This dinosaur is approximately " + heightRatio + " times taller than you";
        }
    }
    
    getRandomFact(humanWeight, humanHeightFeet, humanHeightInches) {
        let facts = [];
        facts[0] = "This dinosaur weighs " + this.weight + " pounds";
        facts[1] = "This dinosaur's height is " + this.height + " feet";
        facts[2] = "This dinosaur is a " + this.diet;
        facts[3] = "This dinosaur lived in " + this.period + " period";
        facts[4] = this.fact;
        facts[5] = this.compareWeight(humanWeight);
        facts[6] = this.compareHeight(humanHeightFeet, humanHeightInches);

        const randomIndex = Math.floor(Math.random() * facts.length);
        return facts[randomIndex];
    }
    
    getDisplayData(humanWeight, humanHeightFeet, humanHeightInches) {
        const picturePath = "../images/" + this.species + ".jpg";
        let dinoFact = this.fact;
        if(this.species !== "Pigeon") {
            dinoFact = this.getRandomFact(humanWeight, humanHeightFeet, humanHeightInches);
        }

        return {
            species: this.species,
            picturePath: picturePath,
            fact: dinoFact
        };
    }
}