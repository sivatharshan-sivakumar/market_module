<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Vegitable;

class VegitableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Vegitable::create([
            'veg_name'=>'carrot'
        ]);

        Vegitable::create([
            'veg_name'=>'gova'
        ]);
        Vegitable::create([
            'veg_name'=>'onion'
        ]);

        Vegitable::create([
            'veg_name'=>'big onion'
        ]);

    }
}
