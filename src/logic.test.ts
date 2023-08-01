import { isValidInstruction } from "./logic";


describe("test valid instruction",() => {
	test("try valid instrunctions" ,()=>  {
		expect( isValidInstruction("L")).toBe(true),
		expect( isValidInstruction("R")).toBe(true),
		expect( isValidInstruction("M")).toBe(true)
	}),
	
	test("try invalid instrunctions" ,()=>  {
		expect( isValidInstruction("")).toBe(false),
		expect( isValidInstruction("f")).toBe(false),
		expect( isValidInstruction("b")).toBe(false)
	})
})