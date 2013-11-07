// FUNCIONES DEL JUEGO //
	function rand(l,u){
		return Math.floor((Math.random() * (u-l+1))+l);
	}
    
    function genereScore(score){
        score = score.split('');
        
        posNum = Array(Array(537, 20),
                       Array(559, 17),
                       Array(579, 20),
                       Array(602, 19),
                       Array(624, 20),
                       Array(647, 19),
                       Array(669, 20),
                       Array(692, 20),
                       Array(714, 20),
                       Array(737, 20));

        for(i=0;i<score.length;i++){
            
            var img = new Image();
            img.src = 'img/inicio.png';
            ctx.drawImage(img, posNum[score[i]][0], 632, 
                               posNum[score[i]][1], 20, 
                               537+(22*i), 632, 
                               posNum[score[i]][1], 20);
        }
    }
    
    function genereRonda(ronda){
        ronda = ronda.split('');
        
        posNum = Array(Array(537, 20),
                       Array(559, 17),
                       Array(579, 20),
                       Array(602, 19),
                       Array(624, 20),
                       Array(647, 19),
                       Array(669, 20),
                       Array(692, 20),
                       Array(714, 20),
                       Array(737, 20));
        
        var rond = 0;
        if(ronda.length == 1) rond = 505;
        if(ronda.length == 2) rond = 490;
        if(ronda.length == 3) rond = 480;
        
        for(i=0;i<ronda.length;i++){
            
            var img = new Image();
            img.src = 'img/inicio.png';
            ctx.drawImage(img, posNum[ronda[i]][0], 659, 
                               posNum[ronda[i]][1], 20, 
                               rond+(22*i), 255, 
                               posNum[ronda[i]][1], 20);
        }
    }
    
    function genereR(ronda){
        var img = new Image();
        img.src = 'img/hud.png';
        ctx.drawImage(img, 24, 27, 
                           45, 22, 
                           230, 660, 
                           45, 22);
                               
        ronda = ronda.split('');
        
        posNum = Array(Array(72, 21),
                       Array(96, 18),
                       Array(117, 21),
                       Array(141, 21),
                       Array(165, 21),
                       Array(189, 21),
                       Array(213, 21),
                       Array(237, 21),
                       Array(261, 21),
                       Array(285, 21));
        
        for(i=0;i<ronda.length;i++){
            
            var img = new Image();
            img.src = 'img/hud.png';
            ctx.drawImage(img, posNum[ronda[i]][0]-2, 27, 
                               posNum[ronda[i]][1]+4, 27, 
                               275+(22*i), 660, 
                               posNum[ronda[i]][1]+4, 27);
        }
    }
    
    function genereS(score){
        score1 = score.split('');
        score = Array();
        
        for(i=score1.length-1;i>=0;i--){
            score[score1.length-1-i] = score1[i];
        }
        
        posNum = Array(Array(537, 20),
                       Array(559, 17),
                       Array(579, 20),
                       Array(602, 19),
                       Array(624, 20),
                       Array(647, 19),
                       Array(669, 20),
                       Array(692, 20),
                       Array(714, 20),
                       Array(737, 20));
        

        
        for(i=5;i>=0;i--){
            if(5-i < score.length) scor = score[5-i];
            else scor = 0;
            
            var img = new Image();
            img.src = 'img/inicio.png';
            ctx.drawImage(img, posNum[scor][0], 659, 
                               posNum[scor][1], 20, 
                               679+(24*i), 699, 
                               posNum[scor][1], 21);
        }
    }
    
    function puntosPato(tipo){
        var puntos = 0;
        
        switch(tipo){
            case 1: puntos = 500; break;
            case 2: puntos = 1000; break;
            case 3: puntos = 1500; break;
        }
        
        return puntos;
    }

// PARAMETROS DEL JUEGO //
	var juegoIniciado 	= 1;
	var modoJuego 		= 1;
	var version 		= '1.1 Alfa';
    
    var opcion = 1;
    var ronda = 1;
    
    var disparos = Array(false, false, false);
    var aciertos = Array(0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0, 0);
    var tipoPato = Array(0,0,0,0,0,0,0,0,0,0);
    var puntuacion = 0;
    var patoLanzado = 1;
    

