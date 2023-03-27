<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiController extends Controller
{
    public function passwordofuser($username){

        $password=DB::select("select password from users where user_name=?",[$username]);

        return response()->json($password);

    }

    public function getvegitables(){
        $vegitables=DB::select("select veg_name from vegitables");

        return response()->json($vegitables);
    }

    public function addsell(Request $request){
        $username = $request->input('username');
        $veg_name = $request->input('veg_name');
        $description = $request->input('description');
        $price = $request->input('price');
        $negotiable = $request->input('negotiable');

        $result = DB::statement("insert into sells (veg_name,user_name,description,price,negotiable)
                                values (?,?,?,?,?)",
                                [$veg_name,$username, $description,$price,$negotiable]);
    }
}
