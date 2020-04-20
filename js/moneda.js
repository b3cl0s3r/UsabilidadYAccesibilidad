function monedaConverter(x) {
	
	switch(x) {
		case 1:
			
			document.converter.dolar.value = document.converter.euro.value * 1.09632
    		document.converter.libra.value = document.converter.euro.value * 0.911869
    		document.converter.yen.value = document.converter.euro.value * 120.500
			break;
			
		case 2:
			
			document.converter.euro.value = document.converter.dolar.value * 0.912143
    		document.converter.libra.value = document.converter.dolar.value * 0.830483
    		document.converter.yen.value = document.converter.dolar.value * 109.871
			break;
			
		case 3:
			
			document.converter.dolar.value = document.converter.libra.value * 1.20412
			document.converter.euro.value = document.converter.libra.value * 1.09647
			document.converter.yen.value = document.converter.libra.value * 230.27
			break;
			
		case 4:
			
			document.converter.dolar.value = document.converter.yen.value * 0.00910154
			document.converter.libra.value = document.converter.yen.value * 0.00756550
			document.converter.euro.value = document.converter.yen.value * 0.00829873
			break;
			
		default:
			
			console.error()
	}
}
