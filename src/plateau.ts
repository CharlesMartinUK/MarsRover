export class Plateau {

	width:number
	height:number

	grid:number[][]

	
	constructor(width:number, height:number) {
		this.grid =new Array(height).fill(0).map( () => new Array(width).fill(0) )
		this.width = width
		this.height = height
	}
	
	move(x:number, y:number, mx:number, my:number) {
		
		let nx = x+mx
		
		//console.log(x," ",mx, " ",nx)
		
		if(nx < 0) nx = this.width+nx
		else if(nx >= this.width) nx -= this.width
		
		let ny = y+my
		if(ny < 0) ny = this.height+ny
		else if(ny >= this.height) ny -= this.height
		//console.log(nx," ",ny)
		return [nx, ny]
	}
	

}