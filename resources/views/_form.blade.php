<!--Adicionando o campo de proteção "csrf_field()" para gerar aquele input hidden do _token com o valor do token único para o formulário.-->
		{{ csrf_field() }}
		<div class="form-group">
			<label for="nome">Nome</label>
			<input class="form-control" type="text" id="nome" name="nome" value="{{$warrior->nome}}">
		</div>

		<div class="form-group">
			<label for="number">Idade</label>
			<input class="form-control" type="number" id="idade" name="idade" size="2" maxlength="2" value="{{$warrior->idade}}">
		</div>

		<div class="form-group">
			<label for="habilidade">Idade</label>
			<select class="form-control id="habilidade" name="habilidade" value="{{$warrior->habilidade}}">
				<option value="">Escolha uma habilidade</option>
				<option value="1" {{$warrior->habilidade == 1 ?'selected="selected"': ''}}>Força</option>
                <option value="2" {{$warrior->habilidade == 2 ?'selected="selected"': ''}}>Defesa</option>
                <option value="3" {{$warrior->habilidade == 3 ?'selected="selected"': ''}}>Velocidade</option>
                <option value="4" {{$warrior->habilidade == 4 ?'selected="selected"': ''}}>Resistência</option>
			</select>
		</div>

		<div class="form-group">
			<label for="atributo">Idade</label>
			<select class="form-control id="atributo" name="atributo" value="{{$warrior->atributo}}">
				<option value="">Escolha uma atributo</option>
				<option value="1" {{$warrior->atributo == 1 ?'selected="selected"': ''}}>Espada</option>
                <option value="2" {{$warrior->atributo == 2 ?'selected="selected"': ''}}>Escudo</option>
                <option value="3" {{$warrior->atributo == 3 ?'selected="selected"': ''}}>Machado</option>
                <option value="4" {{$warrior->atributo == 4 ?'selected="selected"': ''}}>Magia</option>
			</select>
		</div>