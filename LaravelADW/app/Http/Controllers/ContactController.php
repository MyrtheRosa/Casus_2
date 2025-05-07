<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\contacts;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        // Optional: validate the request
        // Save the contact message
        $contact = contacts::create($request->all());

        return response()->json($contact, 201);
    }

    public function index()
    {
        return response()->json(contacts::all(), 200);
    }
}
