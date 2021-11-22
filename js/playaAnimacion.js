function playaAnimacion(){
    if( RESOURCES_LOADED){
        if (anim[0].position.z > -130) {
            anim[2].translateX(direction.z * deltatime * 10);
            anim[1].translateX(direction.z * deltatime * 10);
            anim[0].translateX(direction.z * deltatime * 10);
        } else {
            anim[0].position.set(-75, 0, 80);
            anim[1].position.set(-90, 0, 120);
            anim[2].position.set(-60, 0, 110);
        }
    }
}

