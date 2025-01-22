<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create("links", function (Blueprint $table) {
            $table->id();
            $table->text("url");
            $table->string("title", length: 100);
            $table->text("description");
            $table->foreignId("user_id")->constrained()->cascadeOnDelete();
            $table->foreignId("categorie_id")->nullable()->constrained();
            $table->timestamps();
        });

        Schema::create("categories", function (Blueprint $table) {
            $table->id();
            $table->string("name", length: 50);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists("links");
        Schema::dropIfExists("categories");
    }
};
