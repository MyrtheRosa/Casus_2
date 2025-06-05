<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\diensten;

class DienstController extends Controller
{
    public function store(Request $request)
    {
        $dienst = diensten::create($request->all());

        return response()->json($dienst, 201);
    }

    public function index()
    {
        return response()->json(diensten::all(), 200);
    }

    public function show($id)
    {
        $dienst = diensten::find($id);

        if (!$dienst) {
            return response()->json(['message' => 'Dienst request not found'], 404);
        }

        return response()->json($dienst);
    }
}
