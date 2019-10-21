<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('userLogin','Api\LoginController@login');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['auth:api']], function () {
    Route::resource('imageLibrary','Api\ImageLibraryController');
    Route::resource('userBooks','Api\saveAllController');
    Route::get('download_pdf/{id}','BookPdf\PdfController@download_pdf');
    Route::post('logout','Api\LoginController@logout');
});

