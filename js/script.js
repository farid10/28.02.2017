function chess(){
	document.write('<div class="row">');
	for(j=0; j<4; j++){
		for(i=0; i<8; i=i+2){
			document.write('<div class="black"></div>')
			document.write('<div class="white"></div>');
		}
		for(i=0; i<8; i=i+2){
			document.write('<div class="white"></div>')
			document.write('<div class="black"></div>');
		}
	}
}
chess()