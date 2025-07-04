<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;

class reynardoController extends Controller
{
    //
    public function index(){
        $data = DB::table('intro')->value('sentences');
        $intro = json_decode($data);
        $edutl = DB::table('edutl')->get();

        return view('index', [
            'intro' => $intro,
            'edutl' => $edutl
        ]);
    }
}
