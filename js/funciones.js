function setPausa(){
if(!pausa)
    pausa=true;
else
pausa=false;
}

function posicionarBombas(){
    if(cantidadJugadores ==1){
        if (!paraElCarroMaster(players[0].position.x, players[0].position.z) ) {
            for (let i = 1; i < colaSerpiente.length; i++) {
                
            var ultimaPosicion = ultimaPosJ1[ultimaPosJ1.length-i];
            colaSerpiente[i].position.set=  (ultimaPosicion.x,0,ultimaPosicion.z);
        
            }  
        }  
    }else{
        if (!paraElCarroMaster(players[0].position.x, players[0].position.z) && !paraElCarroMaster(players[1].position.x, players[1].position.z)) {
            for (let i = 1; i < colaSerpiente.length; i++) {
                
            var ultimaPosicion = ultimaPosJ1[ultimaPosJ1.length-i];
            colaSerpiente[i].position.set=  (ultimaPosicion.x,0,ultimaPosicion.z);
        
            }

            for (let i = 1; i < colaSerpiente2.length; i++) {
            var ultimaPosicion = ultimaPosJ2[ultimaPosJ2.length -i];
            colaSerpiente2[i].position.set = (ultimaPosicion.x,0,ultimaPosicion.z);
            }
        
        }
    }
}

function colisionFruta(){
    if(cantidadJugadores==1){
        if (players[0].position.distanceTo(laFruta[0].position) < 5) {
    // nueva posición de la fruta
            var fruta = spawnAppleVector();
            console.log("hay colision");
            laFruta[0].position.set(fruta.x,0,fruta.z);
            var nuevaSeccion = colaSerpiente[0].clone();
            nuevaSeccion.position.set((players[0].position.x)-2,0,(players[0].position.z)-5);
            console.log(nuevaSeccion.position);
            colaSerpiente.push(nuevaSeccion);
            scene.add(colaSerpiente[colaSerpiente.length-1]);
            $(".JugadoreLeft input").remove()
            puntajeJugador1 += 5;
            $(".JugadoreLeft .puntaje1").append("<input class='puntaje' id='puntajejugador1' value="+puntajeJugador1+" style='width: 50%; background-color: rgba(239, 184, 16, 0.7); border-radius: 10px' disabled></input>");
            
        }
    }else{
        if (players[0].position.distanceTo(laFruta[0].position) < 5) {
    // nueva posición de la fruta
            var fruta = spawnAppleVector();
            console.log("hay colision");
            laFruta[0].position.set(fruta.x,0,fruta.z);
            var nuevaSeccion = colaSerpiente[0].clone();
            nuevaSeccion.position.set((players[0].position.x)-2,0,(players[0].position.z)-5);
            console.log(nuevaSeccion.position);
            colaSerpiente.push(nuevaSeccion);
            scene.add(colaSerpiente[colaSerpiente.length-1]);
            $(".JugadoreLeft input").remove()
            puntajeJugador1 += 5;
            $(".JugadoreLeft .puntaje1").append("<input class='puntaje' id='puntajejugador1' value="+puntajeJugador1+" style='width: 50%; background-color: rgba(239, 184, 16, 0.7); border-radius: 10px' disabled></input>");
            
        }
        if (players[1].position.distanceTo(laFruta[0].position) < 5) {
        // nueva posición de la fruta
                    var fruta = spawnAppleVector();
                    console.log("hay colision");
                    laFruta[0].position.set(fruta.x,0,fruta.z);
                    var nuevaSeccion = colaSerpiente2[0].clone();
                    nuevaSeccion.position.set((players[1].position.x)-2,0,(players[1].position.z)-5);
                    colaSerpiente2.push(nuevaSeccion);
                    scene.add(colaSerpiente2[colaSerpiente2.length-1]);
                    $(".JugadorRight input").remove()
                    puntajeJugador2 += 5;
                    $(".JugadorRight .puntaje2").append("<input class='puntaje' id='puntajejugador2' value="+puntajeJugador2+" style='width: 50%; background-color: rgba(239, 184, 16, 0.7); border-radius: 10px' disabled></input>"); 
        }
    }
}

function movimiento(){
   
    if(cantidadJugadores=="1"){
        if (!pausa && !stop && !paraElCarroMaster(players[0].position.x, players[0].position.z )) {
            players[0].translateX(direction.x * deltatime * velocidad);
            players[0].translateZ(direction.z * deltatime * velocidad);
        }else{
        
            if(paraElCarroMaster(players[0].position.x,players[0].position.z)){
                if(!explosion){
                explode(players[0].position.x, players[0].position.z);
                explosion=true;
                }
            }
           
        }
    }else{
        if (!pausa && !stop && (!paraElCarroMaster(players[0].position.x, players[0].position.z) && !paraElCarroMaster(players[1].position.x, players[1].position.z))) {
            players[0].translateX(direction.x * deltatime * velocidad);
            players[0].translateZ(direction.z * deltatime * velocidad);
            players[1].translateX(direction.x * deltatime * velocidad);
            players[1].translateZ(direction.z * deltatime * velocidad);
        }else{
        
            if(paraElCarroMaster(players[0].position.x,players[0].position.z)){
                if(!explosion){
                explode(players[0].position.x, players[0].position.z);
                explosion=true;
            }
            }else if(paraElCarroMaster(players[1].position.x,players[1].position.z)){
                if(!explosion){
                explode(players[1].position.x, players[1].position.z);
                explosion=true;
              }
            }
           
        }
    }
}

