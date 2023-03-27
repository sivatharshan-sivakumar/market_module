<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sells', function (Blueprint $table) {
            $table->id();

            $table->string("veg_name");
            $table->foreign("veg_name")->references("veg_name")->on("vegitables");
            $table->string("user_name");
            $table->foreign("user_name")->references("user_name")->on("users");
            $table->string("description");
            $table->string("price");
            $table->string("negotiable");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {

    }
};
