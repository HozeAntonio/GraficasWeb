function explode(x, y) {
    parts.push(new ExplodeAnimation(x, y));
  }

function ExplodeAnimation(x, y) {
    var geometry = new THREE.Geometry();

    for (i = 0; i < totalObjects; i++) {
      var vertex = new THREE.Vector3();
      vertex.x = x;
      vertex.y = 0;
      vertex.z = y;

      geometry.vertices.push(vertex);
      dirs.push({
        x: Math.random() * movementSpeed - movementSpeed / 2,
        y: Math.random() * movementSpeed - movementSpeed / 2,
        z: Math.random() * movementSpeed - movementSpeed / 2,
      });
    }
    var material = new THREE.PointsMaterial({
      size: objectSize,
      color: colors[2],
    });
    var particles2 = new THREE.Points(geometry, material);

    this.object = particles2;
    this.status = true;

    this.xDir = Math.random() * movementSpeed - movementSpeed / 2;
    this.yDir = Math.random() * movementSpeed - movementSpeed / 2;
    this.zDir = Math.random() * movementSpeed - movementSpeed / 2;

    scene.add(this.object);

    this.update = function () {
      if (this.status == true) {
        var pCount = totalObjects;
        while (pCount--) {
          var particle2 = this.object.geometry.vertices[pCount];
          //particle.y += dirs[pCount].y;
          particle2.x += dirs[pCount].x;
          particle2.z += dirs[pCount].z;
        }
        this.object.geometry.verticesNeedUpdate = true;
      }
    };
  }

function colisionEntrePuntos(){
  if(cantidadJugadores == 1){
      for (let i = 0; i < colaSerpiente.length; i++) {
        if (players[0].position.distanceTo(colaSerpiente[i].position) < 1) {
            if(!explosion){
            explode(players[0].position.x, players[0].position.z);
            explosion = true;
            stop = true;
            }
          
        }
    }
  }else{
      for (let i = 0; i < colaSerpiente.length; i++) {
        if (players[0].position.distanceTo(colaSerpiente[i].position) < 1) {
            if(!explosion){
            explode(players[0].position.x, players[0].position.z);
            explosion = true;
            stop = true;
            }
          
        }
    }
    
    for (let i = 0; i < colaSerpiente2.length; i++) {
        if (players[1].position.distanceTo(colaSerpiente2[i].position) < 1) {
            if(!explosion){
            explode(players[1].position.x, players[1].position.z);
            explosion = true;
            stop=true;
            }
        }
    }
  }
 
}