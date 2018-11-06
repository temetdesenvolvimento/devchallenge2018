<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Warrior extends Model
{
	//Apenas os campos inclusos no fillable serão armazenados
    protected $fillable = ['nome', 'idade', 'habilidade', 'atributo'];
}