$(window).addEvent('keydown',function(event){
	if(juegoIniciado == 2){
		keyPress = event.key;

        if(modoJuego == 1){
    		switch(keyPress){
    		  case 'down': if(opcion<3) opcion++;
                           else opcion=1;
                           break;
    		  case 'up': if(opcion>1) opcion--;
                         else opcion=3;
                         break;
                           
    		  case 'enter': if(opcion == 1){
    		                  total = 7500+((ronda-1)*500);
                                totalP = 0;
                                for(i=0;i<tipoPato.length;i++){
                                    tip = rand(1,3);
                                    tipoPato[i] = tip;
                                    totalP+=puntosPato(tip);
                                }
                                
                                
                                
                                i=0;
                                while(totalP > total){
                                    if(tipoPato[i] > 1){
                                        tipoPato[i]--;
                                        totalP-=500;
                                    }
                                    i++;
                                    if(i>=tipoPato.length)i=0;
                                }
                                
                                modoJuego = 2;
                            }
                            break;
    		}
        }
        
        if(keyPress == 'esc') modoJuego = 1;
	}
});


$(window).addEvent('load',function(){
	ctx = document.getElementById('canvas').getContext('2d');

	x = document.getElementById('canvas').width;
	y = document.getElementById('canvas').height;

	juegoIniciado = 2;

	
	
	// 1º FUNCION PARA GENERAR LA PANTALLA PRINCIPAL //
        
		var logo = Function.from(function(){
			ctx.fillStyle = "rgb(0,0,0)";
			ctx.fillRect(0, 0, x, y);
            
            //logo
            var img = new Image();
            img.src = 'img/inicio.png';
            ctx.drawImage(img, 153, 60, 
                               716, 357, 
                               154, 60, 
                               716, 357);
            
            //opcion
            var opcionPos = 0;
            switch(opcion){
                case 1: opcionPos = 475; break;
                case 2: opcionPos = 518; break;
                case 3: opcionPos = 561; break;
            }
            var img = new Image();
            img.src = 'img/inicio.png';
            ctx.drawImage(img, 248, 475, 
                               21, 16, 
                               248, opcionPos, 
                               21, 16);
            
            //menu
            var img = new Image();
            img.src = 'img/inicio.png';
            ctx.drawImage(img, 291, 472, 
                               470, 105, 
                               291, 472, 
                               470, 105);
            
            //score
            var img = new Image();
            img.src = 'img/inicio.png';
            ctx.drawImage(img, 269, 632, 
                               240, 20, 
                               269, 632, 
                               240, 20);
            
            genereScore("000000");  
            
            //copy
            var img = new Image();
            img.src = 'img/inicio.png';
            ctx.drawImage(img, 235, 691, 
                               559, 28, 
                               235, 691, 
                               559, 28);
		});
	// 1º FINAL FUNCION PARA GENERAR LA PANTALLA PRINCIPAL //

	
	
	// 2º FUNCION PARA GENERAR LA PANTALLA PRINCIPAL //
		var pantalla = Function.from(function(){
            //ctx.fillStyle = "#64b0ff";
            //ctx.fillRect(0, 0, 1024, 768);
            
            ctx.fillStyle = "#8b7300";
            ctx.fillRect(0, 628, 1024, 140);
          
			//arboles
            var img = new Image();
            img.src = 'img/hierbas.png';
            ctx.drawImage(img, 0, 405);
		});
	// 2º FINAL FUNCION PARA GENERAR LA PANTALLA PRINCIPAL //

	
	
	// 3º FUNCION PARA GENERAR LA ANIMACION DEL PERRO //
        var cont = 0;
        var perroFotograma = 0;
        var perroMov = 10;
        var perroSalto = Array(46, 550);
        var saltoP = 1;
		var animaPerro = Function.from(function(){
            cont++;
            
            if(cont<=220 || (cont>=320 && cont<=620)){
                if(cont%20==0){
                    if(perroFotograma<3) perroFotograma++;
                    else perroFotograma = 0;
                    
                    perroMov+=10;
                }
                
                var perroFotoX = 0;
                var perroFotoY = 0;
                switch(perroFotograma){
                    case 0: perroFotoX = 0; perroFotoY = 572; break;
                    case 1: perroFotoX = 118; perroFotoY = 570; break;
                    case 2: perroFotoX = 240; perroFotoY = 570; break;
                    case 3: perroFotoX = 362; perroFotoY = 572; break;
                }
    			//perro
                var img = new Image();
                img.src = 'img/sprite1.png';
                ctx.drawImage(img, perroFotoX,  0,
                                   122,92,
                                   perroMov, perroFotoY,
                                   122, 92);
            }
            else{
                if(cont<=720){
                    if(cont%20==0){
                        if(perroFotograma==3) perroFotograma=4;
                        else perroFotograma = 3;
                    }
                    
                    var perroFotoX = 0;
                    var perroFotoY = 0;
                    switch(perroFotograma){
                        case 3: perroFotoX = 362; perroFotoY = 572; break;
                        case 4: perroFotoX = 484; perroFotoY = 572; break;
                        
                    }
                    
                    //perro
                    var img = new Image();
                    img.src = 'img/sprite1.png';
                    ctx.drawImage(img, perroFotoX, 0,
                                       122,92,
                                       perroMov, 572,
                                       122, 92);
                }
                else{
                    if(cont<=760){
                        //perro
                        var img = new Image();
                        img.src = 'img/sprite1.png';
                        ctx.drawImage(img, 10, 116,
                                           106,96,
                                           perroMov+6, 560,
                                           106, 96);
                    }
                    else{
                        if(perroSalto[1] >=450  && saltoP == 1){
                            //perro
                            var img = new Image();
                            img.src = 'img/sprite1.png';
                            ctx.drawImage(img, 148, 118,
                                               70,92,
                                               perroMov+perroSalto[0], perroSalto[1],
                                               70, 92);
                            
                            if(perroSalto[1]>=500)perroSalto[0]+=1;
                            else perroSalto[0]+=2;
                            perroSalto[1]-=4;
                        }
                        else{
                            saltoP = 2;
                            //perro
                            var img = new Image();
                            img.src = 'img/sprite1.png';
                            ctx.drawImage(img, 270, 132,
                                               66,64,
                                               perroMov+perroSalto[0], perroSalto[1],
                                               66, 64);
                            
                            if(perroSalto[1]<=500)perroSalto[0]+=2;
                            else perroSalto[0]+=1;
                            perroSalto[1]+=4;
                            
                            if(perroSalto[1] >= 600) modoJuego = 3;
                        }
                    }
                }
            }
		});
	// 3º FINAL FUNCION PARA GENERAR LA ANIMACION DEL PERRO //

	
	
	// 4º FUNCION PARA GENERAR MENSAJES //
		var mensaje = Function.from(function(){
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(432, 200, 160, 100);
            ctx.fillRect(430, 202, 164, 96);
            
            ctx.fillStyle = "#000000";
            ctx.fillRect(434, 202, 156, 96);
            ctx.fillRect(432, 204, 160, 92);
            
            //ronda
            var img = new Image();
            img.src = 'img/inicio.png';
            ctx.drawImage(img, 315, 658,
                               135,21,
                               444, 210,
                               135, 21);
                               
            genereRonda(""+ronda+"");
		});
	// 4º FINAL FUNCION PARA GENERAR MENSAJES //
	
	// 5º FUNCION PARA GENERAR HUD //
        var contador = 0;
        var opcionPat = false;
		var hud = Function.from(function(){
            contador++;
            var img = new Image();
            img.src = 'img/hud.png';
            ctx.drawImage(img, 15, 66,
                               87, 63,
                               205, 690,
                               87, 63);
                               
            ctx.fillStyle = "#000";
            for(i=0;i<disparos.length;i++){
                if(disparos[i] == true)
                    ctx.fillRect(220+(24*(2-i)), 699, 12, 21);
            }
                               
            var img = new Image();
            img.src = 'img/hud.png';
            ctx.drawImage(img, 135, 66,
                               351, 63,
                               305, 690,
                               351, 63);
                                                 
            ctx.fillRect(410, 702, 237, 21);  
            
            for(i=0;i<aciertos.length;i++){
                if(aciertos[i] == 0)
                    patitoPos = 264;
                else
                    patitoPos = 240;
                
                if(i+1 == patoLanzado){
                    if(contador%10 == 0){
                        if(!opcionPat) opcionPat = true;
                        else opcionPat = false;
                    }
                    
                    if(opcionPat || modoJuego == 2 || modoJuego == 4 || modoJuego == 7){
                        var img = new Image();
                        img.src = 'img/hud.png';
                        ctx.drawImage(img, patitoPos, 78,
                                       21, 21,
                                       410+(24*i), 702,
                                       21, 21);
                    }
                }
                else{
                    var img = new Image();
                    img.src = 'img/hud.png';
                    ctx.drawImage(img, patitoPos, 78,
                                       21, 21,
                                       410+(24*i), 702,
                                       21, 21);
                }
            }
                             
            var img = new Image();
            img.src = 'img/hud.png';
            ctx.drawImage(img, 519, 66,
                               159, 63,
                               670, 690,
                               159, 63);

            ctx.fillRect(679, 699, 141, 21);
                     
                     
            genereS(""+ puntuacion +"");

            genereR(""+ ronda +"");
		});
	// 5º FINAL FUNCION PARA GENERAR HUD //
	
	// 6º FUNCION PARA GENERAR LOS PATOS //
        var patoPos = Array(0, 0, 0, 0)
		var patos = Function.from(function(){
		    var img = new Image();
            img.src = 'img/hud.png';
            ctx.drawImage(img, 519, 66,
                               159, 63,
                               670, 690,
                               159, 63);
		});
	// 6º FINAL FUNCION PARA GENERAR LOS PATOS //
	
	// 7º FUNCION PARA GENERAR PERRO LOST //
        var perroLostPos = 70;
        var cuentaPerro = 0;
        var imgPos = 394;
        var subeBaja = 0;
		var perroLost = Function.from(function(){
		    var img = new Image();

            
            if(cuentaPerro%5 == 0){
                if(imgPos == 394) imgPos = 514;
                else imgPos = 394;
            }

            img.src = 'img/sprite1.png';
            ctx.drawImage(img, imgPos, 124,
                               58, 78,
                               392, 510+perroLostPos,
                               58, 78); // 510
            
            if(perroLostPos > 0 && subeBaja == 0) perroLostPos--;
            if(perroLostPos < 70 && subeBaja == 1)  perroLostPos++;
            
            if(cuentaPerro == 90) subeBaja = 1;
            
            if(subeBaja == 1 && perroLostPos == 70) {
                for(i=0;i<disparos.length;i++){
                    disparos[i] = false;
                }
             
                patoLanzado+=1;
                subeBaja = 0;
                cuentaPerro = 0;
                
                    
                patoXY = Array(Array(478,570),
                               Array(478,570));
                if(patoLanzado >= 11){
                    ronda+=1;
                    
                    cont = 0;
                    perroFotograma = 0;
                    perroMov = 10;
                    perroSalto = Array(46, 550);
                    saltoP = 1;
                    
                    disparos = Array(false, false, false);
                    aciertos = Array(0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0, 0);
                    patoLanzado = 1;
                    
                    total = 7500+((ronda-1)*500);
                    totalP = 0;
                    for(i=0;i<tipoPato.length;i++){
                        tip = rand(1,3);
                        tipoPato[i] = tip;
                        totalP+=puntosPato(tip);
                    }
                    
                    i=0;
                    while(totalP > total){
                        if(tipoPato[i] > 1)tipoPato[i]--;
                        totalP-=500;
                        i++;
                        if(i>=tipoPato.length)i=0;
                    }
                    
                    
                           
                    modoJuego = 2;
                }
                else {
                    modoJuego = 3;
                }
            }
            
            cuentaPerro++;                 
		});
	// 7º FINAL FUNCION PARA GENERAR LOS PATOS //
	
	
			
	// 8º FUNCION PARA LANZAR PATOS //
        var patoXY = Array(Array(478,570),
                           Array(478,570));
        fotoGrapaP = 1;
        var contPatos = 0;
        var patoLanzar = Function.from(function(){
            if(modoJuego == 3){
                contPatos++;
                if(patoXY[0][0]-patoXY[1][0] <= 6 && patoXY[0][1]-patoXY[1][1] <= 6){
                    patoXY[1][0] = rand(10, 970);
                    patoXY[1][1] = rand(10, 570);
                }
                
                                                               
                var vel = 0;
                switch(tipoPato[patoLanzado-1]){
                    case 1: vel = 2.5; break;
                    case 2: vel = 3.75; break;
                    case 3: vel = 5; break;
                }                                           
                if(patoXY[0][0] > patoXY[1][0]) patoXY[0][0]-=vel;                                               
                if(patoXY[0][0] < patoXY[1][0]) patoXY[0][0]+=vel;
                                                               
                if(patoXY[0][1] > patoXY[1][1]) patoXY[0][1]-=vel;                                               
                if(patoXY[0][1] < patoXY[1][1]) patoXY[0][1]+=vel;
                
                /*
                switch(tipoPato[patoLanzado]){
                    case 1: ctx.fillStyle = "#000000"; break;
                    case 2: ctx.fillStyle = "#0000a8"; break;
                    case 3: ctx.fillStyle = "#a80010"; break;
                }
                
                ctx.fillRect(patoXY[0][0], patoXY[0][1], 68, 48);
                
                
                document.getElementById('pruebas').innerHTML = patoXY[0][0] +":"+ patoXY[1][0]
                                                               +"<br />"+
                                                               patoXY[0][1] +":"+ patoXY[1][1];
                */
            contPatos++;
            
            if(contPatos%7 == 0) {
                fotoGrapaP++;
                if(fotoGrapaP > 3) fotoGrapaP = 1;
            }
            
            if(patoXY[0][0] > patoXY[1][0]){
                if(fotoGrapaP == 1){
                    switch(tipoPato[patoLanzado-1]){
                        case 1: tipoPat = 258; break;
                        case 2: tipoPat = 518; break;
                        case 3: tipoPat = 0; break;
                    }
                }
                if(fotoGrapaP == 2){
                    switch(tipoPato[patoLanzado-1]){
                        case 1: tipoPat = 338; break;
                        case 2: tipoPat = 598; break;
                        case 3: tipoPat = 78; break;
                    }
                }
                if(fotoGrapaP == 3){
                    switch(tipoPato[patoLanzado-1]){
                        case 1: tipoPat = 418; break;
                        case 2: tipoPat = 678; break;
                        case 3: tipoPat = 158; break;
                    }
                }
            }
            else{
               if(fotoGrapaP == 1){
                    switch(tipoPato[patoLanzado-1]){
                        case 1: tipoPat = 420; break;
                        case 2: tipoPat = 160; break;
                        case 3: tipoPat = 680; break;
                    }
                }
                if(fotoGrapaP == 2){
                    switch(tipoPato[patoLanzado-1]){
                        case 1: tipoPat = 340; break;
                        case 2: tipoPat = 80; break;
                        case 3: tipoPat = 600; break;
                    }
                }
                if(fotoGrapaP == 3){
                    switch(tipoPato[patoLanzado-1]){
                        case 1: tipoPat = 260; break;
                        case 2: tipoPat = 0; break;
                        case 3: tipoPat = 520; break;
                    }
                }
            }
            var img = new Image();
            
            if(patoXY[0][0] > patoXY[1][0]) img.src = 'img/pajaros2.png';
            else img.src = 'img/pajaros1.png';
            ctx.drawImage(img, tipoPat, 0,
                               68, 62,
                               patoXY[0][0], patoXY[0][1],
                               68, 62);
            }
        });
    // 8º FINAL FUNCION PARA LANZAR PATOS //
    
    		
			
			
			
	// 8º FUNCION PARA LANZAR PATOS //
    var fotoGrama = 1;
        var pajaroVuela = Function.from(function(){
            patoXY[0][1]-=5;
            contPatos++;
            
            if(contPatos%7 == 0) {
                fotoGrama++;
                if(fotoGrama > 3) fotoGrama = 1;
            }
            
            
            if(fotoGrama == 1){
                switch(tipoPato[patoLanzado-1]){
                    case 1: tipoPatX = 260; break;
                    case 2: tipoPatX = 520; break;
                    case 3: tipoPatX = 0; break;
                }
            }
            if(fotoGrama == 2){
                switch(tipoPato[patoLanzado-1]){
                    case 1: tipoPatX = 340; break;
                    case 2: tipoPatX = 600; break;
                    case 3: tipoPatX = 80; break;
                }
            }
            if(fotoGrama == 3){
                switch(tipoPato[patoLanzado-1]){
                    case 1: tipoPatX = 420; break;
                    case 2: tipoPatX = 680; break;
                    case 3: tipoPatX = 160; break;
                }
            }
            
            var img = new Image();
            img.src = 'img/pajaros2.png';
            ctx.drawImage(img, tipoPatX, 156,
                               64, 62,
                               patoXY[0][0], patoXY[0][1],
                               64, 62);
                               
            if(patoXY[0][1]+48 <= 0) modoJuego = 4;
        });
    // 8º FINAL FUNCION PARA LANZAR PATOS //
			
			
			
	// 8º FUNCION PARA LANZAR PATOS //
        var fotoGrama = 1;
        var contPatos1 = 0;
        var patoMuerto = Function.from(function(){
            contPatos1++;
            if(contPatos1<= 10){
                switch(tipoPato[patoLanzado-1]){
                    case 1: tipoPatX = 420; break;
                    case 2: tipoPatX = 680; break;
                    case 3: tipoPatX = 160; break;
                }
                
                
                var img = new Image();
                img.src = 'img/pajaros2.png';
                ctx.drawImage(img, tipoPatX, 234,
                                   64, 62,
                                   patoXY[0][0], patoXY[0][1],
                                   64, 62);
            }
            else{
                patoXY[0][1]+=5;
                
                if(contPatos1%7 == 0) {
                    fotoGrama++;
                    if(fotoGrama > 2) fotoGrama = 1;
                }
                
                
                if(fotoGrama == 1){
                    switch(tipoPato[patoLanzado-1]){
                        case 1: tipoPatX = 340; break;
                        case 2: tipoPatX = 600; break;
                        case 3: tipoPatX = 80; break;
                    }
                }
                if(fotoGrama == 2){
                    switch(tipoPato[patoLanzado-1]){
                        case 1: tipoPatX = 342; break;
                        case 2: tipoPatX = 82; break;
                        case 3: tipoPatX = 602; break;
                    }
                }
                
                var img = new Image();
                if(fotoGrama == 1) img.src = 'img/pajaros2.png';
                else img.src = 'img/pajaros1.png';
                ctx.drawImage(img, tipoPatX, 234,
                                   64, 62,
                                   patoXY[0][0], patoXY[0][1],
                                   64, 62);
            
                if(patoXY[0][1] >= 570) modoJuego = 7;
            }
        });
    // 8º FINAL FUNCION PARA LANZAR PATOS //
			
			
			
	// 8º FUNCION PARA LANZAR PATOS //
        var subeBaraWin = 1;
        var cuentaPerroWin = 0;
        var winY = 570;
        var perroWin = Function.from(function(){
            cuentaPerroWin++;
            
            if(subeBaraWin == 1) winY--;
            if(subeBaraWin == 2) winY++;
            
            var img = new Image();
            img.src = 'img/sprite1.png';
            ctx.drawImage(img, 664, 4,
                               86, 78,
                               392, winY,
                               86, 78);
                               
            if(winY <= 510) subeBaraWin = 3;
            if(subeBaraWin == 3 && cuentaPerroWin >= 100) subeBaraWin = 2;
            
            if(winY == 570 && subeBaraWin == 2){
                for(i=0;i<disparos.length;i++){
                    disparos[i] = false;
                }
             
                patoLanzado+=1;
                subeBaraWin     = 1;
                cuentaPerroWin  = 0;
                contPatos1      = 0;
                    
                patoXY = Array(Array(478,570),
                               Array(478,570));
                if(patoLanzado >= 11){
                    ronda+=1;
                    
                    cont = 0;
                    perroFotograma = 0;
                    perroMov = 10;
                    perroSalto = Array(46, 550);
                    saltoP = 1;
                    
                    disparos = Array(false, false, false);
                    aciertos = Array(0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0, 0);
                    patoLanzado = 1;
                    
                    total = 7500+((ronda-1)*500);
                    totalP = 0;
                    for(i=0;i<tipoPato.length;i++){
                        tip = rand(1,3);
                        tipoPato[i] = tip;
                        totalP+=puntosPato(tip);
                    }
                    
                    i=0;
                    while(totalP > total){
                        if(tipoPato[i] > 1)tipoPato[i]--;
                        totalP-=500;
                        i++;
                        if(i>=tipoPato.length)i=0;
                    }
                    
                    
                           
                    modoJuego = 2;
                }
                else {
                    modoJuego = 3;
                }
            }
        });
    // 8º FINAL FUNCION PARA LANZAR PATOS //		
			
			
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	// 96º CONTROLES PARA ACCIONES CUANDO EL RATON SALE DEL CANVAS //
		$('canvas').addEvent('click', function(event){
			userX = event.page.x - event.target.getPosition().x;
			userY = event.page.y - event.target.getPosition().y;
			
			switch(modoJuego){
				// 1 MENU PRINCIPAL //
				case 3: contDisparos = false;
                        for(i=0;i<disparos.length;i++){
                            if(disparos[i] == false) contDisparos = true;
                        }
                        
                        if(contDisparos){
                            if((userX >= patoXY[0][0] && userX <= patoXY[0][0]+68) && (userY >= patoXY[0][1] && userY <= patoXY[0][1]+62)){
                                aciertos[patoLanzado-1] = 1;
                                
                                puntuacion+=puntosPato(tipoPato[patoLanzado-1]);
                                
                                modoJuego = 6;
                            }
                        }
                
                        for(i=0;i<disparos.length;i++){
				            if(disparos[i] == 0){
				                disparos[i] = 1; 
                                break;
                            }
        				}
                        
                        
						
						break;
			}
		});
	// 96º CONTROLES PARA ACCIONES CUANDO EL RATON SALE DEL CANVAS //
	
	// 97º CONTROLES PARA ACCIONES CUANDO EL RATON SALE DEL CANVAS //
		$('canvas').addEvent('mouseout', function(event){
			userX = event.page.x - event.target.getPosition().x;
			userY = event.page.y - event.target.getPosition().y;
			
			switch(modoJuego){
				// 1 MENU PRINCIPAL //
				case 1: 
						
						break;
			}
		});
	// 97º CONTROLES PARA ACCIONES CUANDO EL RATON SALE DEL CANVAS //
	
	// 98º CONTROLES PARA ACCIONES CUANDO EL RATON SALE DEL CANVAS //
		$('canvas').addEvent('mouseover', function(event){
			userX = event.page.x - event.target.getPosition().x;
			userY = event.page.y - event.target.getPosition().y;
			
			switch(modoJuego){
				// 1 MENU PRINCIPAL //
				case 1: 
						
						break;
			}
		});
	// 98º CONTROLES PARA ACCIONES CUANDO EL RATON SALE DEL CANVAS //
	
	// 99º RELOAD SCREEN //
		var maxfps = 60;
		var drawInterval = 1 / maxfps * 1000;
		
		var reloadGraph = Function.from(function(){
			ctx.clearRect (0,0, x,y); //limpiamos pantalla
			
			switch(modoJuego){
				// 1 MENU PRINCIPAL DEL JUEGO //
				case 1: logo();
                
						break;
                        
				// 2 ENTRADA A OPCION 2 //
				case 2: if(saltoP == 1){
				            pantalla();
                            animaPerro();
                        }
                        else{
                            animaPerro();
				            pantalla();
                            
                        }
                        
                        hud();
                        
                        if(cont<=220) mensaje();
						break;
                        
				// 3 INICIO PARTIDA OPCION 1 //
				case 3: patoLanzar();
                
                        pantalla();
                        
                        hud();
                        
                        contDisparos = false;
                        for(i=0;i<disparos.length;i++){
                            if(disparos[i] == false) contDisparos = true;
                        }
                        
                        if(!contDisparos) {
                            modoJuego = 5;
                        }
                        
						break;
                        
				// 4 INICIO PARTIDA OPCION 1 //
				case 4: perroLost();
                        
                        pantalla();
                        
                        hud();
                        
						break;
                        
				// 4 INICIO PARTIDA OPCION 1 //
				case 5: pajaroVuela();
                        
                        pantalla();
                        
                        patoLanzar();
                        
                        hud();
                        
						break;
                        
				// 4 INICIO PARTIDA OPCION 1 //
				case 6: patoMuerto();
                        
                        pantalla();
                        
                        patoLanzar();
                        
                        hud();
                        
						break;
                        
                        
				// 4 INICIO PARTIDA OPCION 1 //
				case 7: perroWin();
                        
                        pantalla();
                        
                        hud();
                        
						break;
			}
			
		}).periodical(drawInterval);
	// 99º FINAL RELOAD SCREEN //
});