// ID válido do relatório
const ID_VALIDO = "21e88145-4469-4842-9455-1f0ff2eceb78";

// Dados do relatório válido
const dadosRelatorio = {
    identificacao: "21e88145-4469-4842-9455-1f0ff2eceb78",
    descricao: "OXY EDU 2.0006.01 - HISTÓRICO ESCOLAR GRADUAÇÃO PDF",
    dataCriacao: "07/08/2025 17:49:04"
};

function buscarRelatorio() {
    const inputId = document.getElementById('relatorio-id');
    const resultadoBusca = document.getElementById('resultado-busca');
    const valorBusca = inputId.value.trim();
    
    // Limpar resultado anterior
    resultadoBusca.innerHTML = '';
    resultadoBusca.classList.remove('hidden');
    
    if (!valorBusca) {
        mostrarErro('Por favor, informe a identificação do relatório.');
        return;
    }
    
    if (valorBusca === ID_VALIDO) {
        mostrarResultadoEncontrado();
    } else {
        mostrarNenhumRelatorioEncontrado();
    }
}

function mostrarErro(mensagem) {
    const resultadoBusca = document.getElementById('resultado-busca');
    resultadoBusca.innerHTML = `
        <div class="erro-mensagem">
            ${mensagem}
        </div>
    `;
}

function mostrarNenhumRelatorioEncontrado() {
    const resultadoBusca = document.getElementById('resultado-busca');
    resultadoBusca.innerHTML = `
        <div class="erro-mensagem">
            Nenhum relatório encontrado para a identificação informada.
        </div>
    `;
}

function mostrarResultadoEncontrado() {
    const resultadoBusca = document.getElementById('resultado-busca');
    resultadoBusca.innerHTML = `
        <div class="sucesso-resultado">
            <div class="resultado-header">
                Relatório Encontrado
            </div>
            <table class="resultado-tabela">
                <thead>
                    <tr>
                        <th>Identificação</th>
                        <th>Descrição</th>
                        <th>Data de Criação</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${dadosRelatorio.identificacao}</td>
                        <td>${dadosRelatorio.descricao}</td>
                        <td>${dadosRelatorio.dataCriacao}</td>
                        <td>
                            <button class="visualizar-btn" onclick="visualizarRelatorio()">
                                Visualizar
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}

function visualizarRelatorio() {
    const guid = "21e88145-4469-4842-9455-1f0ff2eceb78";
    const pdfUrl = `${guid}/Historico-escolar.pdf`;
    
    // 1. Fazer download do PDF
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl;
    downloadLink.download = 'Historico-escolar.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    // 2. Abrir PDF em nova aba para visualização
    window.open(pdfUrl, '_blank');
}

// Permitir busca ao pressionar Enter no campo de input
document.addEventListener('DOMContentLoaded', function() {
    const inputId = document.getElementById('relatorio-id');
    
    inputId.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            buscarRelatorio();
        }
    });
    
    // Focar no campo de input ao carregar a página
    inputId.focus();
});
