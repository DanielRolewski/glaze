<?php

namespace App\Livewire;

use Livewire\Component;

class MainPage extends Component
{
    public $something = "something in Livewire";
    public function displaySomething() {

    }
    public function render()
    {
        return view('livewire.main-page');
    }
}
