function encodeText() {
    const initText = document.querySelector("textarea").value;
    const answerText = document.querySelector("p");

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
            case "ch":
                answerText.innerHTML += "---- ";
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
                return;
        }
    }

    console.log(initText.length);
}

function reset() {
    document.querySelector("textarea").value = "";
    document.querySelector("p").innerHTML = "";
}
