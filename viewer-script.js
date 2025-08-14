// Função para fazer download do PDF
function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'Historico-escolar.pdf';
    link.download = 'Historico-escolar.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Função para imprimir o PDF
function printPDF() {
    const iframe = document.querySelector('iframe');
    if (iframe) {
        iframe.contentWindow.print();
    } else {
        // Fallback: abrir PDF em nova janela para impressão
        window.open('Historico-escolar.pdf', '_blank');
    }
}

// Verificar se os parâmetros da URL estão corretos
function checkGUID() {
    const urlParams = new URLSearchParams(window.location.search);
    const guid = urlParams.get('GUID');
    const anonymous = urlParams.get('anonymous');
    const hasPdf = urlParams.get('hasPdf');
    
    // Se os parâmetros não estiverem corretos, mostrar erro
    if (guid !== '21e88145-4469-4842-9455-1f0ff2eceb78' || anonymous !== 'true' || hasPdf !== 'true') {
        document.querySelector('.pdf-viewer').innerHTML = `
            <div style="padding: 50px; text-align: center; color: #e74c3c;">
                <h3>Erro: Parâmetros inválidos</h3>
                <p>GUID não encontrado ou parâmetros incorretos.</p>
                <p>Verifique se a URL está correta.</p>
            </div>
        `;
    }
}

// Executar verificação quando a página carregar
document.addEventListener('DOMContentLoaded', checkGUID);
