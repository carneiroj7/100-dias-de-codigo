document.getElementById("btnAlterarEstilo").addEventListener("click", function() {
    const caixadetexto = document.getElementById("caixadetexto");


    if (caixadetexto.classList.contains("alterado")) {
        caixadetexto.classList.remove("alterado");
    } else {
        caixadetexto.classList.add("alterado");
    }
});