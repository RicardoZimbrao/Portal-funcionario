<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Histórico Escolar</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }
        
        .pdf-container {
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f0f0f0;
        }
        
        iframe {
            width: 95%;
            height: 95%;
            border: 1px solid #ccc;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <div class="pdf-container">
        <iframe src="Historico-escolar.pdf" type="application/pdf">
            <p>Seu navegador não suporta visualização de PDF. 
               <a href="Historico-escolar.pdf" download>Clique aqui para fazer o download</a>
            </p>
        </iframe>
    </div>
</body>
</html>
