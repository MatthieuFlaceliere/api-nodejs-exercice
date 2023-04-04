// 1
const somme = (nb1,nb2) => {
    return nb1 + nb2;
}

// 2
const max = (array) => {
    let max = null;
    array.forEach(e => {
        if (e > max) {
            max = e; 
        }
    });
    return max;
}

// 3
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

// 4
const tri = (input) => {
    return input.sort()
}

console.log(tri(["AAA", "bbb", ]))

// 5
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
        "0" : "",
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
        return dizaines[strNumber[0]] + " " + chiffres[strNumber[1]]; 
    }
}

// 6