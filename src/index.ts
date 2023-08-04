import {Rover} from "./rover"
import {Plateau } from "./plateau"
import {executeInstructions } from "./executeInstructions"
import {input, movementsOnly, directionsOnly, positiveNumberWithLimit, printMap} from "./logic"

var sleep = require('system-sleep');



	
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
		
		
	executeInstructions(rover, plat, String(secondLine), () => {
		printMap(rover.x, rover.y, plat.width, plat.height)
		console.log("CURRENT: Rover End Position and direction",rover.x," ", rover.y," ", rover.direction)
		sleep(1000)
	}			)
		
		//console.log("Rover End Position and direction",rover.x," ", rover.y," ", rover.direction)
}
	
