var isOff = true;

function calcul() {
    if (isOff == true) {
        turn_off();
    } else {
        var a = window.document.getElementById("screen2").value;
        var b = eval(a);
        window.document.getElementById("screen").value = b;
        window.document.getElementById("screen2").value = b;
    }

}

function ajouter(car) {
    if (isOff == true) {
        turn_off();
    } else if (car == '=') {
        calcul();
    } else if (document.calculatrice.result1.value == '0') {
        if (car == '.' && window.document.calculatrice.result.value.indexOf('.') != -1) {
            return
        }
        if (car == '*' || car == '/') {
            alert('Le calcul ne peut commencer par * ou /');
        } else {
            if (car == '+' || car == '-') {
                window.document.calculatrice.result1.value = "";
                window.document.calculatrice.result1.value += car;
            } else {
                window.document.calculatrice.result1.value = "";
                window.document.calculatrice.result1.value += car == '.' ? '0.' : car;
                window.document.calculatrice.result.value = "";
                window.document.calculatrice.result.value += car == '.' ? '0.' : car;
            }
        }
    } else {
        if (car == '.' && window.document.calculatrice.result.value.indexOf('.') != -1) {
            return
        }
        if (car == '+' || car == '-' || car == '*' || car == '/') {
            const save = window.document.calculatrice.result1.value;
            if (save.charAt(save.length - 1) != '+' && save.charAt(save.length - 1) != '-' && save.charAt(save.length - 1) != '*' && save.charAt(save.length - 1) != '/') {
                let a = window.document.calculatrice.result1.value;
                let b = eval(a);
                window.document.calculatrice.result1.value = b;
                window.document.calculatrice.result.value = b;
                window.document.calculatrice.result1.value += car;
            } else {
                window.document.calculatrice.result1.value = window.document.calculatrice.result1.value.substring(0, window.document.calculatrice.result1.value.length-1);
                window.document.calculatrice.result1.value += car;
            }
        } else {
            const save2 = window.document.calculatrice.result1.value;
            window.document.calculatrice.result1.value += car;
            if (save2.charAt(save2.length-1) != '+' && save2.charAt(save2.length - 1) != '-' && save2.charAt(save2.length - 1) != '*' && save2.charAt(save2.length - 1) != '/') {
                window.document.calculatrice.result.value += car;
            } else {
                window.document.calculatrice.result.value = "";
                window.document.calculatrice.result.value += car;
            }

        }

    }
}

function turn_on() {
    document.calculatrice.result.value = '0';
    document.calculatrice.result1.value = '0';
    isOff = false;
}

function turn_off() {
    document.calculatrice.result.value = '';
    document.calculatrice.result1.value = '';
    isOff = true;
}

function toDelete() {
    if (window.document.calculatrice.result1.value.length == 1 && isOff == false) {
        window.document.calculatrice.result1.value = "0";
        window.document.calculatrice.result.value = "0";
    } else {
        var aDel = window.document.calculatrice.result1.value.substring(0, window.document.calculatrice.result1.value.length - 1);
        window.document.calculatrice.result1.value = aDel;
        window.document.calculatrice.result.value = aDel;
    }
}
