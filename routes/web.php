<?php

use Illuminate\Support\Facades\Route;
use  Inertia\Inertia;
use App\http\Controllers\CustomerController;

Route::get('/', function () {
    return Inertia::render('Welcome');
});
/*
Route::get('customers',[Customercontroller::class,'index']);
Route::get('/customers/create',[CustomerController::class,'create']);
Route::post('/customers',[CustomerController::class,'store']);
Route::get('/customers/{customer}/edit',[CustomerController::class,'edit']);
Route::put('/customers/{customer}',[CustomerController::class,'update']);
Route::get('customers/{customer}',[CustomerController::class,'show']);
Route::delete('/customers/{customer}',[CustomerController::class,'destroy']);
*/

Route::resource('/customers',CustomerController::class);