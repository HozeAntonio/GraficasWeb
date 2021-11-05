function ciudadAnimacion() {
if( RESOURCES_LOADED){
    if (anim[0].position.z > -130) {
        anim[2].translateZ(direction.z * deltatime * 10);
        anim[1].translateZ(direction.z * deltatime * 10);
        anim[0].translateZ(direction.z * deltatime * 10);
        console.log(anim[0].position.z)
    } else {
        anim[0].position.set(-58, 0, 70);
        anim[1].position.set(-58, 0, 90);
        anim[2].position.set(-58, 0, 110);
    }
}
  
}