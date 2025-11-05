
var nota, LUrgente=[], LNUrgente=[], i, Nnota, index;

// função para adicionar nota
function addNota() {
    // pegar texto da nota
    nota = document.getElementById("Nota").value

    // pegar radio selecionado
    var radioSelecionado = document.querySelector("input[name='urgencia']:checked");
    if(radioSelecionado.value === "NaoUrgente"){
        LNUrgente.push(nota)
        document.getElementById('listaNãoUrgente').innerHTML = '';
        for(i=0;i<LNUrgente.length; i++){
            document.getElementById('listaNãoUrgente').innerHTML += `<li>${LNUrgente[i]}</li>`;
        }
    } 

    if(radioSelecionado.value === "Urgente"){
        LUrgente.push(nota)
        document.getElementById('listaUrgente').innerHTML = '';
        for(i=0;i<LUrgente.length; i++){
            document.getElementById('listaUrgente').innerHTML += `<li>${LUrgente[i]}</li>`;
        }
    }
    
    // limpar input e desmarcar radio
    document.getElementById('Nota').value = '';
    radioSelecionado.checked = false;

    alert("Nota adicionada com sucesso!");
}

// função para excluir notas
function excluirNota() {
    // pegar numero da nota
    Nnota = parseInt(document.getElementById("NotaExcluir").value)

    var radioSelecionado = document.querySelector("input[name='urgenciaExcluir']:checked");
    if(!radioSelecionado) {
        alert("Por favor, selecione o tipo de nota a excluir (Urgente ou Não Urgente)");
        return;
    }

    if(radioSelecionado.value === "NaoUrgente"){
        index = Nnota - 1;
        LNUrgente.splice(index, 1);
        document.getElementById('listaNãoUrgente').innerHTML = '';
        for(i=0; i<LNUrgente.length; i++){
            document.getElementById('listaNãoUrgente').innerHTML += `<li>${LNUrgente[i]}</li>`;
        }
    }
    if(radioSelecionado.value === "Urgente"){
        index = Nnota - 1;
        LUrgente.splice(index, 1);
        document.getElementById('listaUrgente').innerHTML = '';
        for(i=0; i<LUrgente.length; i++){
            document.getElementById('listaUrgente').innerHTML += `<li>${LUrgente[i]}</li>`;
        }
    }
    alert("Nota excluída com sucesso!");
}

function excluirNotas(){
    LUrgente = []
    LNUrgente = []
    document.getElementById('listaUrgente').innerHTML = '';
    document.getElementById('listaNãoUrgente').innerHTML = '';
    alert("Todas as notas foram excluídas com sucesso!");
};