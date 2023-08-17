class Dinosaur {
    pigeonText = 'Pigeon';

    /**
     * @description Representation of Dinosaur object
     * @param species
     * @param weight
     * @param height
     * @param diet
     * @param period
     * @param fact
     */
    constructor(species, weight, height, diet, period, fact) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.period = period;
        this.fact = fact;
    }

    /**
     * @description Compares this dinosaur weight with human weight
     * @param humanWeight
     * @returns {string} Result of comparison
     */
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

    /**
     * @description Compares this dinosaur height with human height
     * @param humanHeightFeet
     * @param humanHeightInches
     * @returns {string} Result of comparison
     */
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

    /**
     * @description Compares this dinosaur diet with human diet
     * @param humanDiet
     * @returns {string} Result of comparison
     */
    compareDiet(humanDiet) {
        if(this.diet === humanDiet) {
            return `Both you and this dinosaur are ${ humanDiet }s`;
        }
        return `While you are a ${ humanDiet } this dinosaur is a ${ this.diet }`;
    }

    /**
     * @description Gathers all facts including comparison facts
     * @returns {*[]} All gathered facts
     */
    getFacts(humanData) {
        let facts = [];
        facts[0] = `This dinosaur's height is ${ this.height } feet`;
        facts[1] = `This dinosaur weighs ${ this.weight } pounds`;
        facts[2] = `This dinosaur is a ${ this.diet }`;
        facts[3] = `This dinosaur lived in ${ this.period } period`;
        facts[4] = this.fact;
        facts[5] = this.compareHeight(humanData.getHeightFeet(), humanData.getHeightInches());
        facts[6] = this.compareWeight(humanData.getWeight());
        facts[7] = this.compareDiet(humanData.getDiet());

        return facts;
    }

    /**
     * @description Randomly choose a fact
     * @param humanData
     * @returns {*} Randomly chosen fact
     */
    getRandomFact(humanData) {
        let facts = this.getFacts(humanData);
        const randomIndex = Math.floor(Math.random() * facts.length);
        return facts[randomIndex];
    }

    /**
     * @description Path of Species image
     * @returns {string} Path of Species image
     */
    getPicturePath() {
        return `../images/${this.species}.jpg`;
    }

    /**
     * @description Computes data to be displayed for this dinosaur
     * @param humanData
     * @returns {DinosaurDisplayData}
     */
    getDisplayData(humanData) {
        const picturePath = this.getPicturePath();
        let dinoFact = this.fact;
        if(this.species !== this.pigeonText) {
            dinoFact = this.getRandomFact(humanData);
        }

        return new DinosaurDisplayData(this.species, picturePath, dinoFact);
    }
}