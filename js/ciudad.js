function ciudad() {
    loadOBJWithMTL(
        "../modelos/",
        "ciudad_carro.obj",
        "ciudad_carro.mtl",
        (carro) => {
            carro.scale.set(.03, .04, .04);
            carro.rotation.set(0, THREE.Math.degToRad(-180), 0);
            carro.position.set(-58, 0, 0);
            var carroCopia = carro.clone();
            var carroCopia2 = carroCopia.clone();
            var carroDerecha = carroCopia2.clone();
            var carroDerecha2 = carroDerecha.clone();
            var carroDerecha3 = carroDerecha2.clone();
            carroCopia.position.set(-58, 0, 35);
            carroCopia2.position.set(-58, 0, -35);
            carroDerecha.position.set(58, 0, 0);
            carroDerecha2.position.set(58, 0, -35);
            carroDerecha3.position.set(58, 0, 35);

            scene.add(carro);
            anim.push(carro);
            scene.add(carroCopia);
            anim.push(carroCopia);
            scene.add(carroCopia2);
            anim.push(carroCopia2);
            scene.add(carroDerecha);
            anim.push(carroDerecha);
            scene.add(carroDerecha2);
            anim.push(carroDerecha2);
            scene.add(carroDerecha3);
            anim.push(carroDerecha3);
            RESOURCES_LOADED=true;
        }
    );

    loadOBJWithMTL(
        "../modelos/",
        "ciudad_edificio.obj",
        "ciudad_edificio.mtl",
        (edificio) => {
            edificio.scale.set(.7, .7, .7);
            edificio.rotation.set(0, THREE.Math.degToRad(90), 0);
            edificio.position.set(-75, 0, 30);
            var edificioSmol = edificio.clone();
            edificioSmol.rotation.set(0, THREE.Math.degToRad(-180), 0);
            edificioSmol.position.set(80, 0, -40);
            scene.add(edificio);
            scene.add(edificioSmol);
        }
    );
    loadOBJWithMTL(
        "../modelos/",
        "ciudad_edificio_grande.obj",
        "ciudad_edificio_grande.mtl",
        (edificioGrande) => {
            edificioGrande.scale.set(.8, .8, .8);

            edificioGrande.position.set(75, 0, 0);
            var edificioGrandeCopia = edificioGrande.clone();
            edificioGrande.position.set(-75, 0, -10);

            scene.add(edificioGrande);
            scene.add(edificioGrandeCopia);
        }
    );
}