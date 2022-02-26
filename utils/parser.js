import { cp } from 'fs';
import { readFile } from 'fs/promises';
import { Contributor } from '../models/contributor.js';
import { Skill } from '../models/skill.js';

export async function parser(path) {

    const [contribs, projects] = [[], []];

    return readFile(path, 'utf8').then(fileContent => {
        fileContent = fileContent.split('\n');
        const [ nContrib, nProjects ] = fileContent.shift().split(' ');
        
        for(let i = 0; i<nContrib; i++){
            const [ cName, nSkills ] = fileContent.shift().split(' ');
            const skills = []
            for(let j = 0; j<nSkills; j++){
                const [ sName, sLvl ] = fileContent.shift().split(' ');
                skills.push(new Skill(sName, sLvl));
            }
            contribs.push(new Contributor(cName, skills))
        }

        return contribs;
    })

}
