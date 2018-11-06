<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

//Adicionado para corrigir o erro ao conectar com o MySQL (MariaDB)
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //Adicionado para corrigir o erro ao conectar com o MySQL (MariaDB)
        Schema::defaultStringLength(191);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
