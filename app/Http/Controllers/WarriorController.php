<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Warrior;
use Validator;

class WarriorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //A váriável definida irá receber todos os guerreiros registrados, porém exibirá apenas a quantidade de informações estabelecidas por página
        $warrior = Warrior::paginate(10);
        //A coleção de clientes (warrior) será passada para view definida (index)
        return view ('index', compact('warrior'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('create', ['warrior' => new Warrior()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    //Salvando dados dos guerreiros criados no banco de dados
    public function store(Request $request)
    {
        //Chamando metódo de validação (_validate) criado
        $this->_validate($request);

        //Armazenando os dados do formulário variável ($data) e salvando no banco
        $data = $request->all();
        Warrior::create($data);
        return redirect('/warriors');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function show($id)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    //Edição de dados
    public function edit($id)
    {
        //Consulta se existe informações e caso não haja retorna uma exceção
        $warrior = Warrior::findOrFail($id);

        return view('edit', compact('warrior'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //Consulta se existe informações e caso não haja retorna uma exceção
        $warrior = Warrior::findOrFail($id);

        //Chamando metódo de validação (_validate) criado
        $this->_validate($request);

        //Atualizando os dados
        $data = $request->all();
        $warrior->update($data);

        return redirect('/warriors'); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //Excluindo warrior
        Warrior::destroy($id);
        
        //Redirecionando para mesma rota
        return redirect()->back();
    }
    //Validação de dados (regras para preenchimento do formulário)
    protected function _validate(Request $request){
        $this->validate($request, [
            'nome'        => 'required| max:50',
            'idade'       => 'required| min:2| max:2',
            'habilidade'  => 'required',
            'atributo'    => 'required',
        ]);
    }    
}  
