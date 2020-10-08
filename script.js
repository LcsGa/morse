function toUpper(text) {
    return text.charAt(0).toUpperCase() + text.substr(1);
}

function encodeText() {
    const initText = document.querySelector("#initial-text").value;
    const answerText = document.querySelector("#answer-text");

    const init = initText.toLowerCase();
    answerText.innerHTML = "";

    for (let i = 0; i < init.length; i++) {
        switch (init[i]) {
            case "a":
                answerText.innerHTML += ".- ";
                break;
            case "â":
                answerText.innerHTML += ".- ";
                break;
            case "b":
                answerText.innerHTML += "-... ";
                break;
            case "c":
                answerText.innerHTML += "-.-. ";
                break;
            case "d":
                answerText.innerHTML += "-.. ";
                break;
            case "e":
                answerText.innerHTML += ". ";
                break;
            case "ê":
                answerText.innerHTML += ". ";
                break;
            case "f":
                answerText.innerHTML += "..-. ";
                break;
            case "g":
                answerText.innerHTML += "--. ";
                break;
            case "h":
                answerText.innerHTML += ".... ";
                break;
            case "i":
                answerText.innerHTML += ".. ";
                break;
            case "î":
                answerText.innerHTML += ".. ";
                break;
            case "j":
                answerText.innerHTML += ".--- ";
                break;
            case "k":
                answerText.innerHTML += "-.- ";
                break;
            case "l":
                answerText.innerHTML += ".-.. ";
                break;
            case "m":
                answerText.innerHTML += "-- ";
                break;
            case "n":
                answerText.innerHTML += "-. ";
                break;
            case "o":
                answerText.innerHTML += "--- ";
                break;
            case "ô":
                answerText.innerHTML += "--- ";
                break;
            case "p":
                answerText.innerHTML += ".--. ";
                break;
            case "q":
                answerText.innerHTML += "--.- ";
                break;
            case "r":
                answerText.innerHTML += ".-. ";
                break;
            case "s":
                answerText.innerHTML += "... ";
                break;
            case "t":
                answerText.innerHTML += "- ";
                break;
            case "u":
                answerText.innerHTML += "..- ";
                break;
            case "ù":
                answerText.innerHTML += "..- ";
                break;
            case "û":
                answerText.innerHTML += "..- ";
                break;
            case "v":
                answerText.innerHTML += "...- ";
                break;
            case "w":
                answerText.innerHTML += ".-- ";
                break;
            case "x":
                answerText.innerHTML += "-..- ";
                break;
            case "y":
                answerText.innerHTML += "-.-- ";
                break;
            case "z":
                answerText.innerHTML += "--.. ";
                break;
            case "0":
                answerText.innerHTML += "----- ";
                break;
            case "1":
                answerText.innerHTML += ".---- ";
                break;
            case "2":
                answerText.innerHTML += "..--- ";
                break;
            case "3":
                answerText.innerHTML += "...-- ";
                break;
            case "4":
                answerText.innerHTML += "....- ";
                break;
            case "5":
                answerText.innerHTML += "..... ";
                break;
            case "6":
                answerText.innerHTML += "-.... ";
                break;
            case "7":
                answerText.innerHTML += "..--- ";
                break;
            case "8":
                answerText.innerHTML += "...-- ";
                break;
            case "9":
                answerText.innerHTML += "....- ";
                break;
            case " ":
                answerText.innerHTML += "/ ";
                break;
            case ".":
                answerText.innerHTML += ".-.-.- ";
                break;
            case ",":
                answerText.innerHTML += "--..-- ";
                break;
            case "?":
                answerText.innerHTML += "..--.. ";
                break;
            case "'":
                answerText.innerHTML += ".----. ";
                break;
            case "!":
                answerText.innerHTML += "-.-.-- ";
                break;
            case "/":
                answerText.innerHTML += "-..-. ";
                break;
            case "(":
                answerText.innerHTML += "-.--. ";
                break;
            case ")":
                answerText.innerHTML += "-.--.- ";
                break;
            case "&":
                answerText.innerHTML += ".-... ";
                break;
            case ":":
                answerText.innerHTML += "---... ";
                break;
            case ";":
                answerText.innerHTML += "-.-.-. ";
                break;
            case "=":
                answerText.innerHTML += "-...- ";
                break;
            case "+":
                answerText.innerHTML += ".-.-. ";
                break;
            case "-":
                answerText.innerHTML += "-....- ";
                break;
            case "_":
                answerText.innerHTML += "..--.- ";
                break;
            case '"':
                answerText.innerHTML += ".-..-. ";
                break;
            case "$":
                answerText.innerHTML += "...-..- ";
                break;
            case "@":
                answerText.innerHTML += ".--.-. ";
                break;
            case "ä":
                answerText.innerHTML += ".-.- ";
                break;
            case "à":
                answerText.innerHTML += ".--.- ";
                break;
            case "ç":
                answerText.innerHTML += "-.-.. ";
                break;
            case "è":
                answerText.innerHTML += ".-..- ";
                break;
            case "é":
                answerText.innerHTML += "..-.. ";
                break;
            case "ö":
                answerText.innerHTML += "---. ";
                break;
            default:
                answerText.innerHTML += `${init[i]} `;
                break;
        }
    }
}

