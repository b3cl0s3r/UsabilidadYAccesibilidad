function usuarios_datos() {

    var json = { "Usuario1": [
    {
        dni : 45936668,
        nacimiento : 1987,
        ingreso_empresa : 2011,
        plus_prod : 12,
        plus_anti : 9,
        sueldo : 1300
    }],
        "Usuario2": [
    {
        dni : 47867354,
        nacimiento : 1998,
        ingreso_empresa : 2017,
        plus_prod : 5,
        plus_anti : 3,
        sueldo : 1400
    }],
        "Usuario3": [
    {
        dni : 41264378,
        nacimiento : 1968,
        ing_empresa : 1984,
        plus_prod : 15,
        plus_anti : 8,
        sueldo : 2300
	}
    ]};
    
    
    var edad2 = 0;
    var sueldo2 = 0;
    var antigüedad2 = 0;
    var contador2 = 0;
	
    var edad3 = 0;
    var sueldo3 = 0;
    var antigüedad3 = 0;
    var contador3 = 0;
	
	var año_actual = 2020;
    

    for(var i = 0; i < json.Usuario1.length; i++){

        var edad_u1 = año_actual - json.Usuario1[i].nacimiento;
        var anti_u1 = año_actual - json.Usuario1[i].ingreso_empresa;
        var cont1 = anti_u1 / 3;

        var sueldo_u1 = json.Usuario1[i].sueldo + (json.Usuario1[i].plus_prod / 100) * json.Usuario1[i].sueldo
                + json.Usuario1[i].sueldo * (json.Usuario1[i].plus_anti * cont1 / 100);

    }

    for(var i = 0; i < json.Usuario2.length; i++){

        var edad_u2 = año_actual - json.Usuario2[i].nacimiento;
        var anti_u2 = año_actual - json.Usuario2[i].ingreso_empresa;
        var cont2 = anti_u1 / 3;

        var sueldo_u2 = json.Usuario2[i].sueldo + (json.Usuario2[i].plus_prod / 100) * json.Usuario2[i].sueldo
                + json.Usuario2[i].sueldo * (json.Usuario2[i].plus_anti * cont1 / 100);

    }
	
	
	for(var i = 0; i < json.Usuario3.length; i++){

        var edad_u3 = año_actual - json.Usuario3[i].nacimiento;
        var anti_u3 = año_actual - json.Usuario3[i].ingreso_empresa;
        var cont3 = anti_u1 / 3;

        var sueldo_u3 = json.Usuario3[i].sueldo + (json.Usuario3[i].plus_prod / 100) * json.Usuario3[i].sueldo
                + json.Usuario3[i].sueldo * (json.Usuario3[i].plus_anti * cont1 / 100);

    }

    alert("Edad del usuario 1: " + edad_u1 + " años");
    alert("Sueldo del usuario 1: " + sueldo_u1 + " euros");
    alert("Edad del usuario 2: " +  edad_u2 + " años");
    alert("Sueldo del usuario 2: " + sueldo_u2 + " euros"); 
    alert("Edad del usuario 3: " +  edad_u3 + " años");
    alert("Sueldo del usuario 3: " + sueldo_u3 + " euros");  
	
    
}
