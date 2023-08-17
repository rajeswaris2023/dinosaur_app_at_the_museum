class Human {
    #name;
    #heightFeet;
    #heightInches;
    #weight;
    #diet;
    constructor(name, heightFeet, heightInches, weight, diet) {
        this.#name = name;
        this.#heightFeet = heightFeet;
        this.#heightInches = heightInches;
        this.#weight = weight;
        this.#diet = diet;
    }

    getName() {
        return this.#name;
    }

    getHeightFeet() {
        return this.#heightFeet;
    }

    getHeightInches() {
        return this.#heightInches;
    }

    getWeight() {
        return this.#weight;
    }

    getDiet() {
        return this.#diet;
    }
}