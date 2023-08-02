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
		
		switch(this.direction) {
			case "N":
				this.direction = "W"
				break
			case "W":
				this.direction = "S"
				break
			case "S":
				this.direction = "E"
				break
			case "E":
				this.direction = "N"
				break
		}
		
		return this.direction
	}
	
	rotateRight(){
		
		switch(this.direction) {
			case "N":
				this.direction = "E"
				break
			case "E":
				this.direction = "S"
				break
			case "S":
				this.direction = "W"
				break
			case "W":
				this.direction = "N"
				break
		}
		
		return this.direction
	}
	
	
	
	getDirection(){
		return this.direction
	}

}