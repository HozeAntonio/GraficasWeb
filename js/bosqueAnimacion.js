function bosqueAnimacion(){
    if( RESOURCES_LOADED){
        if (anim[0].position.y < 10) {
            anim[3].rotateY(direction.z * deltatime);
            anim[3].translateY(direction.y * deltatime);
            anim[2].rotateY(direction.z * deltatime);
            anim[2].translateY(direction.y * deltatime);
            anim[1].rotateY(direction.z * deltatime);
            anim[1].translateY(direction.y * deltatime);
            anim[0].rotateY(direction.z * deltatime);
            anim[0].translateY(direction.y * deltatime);
        } else {
            anim[0].position.set(51, 0, -51);
            anim[1].position.set(51, 0, 51);
            anim[2].position.set(-51, 0, -51);
            anim[3].position.set(-51, 0, 51);
        }
    }
}