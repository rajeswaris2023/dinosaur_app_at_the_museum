class DinosaurDisplayData {
    #species;
    #picturePath;
    #fact;

    /**
     * @description Represents data that would be displayed for each dinosaur
     * @param species
     * @param picturePath
     * @param fact
     * @constructor
     */
    constructor(species, picturePath, fact) {
        this.#species = species;
        this.#picturePath = picturePath;
        this.#fact = fact;
    }

    /**
     * @returns {*} this Dinosaur species
     */
    getSpecies() {
        return this.#species;
    }

    /**
     * @returns {*} this Dinosaur picture path
     */
    getPicturePath() {
        return this.#picturePath;
    }

    /**
     * @returns {*} this Dinosaur fact
     */
    getFact() {
        return this.#fact;
    }
}