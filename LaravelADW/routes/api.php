<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DienstController;

Route::post('/contacts', [ContactController::class, 'store']);
Route::get('/contacts', [ContactController::class, 'index']);
Route::get('/contacts/{id}', [ContactController::class, 'show']);

Route::post('/diensten', [DienstController::class, 'store']);
Route::get('/diensten', [DienstController::class, 'index']);
Route::get('/diensten/{id}', [DienstController::class, 'show']);
