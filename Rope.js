class Rope {
    constructor(bodyA , bodyB){
        var options = {
            //JSON format(java Script Object Notation)
            bodyA:bodyA ,
            bodyB:bodyB , 
            length:10 ,
            stiffness:0.04 
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);   
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB =this.rope.bodyB.position;
        strokeWeight(8);
    line(pointA.x , pointA.y , pointB.x , pointB.y) ;
    }

}