function decodeText() {
    const initText = document.querySelector("#initial-text").value;
    const answerText = document.querySelector("#answer-text");

    const initSentence = initText.split(" ");
    answerText.innerHTML = "";

    for (let i = 0; i < initSentence.length; i++) {
        switch (initSentence[i]) {
            case ".-":
                answerText.innerHTML += "a";
                break;
            case "-...":
                answerText.innerHTML += "b";
                break;
            case "-.-.":
                answerText.innerHTML += "c";
                break;
            case "-..":
                answerText.innerHTML += "d";
                break;
            case ".":
                answerText.innerHTML += "e";
                break;
            case "..-.":
                answerText.innerHTML += "f";
                break;
            case "--.":
                answerText.innerHTML += "g";
                break;
            case "....":
                answerText.innerHTML += "h";
                break;
            case "..":
                answerText.innerHTML += "i";
                break;
            case ".---":
                answerText.innerHTML += "j";
                break;
            case "-.-":
                answerText.innerHTML += "k";
                break;
            case ".-..":
                answerText.innerHTML += "l";
                break;
            case "--":
                answerText.innerHTML += "m";
                break;
            case "-.":
                answerText.innerHTML += "n";
                break;
            case "---":
                answerText.innerHTML += "o";
                break;
            case ".--.":
                answerText.innerHTML += "p";
                break;
            case "--.-":
                answerText.innerHTML += "q";
                break;
            case ".-.":
                answerText.innerHTML += "r";
                break;
            case "...":
                answerText.innerHTML += "s";
                break;
            case "-":
                answerText.innerHTML += "t";
                break;
            case "..-":
                answerText.innerHTML += "u";
                break;
            case "...-":
                answerText.innerHTML += "v";
                break;
            case ".--":
                answerText.innerHTML += "w";
                break;
            case "-..-":
                answerText.innerHTML += "x";
                break;
            case "-.--":
                answerText.innerHTML += "y";
                break;
            case "--..":
                answerText.innerHTML += "z";
                break;
            case "-----":
                answerText.innerHTML += "0";
                break;
            case ".----":
                answerText.innerHTML += "1";
                break;
            case "..---":
                answerText.innerHTML += "2";
                break;
            case "...--":
                answerText.innerHTML += "3";
                break;
            case "....-":
                answerText.innerHTML += "4";
                break;
            case ".....":
                answerText.innerHTML += "5";
                break;
            case "-....":
                answerText.innerHTML += "6";
                break;
            case "--...":
                answerText.innerHTML += "7";
                break;
            case "---..":
                answerText.innerHTML += "8";
                break;
            case "----.":
                answerText.innerHTML += "9";
                break;
            case "/":
                answerText.innerHTML += " ";
                break;
            case ".-.-.-":
                answerText.innerHTML += ".";
                break;
            case "--..--":
                answerText.innerHTML += ",";
                break;
            case "..--..":
                answerText.innerHTML += "?";
                break;
            case ".----.":
                answerText.innerHTML += "'";
                break;
            case "-.-.--":
                answerText.innerHTML += "!";
                break;
            case "-..-.":
                answerText.innerHTML += "/";
                break;
            case "-.--.":
                answerText.innerHTML += "(";
                break;
            case "-.--.-":
                answerText.innerHTML += ")";
                break;
            case ".-...":
                answerText.innerHTML += "&";
                break;
            case "---...":
                answerText.innerHTML += ":";
                break;
            case "-.-.-.":
                answerText.innerHTML += ";";
                break;
            case "-...-":
                answerText.innerHTML += "=";
                break;
            case ".-.-.":
                answerText.innerHTML += "+";
                break;
            case "-....-":
                answerText.innerHTML += "-";
                break;
            case "..--.-":
                answerText.innerHTML += "_";
                break;
            case ".-..-.":
                answerText.innerHTML += '"';
                break;
            case "...-..-":
                answerText.innerHTML += "$";
                break;
            case ".--.-.":
                answerText.innerHTML += "@";
                break;
            case ".-.-":
                answerText.innerHTML += "ä";
                break;
            case ".--.-":
                answerText.innerHTML += "à";
                break;
            case "-.-..":
                answerText.innerHTML += "ç";
                break;
            case ".-..-":
                answerText.innerHTML += "è";
                break;
            case "..-..":
                answerText.innerHTML += "é";
                break;
            case "---.":
                answerText.innerHTML += "ö";
                break;
            default:
                answerText.innerHTML += `${initSentence[i]} `;
                break;
        }
    }

    answerText.innerHTML = toUpper(answerText.innerHTML);
}

function transformText() {
    let title = document.querySelector("h1");

    if (title.innerHTML == "Encodage Morse") {
        encodeText();
    } else {
        decodeText();
    }
}

function reset() {
    document.querySelector("#initial-text").value = "";
    document.querySelector("#answer-text").innerHTML = "";
}

function change() {
    let title = document.querySelector("h1");

    reset();

    if (title.innerHTML == "Encodage Morse") {
        title.innerHTML = "Décodage Morse";
    } else {
        title.innerHTML = "Encodage Morse";
    }
}

function copyText() {
    let copyText = document.querySelector("#answer-text").innerHTML;
    navigator.clipboard.writeText(copyText);
}

async function pasteText() {
    reset();
    const text = await navigator.clipboard.readText();
    document.querySelector("#initial-text").value = text;
    transformText();
}
