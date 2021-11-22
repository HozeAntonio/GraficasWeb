function playa() {
    loadOBJWithMTL(
        "../modelos/",
        "playa_surf.obj",
        "playa_surf.mtl",
        (surf) => {
            surf.scale.set(.1, .1, .1);
            surf.rotation.set(THREE.Math.degToRad(-90), THREE.Math.degToRad(45), THREE.Math.degToRad(90));
            surf.position.set(-75, 0, 0);
            var tabla2 = surf.clone();
            var tabla3 = surf.clone();
            var tabla4 = surf.clone();
            tabla2.position.set(80, 0, -40);
            tabla2.rotation.set(THREE.Math.degToRad(90), THREE.Math.degToRad(180), THREE.Math.degToRad(0));
            tabla3.position.set(-90, 0, -40);
            tabla4.position.set(-60, 0, 40);
            anim.push(surf);
          
            anim.push(tabla3);
            anim.push(tabla4);
            scene.add(surf);
            scene.add(tabla2);
            scene.add(tabla3);
            scene.add(tabla4);
            RESOURCES_LOADED=true;
        }
    );
    loadOBJWithMTL(
        "../modelos/",
        "playa_palma.obj",
        "playa_palma.mtl",
        (palmera) => {
            palmera.scale.set(.03, .03, .03);

            palmera.position.set(60, 0, 0);
            var palmera2 = palmera.clone();
            var palmera3 = palmera.clone();
            palmera2.position.set(80, 0, -30);
            palmera3.position.set(80, 0, 30);
            // var edificioSmol =ion.set(0, THREE.Math.degToRad(-180), 0);
            // edificioSmol.posi edificio.clone();
            // edificioSmol.rotattion.set(80, 0, -40);


            scene.add(palmera);
            scene.add(palmera2);
            scene.add(palmera3);
            // scene.add(edificioSmol);
        }
    );
}