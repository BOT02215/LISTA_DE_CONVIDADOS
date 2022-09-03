var lista = [];

function enviar() {
    var nome = document.getElementById("convidado").value;
    lista.push(nome);
    document.getElementById("primeira_lista").innerHTML = lista;
}

function mostrar() {
    var a = lista.join("<br>");
    document.getElementById("segunda_lista").innerHTML = a;
}

function organizar() {
    lista.sort();
    var b = lista.join("<br>");
    document.getElementById("terceira_lista").innerHTML = b;
}

function procurar() {
    var achar = document.getElementById("pesquisa").value;
    var numero = 0;
    for (var j = 0; j < lista.length; j++) {
        if (achar == lista[j]) {
            numero++
        }
    }
    document.getElementById("nome_convidado").innerHTML = "Nome encontrado " + numero + " vez(es)"
}

