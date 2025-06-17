<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\login;
class LoginController extends Controller
{   
      public function index()
    {
        return response()->json(login::all(), 200);
    }
  public function login(Request $request)
{
    $email = $request->input('email');
    $password = $request->input('password');

    $user = login::where('email', $email)->first();

    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    if (password_verify($password, $user->password)) {
        return response()->json(['message' => 'Login success'], 200);
    } else {
        return response()->json(['message' => 'Invalid password'], 401);
    }
}

}
