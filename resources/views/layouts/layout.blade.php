<!--Criando layout base para aplicação-->
<!DOCTYPE html>
<html>
<head>
	<title>Desafio TemeT</title>
	<link rel="stylesheet" type="text/css" href="/css/app.css">
</head>
<body>
	<div class="container">
		<!--Diretiva (yield) cria um espaço no layou para receber o conteúdo da página-->
		@yield('content')
	</div>
    <script type="text/javascript src="/js/app.js"></script>
</body>
</html>