import { Rover } from "./rover";


describe("test rotation",() => {
	
	let r = new Rover(0,0)
	
	test("try left rotation" ,()=>  {
		expect( r.rotateLeft() ).toBe("W"),
		expect( r.rotateLeft() ).toBe("S"),
		expect( r.rotateLeft() ).toBe("E"),
		expect( r.rotateLeft() ).toBe("N"),
		expect( r.rotateLeft() ).toBe("W")
	}),
	test("try right rotation" ,()=>  {
		expect( r.rotateRight() ).toBe("N"),
		expect( r.rotateRight() ).toBe("E"),
		expect( r.rotateRight() ).toBe("S"),
		expect( r.rotateRight() ).toBe("W"),
		expect( r.rotateRight() ).toBe("N")
	})
	
	
})