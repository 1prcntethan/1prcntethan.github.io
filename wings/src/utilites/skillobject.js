import { skillDiff } from "./skilldifficulties.js";
import { skillTime } from "./skilltime.js";
import { skillTitle } from "./skilltitles.js";
import { skillImage } from "./skillImage.jsx";

export const skillObjects = new Map();


export class Skill {
    name;
    difficulty;
    years;
    skillImage;

    constructor(name) {
        this.name = name;
        this.difficulty = skillDiff.get(name);
        this.years = skillTime.get(name);
        this.skillImage = skillImage.get(name);
    }

    getName() {
        return this.name;
    }   
    getDifficulty() {
        return this.difficulty;
    }
    getYears() {
        return this.years;
    }
    getImage() {
        return this.skillImage;
    }



}


for (const [key, value] of skillTitle) {
    const skill = new Skill(value);
    skillObjects.set(key, skill);
}