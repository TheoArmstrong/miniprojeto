
var nota, LUrgente = [], LNUrgente = [], Nnota, index;
var colorClasses = ['azul', 'verde', 'roxo'];

// coloca a lista na tela
function renderList(listArray, containerId) {
    var container = document.getElementById(containerId);
    // limpa container
    container.innerHTML = '';
    for (var j = 0; j < listArray.length; j++) {
        var li = document.createElement('li');
        var inner = document.createElement('div'); 
        inner.className = colorClasses[j % colorClasses.length];
        inner.textContent = listArray[j];
        li.appendChild(inner);
        container.appendChild(li);
    }
}

// função para adicionar nota
function addNota() {
    // pegar texto da nota
    nota = document.getElementById("Nota").value.trim();

    // pegar radio selecionado
    var radioSelecionado = document.querySelector("input[name='urgencia']:checked");

    if (radioSelecionado.value === "NaoUrgente") {
        LNUrgente.push(nota);
        renderList(LNUrgente, 'listaNãoUrgente');
    } else if (radioSelecionado.value === "Urgente") {
        LUrgente.push(nota);
        renderList(LUrgente, 'listaUrgente');
    }

    // limpar input e desmarcar radio
    document.getElementById('Nota').value = '';
    radioSelecionado.checked = false;

    alert("Nota adicionada com sucesso!");
}

// função para excluir notas
function excluirNota() {
    // pegar numero da nota
    Nnota = parseInt(document.getElementById("NotaExcluir").value);

    var radioSelecionado = document.querySelector("input[name='urgenciaExcluir']:checked");

    if (radioSelecionado.value === "NaoUrgente") {
        index = Nnota - 1;
        LNUrgente.splice(index, 1);
        renderList(LNUrgente, 'listaNãoUrgente');
    } else if (radioSelecionado.value === "Urgente") {
        if (Nnota < 1 || Nnota > LUrgente.length) {
            alert("Número de nota inválido! Por favor, insira um número entre 1 e " + LUrgente.length);
            return;
        }
        index = Nnota - 1;
        LUrgente.splice(index, 1);
        renderList(LUrgente, 'listaUrgente');
    }
    alert("Nota excluída com sucesso!");
}

// função para excluir todas as notas
function excluirNotas() {
    LUrgente = [];
    LNUrgente = [];
    renderList(LUrgente, 'listaUrgente');
    renderList(LNUrgente, 'listaNãoUrgente');
    alert("Todas as notas foram excluídas com sucesso!");
};