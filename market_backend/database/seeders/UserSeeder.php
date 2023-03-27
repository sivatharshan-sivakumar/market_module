<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'user_name'=>'siva',
            'email'=>'siva@gmail.com',
            'password'=>'12345',
            'first_name'=>'siva',
            'last_name'=>'tharshan',
            'phone_number'=>'0752820316',
            'address'=>'palameenmadu',
            'city'=>'batticaloa',
            'country'=>'srilanka',

        ]);

        User::create([
            'user_name'=>'kirishan',
            'email'=>'krish@gmail.com',
            'password'=>'123456',
            'first_name'=>'krish',
            'last_name'=>'fernando',
            'phone_number'=>'0752820317',
            'address'=>'kochikade',
            'city'=>'negombo',
            'country'=>'srilanka',

        ]);
    }
}
