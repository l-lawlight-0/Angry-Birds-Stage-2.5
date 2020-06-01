class Chain{
    constructor(body_a,body_b){
            var option = {
                bodyA : body_a,
                bodyB: body_b,
                stiffness: 0.4
            }
        this.chain = Constraint.create(option);
        World.add(world,this.chain);
        console.log(this.chain);
        
    }
    display(){
        var pos_A = this.chain.bodyA.position;
        var pos_B = this.chain.bodyB.position;
       line(pos_A.x,pos_A.y,pos_B.x,pos_B.y) ;
    }
}