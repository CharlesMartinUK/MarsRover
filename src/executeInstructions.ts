
import {Rover} from "./rover"
import {Plateau } from "./plateau"


export function doOneCommand(rover:Rover, plat:Plateau,c:string) {
	
	switch(c) {
		case "L":
			rover.rotateLeft()
			break
		case "R":
			rover.rotateRight()
			break
		case "M":
					
			// y coordinates are inverted, so bottom y is 0
			switch(rover.direction) {// note plat width of 5 is 0 - 5 (5 is valid)
				case "N":
					if((rover.y+=1) > plat.height) rover.y = 0
					break	
				case "S":
					if((rover.y-=1) < 0) rover.y = plat.height
					break
				case "W":
					if((rover.x-=1) < 0) rover.x = plat.width
					break
				case "E":
					if((rover.x+=1) > plat.width) rover.x = 0
					break
			}
					
			break
	}
	
	return [rover.x, rover.y, rover.direction]
}


export function executeInstructions(rover:Rover, plat:Plateau, command:string, action:Function = null) {
	
	for(let c of command) {
			
		doOneCommand(rover,plat,c)
			
		if(action != null) action ()
	}
	
}