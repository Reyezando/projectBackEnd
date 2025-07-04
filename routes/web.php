<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\reynardoController;

Route::get('/',[reynardoController::class,'index']);