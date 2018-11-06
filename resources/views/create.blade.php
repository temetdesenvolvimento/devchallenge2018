@extends('layouts.layout')

@section('content')
	<h3>Novo Guerreiro</h3> </br>
	<!--Caso exista algum erro ao preencher o formulário a variável "$errors", que é padrão do laravel irá exibí-los-->
	@if($errors->any())
	    <ul class="alert alert-danger">	    	
		    @foreach($errors->all() as $error)
		        <li>{{ $error }}</li>
		    @endforeach      
	    </ul>
    @endif

	<form method="POST" action="/warriors">
		<!--Incluindo o formulário da view "_form"-->
		@include('_form')
		<button type="submit" class="btn btn-success">Criar</button>
	</form>
    
@endsection