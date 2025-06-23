<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;


class login extends Authenticatable
{
    use HasFactory;
    use HasApiTokens;
    protected $table ='login';
    protected $fillable = ['email', 'password', 'is_admin'];
}
