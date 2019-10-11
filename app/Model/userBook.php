<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class userBook extends Model
{
    //
    protected $fillable = ['user_id', 'front_cover', 'inside_front_cover', 'inside_back_cover', 'back_cover'];
}
