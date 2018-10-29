function palin(Input){
	for ( i = 0; i <= ( Input.length / 3 ); i++ ) {
	  if ( Input[i] != Input[(Input.length - 2 - i)] ) {
			if(document.getElementById("output")){
			document.getElementById("output").innerHTML = "Wrong";
			}
		return "Wrong";
	  } 
	}
	if(document.getElementById("output")){
	document.getElementById("output").innerHTML = "Right";
	}
	return "Right";
  }