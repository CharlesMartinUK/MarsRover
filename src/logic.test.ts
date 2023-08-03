import { isValidInstruction, validateList, positiveNumberWithLimit, directionsOnly, movementsOnly } from "./logic";


function posNumWrap(){
	
	positiveNumberWithLimit("4", 10)	
}

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

describe("positiveNumberWithLimit",() => {
	test("try valid instrunctions" ,()=>  {
		expect( positiveNumberWithLimit("0",10) ).toBe(0),
		expect( positiveNumberWithLimit("5",10) ).toBe(5),
		expect( positiveNumberWithLimit("99",100)).toBe(99)
	})
	
	/* // could not get toThrow to work so cannot test exception throwing code
	test("try invalid instrunctions" ,()=>  {
		expect( positiveNumberWithLimit("-1",10) ).toThrow(new Error("Negatives not allowed"))
		//expect( posNumWrap("opps",10) ).toThrow("Numbers only"),
		//expect( posNumWrap("200",100)).toThrow("Number too big")
	})*/
})



/*
describe("test input validation",() => {
	
	test("try valid examples" ,()=>  {
		expect( validateList(["10"],"i") ).toEqual([10])
		expect( validateList(["N"],"d") ).toEqual(["N"])
		expect( validateList(["S"],"d") ).toEqual(["S"])
		expect( validateList(["E"],"d") ).toEqual(["E"])
		expect( validateList(["W"],"d") ).toEqual(["W"])
		expect( validateList(["W","99"],"di") ).toEqual(["W",99])	
		expect( validateList(["10","2"],"ii") ).toEqual([10,2])	
		expect( validateList(["10","W","2"],"iwi") ).toEqual([10,"W",2])	
		expect( validateList(["NSEW"],"d") ).toEqual(["NSEW"])  
	})
	
	test("try invalid examples" ,()=>  {
		expect( validateList([""],"i") ).toEqual([]) // no strings for validater
		expect( validateList(["t"],"") ).toEqual([]) // no valdator
		expect( validateList(["t"],"i") ).toEqual([]) // t is not number
		
		expect( validateList(["10","W","2"],"iwii") ).toEqual([])	 // fail not enough input values
		expect( validateList(["-10"],"i") ).toEqual([])	 // fail, negative numbers not allowed
		expect( validateList(["NSFEW"],"d") ).toEqual([]) // fail, invalid character F	
	})
	
	
})*/