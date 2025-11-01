function saudacao() {
    alert("Adeus!");
} 

function executarComAtraso(mensagem, callback) {  
    setTimeout(() => {
        alert(`${mensagem}`);
        callback();
    }, 2000);
}

executarComAtraso("Olá usuário!", saudacao);