<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\login;
class LoginController extends Controller
{
      public function index()
    {
        return response()->json(login::all(), 200);
    }
}
