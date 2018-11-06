<?php

use Faker\Generator as Faker;

//Serão criados e armazenados dados falsos para cada campo
$factory->define(App\Warrior::class, function (Faker $faker) {
    return [
        'nome'       => $faker->name,
        'idade'      => $faker->numberBetween($min = 18, $max = 90),
        'habilidade' => rand(1, 4),
        'atributo'   => rand(1, 4),
    ];
});
