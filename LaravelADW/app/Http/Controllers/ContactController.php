<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\contacts;

class ContactController extends Controller
{
    public function store(Request $request)
    {
      
        $contact = contacts::create($request->all());

        return response()->json($contact, 201);
    }

    public function index()
    {
        return response()->json(contacts::all(), 200);
    }

    public function show($id)
    {
        $contact = contacts::find($id);

        if (!$contact) {
            return response()->json(['message' => 'Contact not found'], 404);
        }

        return response()->json($contact);
    }
}
