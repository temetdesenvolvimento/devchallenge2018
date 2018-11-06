<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

/*
Criação de rotas em modo resource
Route::resource('warriors', 'WarriorController');
*/

//Criação de rota para listage de guerreiros
Route::get('warriors', 'WarriorController@index');
Route::post('warriors', 'WarriorController@index');

//Criação de rota para edição de guerreiros
Route::get('warriors/{warrior}/edit', 'WarriorController@edit')->name('warriors.edit');
Route::put('warriors/{warrior}', 'WarriorController@update')->name('warriors.update');

//Criação de rota para adição de guerreiros
Route::get('warriors/post', 'WarriorController@create')->name('warriors.create');
Route::post('warriors', 'WarriorController@store');

//Criação de rota para exclusão de guerreiros
Route::delete('warriors/{warrior}', 'WarriorController@destroy')->name('warriors.destroy');


