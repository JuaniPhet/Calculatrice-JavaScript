function calcul() {
    let a = document.getElementById("screen").value;
    let b = eval(a);
    document.getElementById("output").value = b;
}

function ajouter(caracteres) {
    window.document.calculatrice.result.value = 
    window.document.calculatrice.result.value + caracteres;
}