class Human {
    #name;
    #heightFeet;
    #heightInches;
    #weight;
    #diet;

    /**
     * @description Represents Human object
     * @param name
     * @param heightFeet
     * @param heightInches
     * @param weight
     * @param diet
     */
    constructor(name, heightFeet, heightInches, weight, diet) {
        this.#name = name;
        this.#heightFeet = heightFeet;
        this.#heightInches = heightInches;
        this.#weight = weight;
        this.#diet = diet;
    }

    /**
     * @returns {*} human name
     */
    getName() {
        return this.#name;
    }

    /**
     * @returns {*} feet part of human height
     */
    getHeightFeet() {
        return this.#heightFeet;
    }

    /**
     * @returns {*} inches part of human height
     */
    getHeightInches() {
        return this.#heightInches;
    }

    /**
     * @returns {*} human weight
     */
    getWeight() {
        return this.#weight;
    }

    /**
     * @returns {*} human diet
     */
    getDiet() {
        return this.#diet;
    }
}