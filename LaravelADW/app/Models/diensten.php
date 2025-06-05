<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class diensten extends Model
{
    use HasFactory;
    protected $table ='dienst';
    protected $fillable = ['name', 'email', 'mobile_number', 'message', 'type'];
}
