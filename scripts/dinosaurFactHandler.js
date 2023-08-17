class Dinosaur {
    pigeonText = 'Pigeon';
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
            return `You are approximately ${ ratio } times heavier than this dinosaur`;
        }
        else {
            const ratio = Math.floor(this.weight / humanWeight);
            return `This dinosaur is approximately ${ ratio } times heavier than you`;
        }
    }
    compareHeight(humanHeightFeet, humanHeightInches) {
        const humanHeightInInches = (humanHeightFeet * 12) + humanHeightInches;
        const dinosaurHeightInInches = this.height * 12;
        if(humanHeightInInches > dinosaurHeightInInches) {
            const heightRatio = Math.round(humanHeightInInches / dinosaurHeightInInches);
            return `You are approximately ${ heightRatio } times taller than this dinosaur`;
        }
        else {
            const heightRatio = Math.floor(dinosaurHeightInInches / humanHeightInInches);
            return `This dinosaur is approximately ${ heightRatio } times taller than you`;
        }
    }

    compareDiet(humanDiet) {
        if(this.diet === humanDiet) {
            return `You as well as this dinosaur are ${ humanDiet }`;
        }
        return `While you are a ${ humanDiet } this dinosaur is a ${ this.diet }`;
    }
    
    getRandomFact(humanData) {
        let facts = [];
        facts[0] = `This dinosaur's height is ${ this.height } feet`;
        facts[1] = `This dinosaur weighs ${ this.weight } pounds`;
        facts[2] = `This dinosaur is a ${ this.diet }`;
        facts[3] = `This dinosaur lived in ${ this.period } period`;
        facts[4] = this.fact;
        facts[5] = this.compareHeight(humanData.getHeightFeet(), humanData.getHeightInches());
        facts[6] = this.compareWeight(humanData.getWeight());
        facts[7] = this.compareDiet(humanData.getDiet());

        const randomIndex = Math.floor(Math.random() * facts.length);
        return facts[randomIndex];
    }
    
    getDisplayData(humanData) {
        const picturePath = `../images/${this.species}.jpg`;
        let dinoFact = this.fact;
        if(this.species !== this.pigeonText) {
            dinoFact = this.getRandomFact(humanData);
        }

        return {
            species: this.species,
            picturePath: picturePath,
            fact: dinoFact
        };
    }
}