import {Rover} from "./rover"
import {Plateau } from "./plateau"
import {doOneCommand  } from "./executeInstructions"

describe("test executeInstructions",() => {
	
	const plat = new Plateau(5, 5 )
	
	
	test("try spinning right" ,()=>  {
		const rover = new Rover(0, 0,"N" )
		
		expect( doOneCommand(rover, plat,"R")  ).toEqual([0,0,"E"])
		expect( doOneCommand(rover, plat,"R")  ).toEqual([0,0,"S"])
		expect( doOneCommand(rover, plat,"R")  ).toEqual([0,0,"W"])
		expect( doOneCommand(rover, plat,"R")  ).toEqual([0,0,"N"])
	}),
	
	test("try spinning left" ,()=>  {
		const rover = new Rover(0, 0,"N" )
		
		expect( doOneCommand(rover, plat,"L")  ).toEqual([0,0,"W"])
		expect( doOneCommand(rover, plat,"L")  ).toEqual([0,0,"S"])
		expect( doOneCommand(rover, plat,"L")  ).toEqual([0,0,"E"])
		expect( doOneCommand(rover, plat,"L")  ).toEqual([0,0,"N"])
	}),
	
	
	test("try moving east" ,()=>  {
		const rover = new Rover(3, 3,"E" )
		expect( doOneCommand(rover, plat,"M")  ).toEqual([4,3,"E"])
	}),
	
	test("try moving west" ,()=>  {
		const rover = new Rover(3, 3,"W" )
		expect( doOneCommand(rover, plat,"M")  ).toEqual([2,3,"W"])
	}),
	
	test("try moving north" ,()=>  {
		const rover = new Rover(3, 3,"N" )
		expect( doOneCommand(rover, plat,"M")  ).toEqual([3,4,"N"])
	}),
	
	test("try moving south" ,()=>  {
		const rover = new Rover(3, 3,"S" )
		expect( doOneCommand(rover, plat,"M")  ).toEqual([3,2,"S"])
	}),
	
	
	
	test("try bottom wrap" ,()=>  {
		const rover = new Rover(0, 0,"S" )
		expect( doOneCommand(rover, plat,"M")  ).toEqual([0,5,"S"])// wrap around to top
	})
	
	test("try top wrap" ,()=>  {
		const rover = new Rover(0, 5,"N" )
		expect( doOneCommand(rover, plat,"M")  ).toEqual([0,0,"N"])// wrap around to bottom
	})
	
	test("try left wrap" ,()=>  {
		const rover = new Rover(0, 0,"W" )
		expect( doOneCommand(rover, plat,"M")  ).toEqual([5,0,"W"])// wrap around to right
	})
	
	test("try right wrap" ,()=>  {
		const rover = new Rover(5, 0,"E" )
		expect( doOneCommand(rover, plat,"M")  ).toEqual([0,0,"E"])// wrap around to left
	})
	
})