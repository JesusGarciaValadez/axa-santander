<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get( '/', 'RegisterController@index' );

Route::get( '/success', 'UsersController@success' );

Route::get( '/encuesta', 'PollController@show' );

Route::get( '/encuesta-enviada', 'PollController@pollSended' );

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);

Route::resource( 'users', 'UsersController' );