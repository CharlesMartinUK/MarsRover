import {Rover} from "./rover"
import {Plateau } from "./plateau"
import {input, movementsOnly, directionsOnly, positiveNumberWithLimit, printMap} from "./logic"


var sleep = require('system-sleep');



function main() {

	
	const platDim = input('Input width and height of Plateau (eg 5 5): ',2, (list) => {
		return [positiveNumberWithLimit(list[0],10),  positiveNumberWithLimit(list[1],10) ]
	});
	
	

	const plat = new Plateau(Number(platDim[0]), Number(platDim[1]) )
	
	while(true) { // loop for each rover
	
		console.log("*********** ROVER INPUT *************")
		const firstLine = input('Input x y and inital direction (eg 1 2 N): ',3, (list) => {
			return [positiveNumberWithLimit(list[0], plat.width),  
					positiveNumberWithLimit(list[1], plat.height),
					directionsOnly(list[2])	
					]
		});
		
		
		let secondLine = input('Movement directions (eg LMMRLLR): ', 1, (list) => {
			return [ movementsOnly(list[0]) ]
		});
		
			
		const rover = new Rover( Number(firstLine[0]), Number(firstLine[1]), String(firstLine[2]) )
		
		for(let c of String(secondLine)) {
			
			switch(c) {
				case "L":
					rover.rotateLeft()
					break
				case "R":
					rover.rotateRight()
					break
				case "M":
					
					// y coordinates are inverted bottom y is 0
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
			
			printMap(rover.x, rover.y, plat.width, plat.height)
			console.log("CURRENT: Rover End Position and direction",rover.x," ", rover.y," ", rover.direction)
			sleep(1000)
		}
		console.log("Rover End Position and direction",rover.x," ", rover.y," ", rover.direction)
	}
	
}

main()