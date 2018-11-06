<?php

use Illuminate\Database\Seeder;
use App\Warrior;

class WarriorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	//Serão criadas 20 registros ficticios no banco de dados
        factory(\App\Warrior::class, 20)->create();
    }
}
