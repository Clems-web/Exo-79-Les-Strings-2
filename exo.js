let pomme = "Elle est belle ma pomme !";

console.log(pomme.lastIndexOf('m'));

let pIndexPomme = document.getElementById("index-pomme");
pIndexPomme.innerHTML = pomme.indexOf("pomme");

let pLastIndex = document.getElementById("last-index-m");
pLastIndex.innerHTML = pomme.lastIndexOf("m");

if (pomme.startsWith("Elle")) {
    console.log(pomme + " Commence par 'Elle'");
}

if (pomme.endsWith("!")) {
    console.log(pomme + " se termine par '!'");
}

let pPomme = document.getElementById("pomme");
pPomme.innerHTML = pomme.substring(18, 23);

let pOneLine = document.getElementById("one-line");

for (x = 0; x < pomme.length; x++) {
    pOneLine.innerHTML += pomme[x] + "<br/>";
}