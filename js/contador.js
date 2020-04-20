function contar_elementos() {
	
	var allParas = document.getElementsByTagName("p");
  	var num_p = allParas.length;

	var allenlaces = document.getElementsByTagName("a");
  	var num_a = allenlaces.length;
	
	var encabezados = 0;
	
	for(let i = 1; i <= 6; i++){
  		var totalheaders = document.getElementsByTagName('h'+ i)
  		encabezados+= totalheaders.length;
	}
	
	alert("Hay " + num_p + " <p> elementos en este documento");
  	alert("Hay " + num_a + " <a> elementos en este documento");
	alert("Hay " + encabezados + " <h(1,2,3,4,5,6)> elementos en este documento")
	
}