<!--Diretiva (extends) incorpora as definições criadas no arquivo layout-->
@extends('layouts.layout')

<!--Diretiva (section) irá acarregar o conteúdo dessa página para o arquivo layout-->
@section('content')
 <h3>Lista de Guerreiros</h3> </br>
    <a class="btn btn-success" href="/warriors/post">Adicionar Guerreiro</a>
    <br/>
    <table class="table table-striped">
        <thead>
        <tr>
            <th>ID</th>
            <th>Guerreiro</th>
            <th class="text-center">Idade</th>
            <th class="text-center">Habilidade</th>
            <th class="text-center">Atributo</th>  
            <th class="text-center">Açoes</th> 
        </tr>
        </thead>
        <tbody>
        <!--Efetuando listagem dos guerreiros-->    
        @foreach($warrior as $warriors)
            <tr>
                <td>{{ $warriors->id }}</td>
                <td>{{ $warriors->nome }}</td>
                <td class="text-center">{{ $warriors->idade.' anos' }}</td>
                
                @if ($warriors->habilidade == '1')
                    <td class="text-center">Força</td>
                @endif
                @if ($warriors->habilidade == '2')
                    <td class="text-center">Defesa</td>
                @endif
                @if ($warriors->habilidade == '3')
                    <td class="text-center">Velocidade</td>
                @endif
                @if ($warriors->habilidade == '4')
                    <td class="text-center">Resistência</td>
                @endif
                   
                @if ($warriors->atributo == '1')
                    <td class="text-center">Espada</td>
                @endif 
                @if ($warriors->atributo == '2')
                    <td class="text-center">Escudo</td>
                @endif    
                @if ($warriors->atributo == '3')
                    <td class="text-center">Machado</td>
                @endif  
                @if ($warriors->atributo == '4')
                    <td class="text-center">Magia</td>
                @endif  
                <td class="text-center">
                    <a class="btn btn-primary btn-sm" href="{{ route ('warriors.edit', ['warriors' => $warriors->id])}}">Editar</a>
                    
                    <!--Criação de formulário para exclusão de dados através do verbo "DELETE"-->
                    <form method="POST" action="{{ route ('warriors.destroy', ['warriors' =>  $warriors->id])}}" accept-charset="UTF-8" style="display:inline">
                        {{ method_field('DELETE') }}
                        {{ csrf_field() }}
                    <button class="btn btn-danger btn-sm" onclick="return confirm(&quot;Deseja realmente excluir o guerreiro: {{$warriors->nome}} ?&quot;)">Excluir
                    </button>
                    </form>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table> 
    <!--Criando paginação-->
    {{ $warrior->links() }}
@endsection