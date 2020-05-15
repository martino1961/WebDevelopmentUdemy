//jQ 193: Adding and Removing Elements with jQuery

//Add button Before <h1> - method .before()
//  HTML: <button>Before h1</button><h1>Hello</h1>
$("h1").before("<button>Before h1</button>");

//Add button After <h1> - method .after()
//HTML: <h1>Hello</h1><button>After h1</button>
$("h1").after("<button>After h1</button>");

//Add button Before Content in <h1> - method .prepend()
//HTML: <h1><button>Prepend h1</button>Hello</h1>
$("h1").prepend("<button>Prepend h1</button>");

//Add button After Content in <h1> - method .append()
//HTML: <h1>Hello<button>Append h1</button></h1>
$("h1").append("<button>Append h1</button>");

//Remove all buttons - method .remove()
$("button").remove();