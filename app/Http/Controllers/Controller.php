<?php

namespace App\Http\Controllers;

abstract class Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
}
