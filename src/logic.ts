

export function isValidInstruction(input:string) {
	
	return ["L","R","M"].includes(input)
	
}


export const prompt = require('prompt-sync')();


export function input(message:string, val:string) : (number | string)[] {
	
	//console.log(val)
	
	const r : (number | string)[] = []
	
	outer:
	while(true){
		r.length = 0 // reset
		
		const answer = prompt(message);
		const sv = answer.split(" ") 
				
		if(sv.length != val.length) {
			
			console.log("Please enter "+val.length+" items")
			continue
		}
				
			
		for(let i = 0 ; i < val.length; i++){
			
			//console.log("checking "+i)
			if(val[i] == "i") {
				let w = parseInt(sv[i])
				if( isNaN(w) ) {
					console.log("number only")
					continue outer
					}
				else {
					//console.log("adding number")
					r.push(w)
				}
			}else {
				r.push(sv[i])
			}
			
			//console.log("length is now "+ r.length)
		}
	
		return r
	}
			
	
}


export function printMap(px:number, py:number, width:number, height:number) {

	console.clear()

	for(let y = height; y >= 0;y--) {
			
		for(let x = 0; x <= width;x++) {
				
			if((y == py) && ( px == x))
				process.stdout.write("X")
			else
				process.stdout.write("⬛")
		}
		console.log(" ")// for newline
			
	}

}	

