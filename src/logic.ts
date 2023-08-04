

export function isValidInstruction(input:string) {
	
	return ["L","R","M"].includes(input)
	
}


export function positiveNumberWithLimit(s:string, limit:number){
	
	let t = parseInt(s)
	if(isNaN(t)) throw new Error("Numbers only")
	if(t < 0) throw new Error("Negatives not allowed")
	if(t > limit) throw new Error("Number too big")
		
	return t
}

export function directionsOnly(s:string){
	
	s = s.toUpperCase()
	
	if (/^[N|S|W|E\s]*$/.test(s) == true) return s
	
	throw new TypeError("invalid direction N S E W only")
}

export function movementsOnly(s:string){
	
	s = s.toUpperCase()
	
	if (/^[L|R|M\s]*$/.test(s) == true) return s
	
	throw new TypeError("invalid movment direction L R M only")
}





export const prompt = require('prompt-sync')();




export function validateList(sv:string[], val:string ){
	
	const r : (number | string)[] = []
	
	for(let i = 0 ; i < val.length; i++){
			
		//console.log("checking "+i)
		if(val[i] == "i") {
			let w = parseInt(sv[i])
			if( isNaN(w) ) {
				console.log("number only")
				return []
			}
			
			else if(w < 0) {
				console.log("negative numbers not allowed")
				return []
			}
			else {
				//console.log("adding number")
				r.push(w)
			}
		}else {
			// only N S W E characters allowed
			if(/^[N|S|W|E\s]*$/.test(sv[i]))
				r.push(sv[i])
			else return []
		}
			
		//console.log("length is now "+ r.length)
	}
	
	return r
	
}


export function input(message:string, numP:number, tester:Function ) : (number | string)[] {
	
	//console.log(val)
	
	
	
	let r : (number | string)[] = []
	

	while(true){
		r.length = 0 // reset
		
		const answer = prompt(message);
		const sv = answer.split(" ") 
			
		if(sv.length != numP){
			console.log("ERROR: enter "+numP+" items")
			continue
		}
			
		try{
			r = tester(sv)		
		}catch(err) {
			console.log("ERROR :",err.message)
		}
		
		//r = validateList(sv, val) 
		
		if(r.length > 0) return r
	}
			
	
}


export function printMap(px:number, py:number, width:number, height:number) {

	console.clear()

	for(let y = height; y >= 0;y--) {
			
		for(let x = 0; x <= width;x++) {
				
			if((y == py) && ( px == x))
				process.stdout.write("X")
			else
				process.stdout.write("⬛") // ⬛
		}
		console.log(" ")// for newline
			
	}

}	

