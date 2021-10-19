function ciudadAnimacion() {

    if (anim[0].position.z < -50) {
        anim[2].translateZ(direction.z * deltatime * 10);
        anim[1].translateZ(direction.z * deltatime * 10);
        anim[0].translateZ(direction.z * deltatime * 10);
    } else {
        anim[0].position.set(-58, 0, 40);
        anim[1].position.set(-58, 0, 60);
        anim[2].position.set(-58, 0, 80);
    }
}