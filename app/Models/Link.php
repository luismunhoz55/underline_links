<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Link extends Model
{
    protected $fillable = ["url", "title", "description"];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
