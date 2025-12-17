//Desarrolla una función que busque en un array de objetos representando mutantes 
// si existe alguno con un poder específico y retorne un mensaje indicando 
// si fue encontrado o no.

//Considera el caso de múltiples mutantes con el mismo poder.

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  
    const foundMutants = mutants.filter(mutant => mutant.power === power);

    if (foundMutants.length > 0) {
        const names = foundMutants.map(mutant => mutant.name).join(', ');
        return `Mutantes encontrados con el poder de ${power}: ${names}.`;
    } else {
        return `No se encontraron mutantes con el poder de ${power}.`;
    }

}
console.log('---');
const result1 = findMutantByPower(mutants, 'telepathy');
console.log(result1); // Mutantes encontrados con el poder de telepathy: Professor X. 

console.log('---');
const result2 = findMutantByPower(mutants, 'invisibility');
console.log(result2); // No se encontraron mutantes con el poder de invisibility.