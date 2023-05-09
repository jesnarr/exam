<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/get_all_users', [UserController::class, 'getAllUsers']);
Route::get('/view/{id}', [UserController::class, 'getUserById']);
Route::get('/delete/{id}', [UserController::class, 'delete']);
Route::post('/add_user', [UserController::class, 'createUser']);
Route::post('/update_user', [UserController::class, 'updateUser']);


// Route::get('/app/getBlogs/{total}', [BlogController::class, 'index']);
// Route::get('/app/categories', [BlogController::class, 'getCategories']);
// Route::get('/app/getRecentPosts', [BlogController::class, 'getRecentPosts']);
// Route::get('/app/getTags', [BlogController::class, 'getTags']);
// Route::get('/view/app/fetchBlogs/{id}', [BlogController::class, 'view']);
// Route::post('/app/add', [BlogController::class, 'add']);
