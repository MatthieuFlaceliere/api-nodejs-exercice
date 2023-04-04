// 1
/**
 * 
 * @param {*} nb1 
 * @param {*} nb2 
 * @returns Retourne la somme de nb1 et nb2
 */
const somme = (nb1,nb2) => {
    return nb1 + nb2;
}

console.log("\nQ.1")
console.log("Function : somme()")
console.log("Input : 1, 2")
console.log("Output : ", somme(1,2))

// 2
/**
 * 
 * @param {*} array Tableau d'entier
 * @returns Retourne le plus grand élément du tableau
 */
const max = (array) => {
    let max = null;
    array.forEach(e => {
        if (e > max) {
            max = e; 
        }
    });
    return max;
}

console.log("\nQ.2")
console.log("Function : max()")
console.log("Input : [1, 2, 3, 4, 5]")
console.log("Output : ", max([1, 2, 3, 4, 5]))

// Corection 2
const maxArray = (array) => {
    // ... spread operator
    return Math.max(...array)
}

// 3
/**
 * 
 * @param {*} input Chaine de caractère
 * @returns Retourne la chaine de caractère sans les voyelles
 */
const deleteVoyelle = (input) => {
    const voyelles = ["a","e","i","o","u","y"];
    output = input;
    for (let i = 0; i <= input.length; i++) {
        const char = input[i];
        if (voyelles.includes(char)){
            output = output.replace(char,'');
        }      
    }
    return output;
}

console.log("\nQ.3")
console.log("Function : deleteVoyelle()")
console.log("Input : 'Bonjour'")
console.log("Output : ", deleteVoyelle("Bonjour"))

// Corection 3
// Uilisation de la regex
const deleteVoyelleRegex = (input) => {
    return input.replace(/[aeiouy]/gi, '')
}

// 4
/**
 * 
 * @param {*} input Tableau de chaine de caractère
 * @returns Retourne le tableau trié par ordre alphabétique
 */
const tri = (input) => {
    return input.sort((a,b) => a.localeCompare(b))
}

console.log("\nQ.4")
console.log("Function : tri()")
console.log("Input : ['bonjour', 'Arbre', 'Salut']")
console.log("Output : ", tri(["bonjour", "Arbre", "Salut"]))

// 5
/**
 * 
 * @param {*} number Entier compris entre 0 et 99
 * @returns Retourne la chaine de caractère correspondant au nombre
 */
const numberToText = (number) => {
    const strNumber = number.toString()
    const dizaines = {
        "1" : "dix",
        "2" : "vingt",
        "3" : "trente",
        "4" : "quarante",
        "5" : "cinquante",
        "6" : "soixante",
        "7" : "soixante-",
        "8" : "quatre-vingts",
        "9" : "quatre-vingt-dix",
    }
    const chiffres = {
        "0" : "zero",
        "1" : "un",
        "2" : "deux",
        "3" : "trois",
        "4" : "quatre",
        "5" : "cinq",
        "6" : "six",
        "7" : "sept",
        "8" : "huit",
        "9" : "neuf"
    }

    const special ={
        "0" : "dix",
        "1": "onze",
        "2": "douze",
        "3": "treize",
        "4": "quatorze",
        "5": "quinze",
        "6": "seize",
        "7": "dix-sept",
        "8": "dix-huit",
        "9": "dix-neuf",
    }

    if (strNumber.length === 1) {
        return chiffres[strNumber];
    }else{
        if (strNumber[0] === "7") {
            return dizaines[strNumber[0]] + special[strNumber[1]]; 
        }
        if (strNumber[0] === "1") {
            return special[strNumber[1]];
        }
        if (strNumber[1] === "0") {
            return dizaines[strNumber[0]];
        }
        return dizaines[strNumber[0]] + " " + chiffres[strNumber[1]]; 
    }
}

console.log("\nQ.5")
console.log("Function : numberToText()")
console.log("Input : 12")
console.log("Output : ", numberToText(12))

// 6
/**
 * 
 * @param {*} tab Tableau d'objet
 * @param {*} prop Propriété à rechercher
 * @returns Retourne un tableau contenant les valeurs de la propriété recherchée
 */
const findValue = (tab, prop) => {
    let output = [];
    tab.forEach(obj => {
        if (obj[prop]) {
            output.push(obj[prop])
        }
    });
    return output
}

console.log("\nQ.6")
console.log("Function : findValue()")
console.log("Input : [{name : 'Dupont'}, {name : 'Jean', age : 10}], 'name'")
console.log("Output : ", findValue([{name : 'Dupont'}, {name : 'Jean', age : 10}], 'name'))

const triDecroissant = (tab) =>{
    return tab.sort((a,b) => b - a)
}

console.log("\nQ.7")
console.log("Function : triDecroissant()")
console.log("Input : [1, 2, 3, 4, 5]")
console.log("Output : ", triDecroissant([1, 2, 3, 4, 5]))