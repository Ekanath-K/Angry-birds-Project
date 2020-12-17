class Rope {
    constructor(body1, body2) {
        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffness:0.7,
            length:10
        }
        this.Rope = Constraint.create(options)

        World.add(world, this.Rope)
    }

    display(){
    push()
    strokeWeight(5);
    line(this.Rope.bodyA.position.x,this.Rope.bodyA.position.y, this.Rope.bodyB.position.x,this.Rope.bodyB.position.y)
    pop()
    }
}