<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $fillable = [
        'nickname',
        'room_id',
        'active',
        'created_at',
    ];

    protected $guarded = [
        'id',
    ];
}
