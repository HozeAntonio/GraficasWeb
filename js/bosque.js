function bosque() {
    loadOBJWithMTL(
        "../modelos/",
        "bosque_tronco.obj",
        "bosque_tronco.mtl",
        (tronco) => {
            tronco.scale.set(10, 10, 10);
            var grupoTroncos = new THREE.Group();
            tronco.rotation.set(0, THREE.Math.degToRad(90), THREE.Math.degToRad(90));
            tronco.position.set(55, 0, -75);
            for (var i = 0; i <= 3; i++) {
                tronco = tronco.clone();
                grupoTroncos.add(tronco);
                scene.add(grupoTroncos);
                tronco.position.z += 25;
            }
            var grupoIzq = grupoTroncos.clone();
            var grupoAbajo = grupoTroncos.clone();
            var grupoArriba = grupoTroncos.clone();

            grupoIzq.position.x = -110;
            grupoAbajo.position.x = 0;
            grupoArriba.position.x = 0;
            grupoAbajo.position.z = 110;
            grupoArriba.position.z = 0;

            //ROTACION 

            grupoAbajo.rotation.y = THREE.Math.degToRad(90);
            grupoArriba.rotation.y = THREE.Math.degToRad(90);
        
            scene.add(tronco);
            scene.add(grupoIzq);
            scene.add(grupoAbajo);
            scene.add(grupoArriba);
            
        }
    );

    loadOBJWithMTL(
        "../modelos/",
        "bosque_ardilla.obj",
        "bosque_ardilla.mtl",
        (ardilla) => {
            ardilla.scale.set(.25, .25, .25);
            ardilla.rotation.set(0, THREE.Math.degToRad(-45), 0);
            ardilla.position.set(51, 0, -51);
            var ardillaLatDerecha = ardilla.clone();
            var ardillaLatIzquierda = ardilla.clone();
            var ardillaLatIzquierdaArriba = ardilla.clone();

            ardillaLatDerecha.position.set(51, 0, 51);
            ardillaLatIzquierdaArriba.position.set(-51, 0, -51);
            ardillaLatIzquierda.position.set(-51, 0, 51);
            ardillaLatDerecha.rotation.set(0, THREE.Math.degToRad(-135), 0);
            ardillaLatIzquierdaArriba.rotation.set(0, THREE.Math.degToRad(45), 0);
            ardillaLatIzquierda.rotation.set(0, THREE.Math.degToRad(135), 0);

            scene.add(ardilla);
            scene.add(ardillaLatDerecha);
            scene.add(ardillaLatIzquierdaArriba);
            scene.add(ardillaLatIzquierda);
            anim.push(ardilla);
            anim.push(ardillaLatDerecha);
            anim.push(ardillaLatIzquierdaArriba);
            anim.push(ardillaLatIzquierda);
            
            RESOURCES_LOADED=true;
        }
    );
}