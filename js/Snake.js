function Snake(material, geometry) {
    this.x = 0;
    this.y = 0; //QUE EN REALIDAD ES Z
    this.xspeed = 1;
    this.yspeed = 0;
    this.material = material;
    this.geometry = geometry;
    this.mesh;
    this.dir = function(x, y) {
        this.xspeed = x;
        this.yspeed = y + 1;

    }
    this.update = function() {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }

    this.draw = function() {

    }


}