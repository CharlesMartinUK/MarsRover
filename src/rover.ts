export class Rover {
	x:number
	y:number
	direction:string
	
	constructor(x:number, y:number, d:string= "N") {
		this.x = x
		this.y = y
		this.direction = d
	}
	
	rotateLeft(){
		
		const swap = {"N":"W", "W": "S", "S":"E", "E":"N" }
		
		this.direction = swap[this.direction]
				
		return this.direction
	}
	
	rotateRight(){
		
		const swap = {"N":"E", "E":"S", "S":"W", "W":"N"}
		
		this.direction = swap[this.direction]
		
		return this.direction
	}
	
	
	
	getDirection(){
		return this.direction
	}

}