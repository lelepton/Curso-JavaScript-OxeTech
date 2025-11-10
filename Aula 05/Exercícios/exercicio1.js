function gerenciarTarefas(arrayTarefas, acao, tarefaParaAdicionar) {
    switch (acao) {
        case 'adicionarInicio':
            arrayTarefas.unshift(tarefaParaAdicionar);
            return arrayTarefas;
        case 'adicionarFim':
            arrayTarefas.push(tarefaParaAdicionar);
            return arrayTarefas;
        case 'removerInicio':
            arrayTarefas.shift();
            return arrayTarefas;
        case 'removerFim':
            arrayTarefas.pop();
            return arrayTarefas;
    }
}

const tarefas = ["Estudar", "Treinar", "Ler"];  
gerenciarTarefas(tarefas, "adicionarFim", "Dormir");  
console.log(tarefas);
// Resultado esperado: ["Estudar", "Treinar", "Ler", "Dormir"]