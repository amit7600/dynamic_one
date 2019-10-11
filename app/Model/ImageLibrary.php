<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ImageLibrary extends Model
{
    protected $fillable = ['user_id', 'path', 'type'];
}
