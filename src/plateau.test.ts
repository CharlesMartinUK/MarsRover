import { Plateau } from  "./plateau"

describe("test rotation",() => {
	
	const p = new Plateau(5, 5)
	
	test("try moving horizontal" ,()=>  {
		
		expect( p.move(0,0, 1,0 ) ).toEqual([1,0]) ,
		expect( p.move(1,0, -1,0 ) ).toEqual([0,0]),
		expect( p.move(0,0, -1,0 ) ).toEqual([4,0]),  // test wrap left
		expect( p.move(0,0, -2,0 ) ).toEqual([3,0]),  // test wrap left + 2
		expect( p.move(4,0, 1,0 ) ).toEqual([0,0]), // test wrap right
		expect( p.move(4,0, 2,0 ) ).toEqual([1,0])  // test wrap right + 2
	})
	
	,
	test("try moving vertical" ,()=>  {
		
		expect( p.move(0,0, 0, 1 ) ).toEqual([0,1]) ,
		expect( p.move(0,1, 0, -1 ) ).toEqual([0,0]) ,
		expect( p.move(0,0, 0, -1 ) ).toEqual([0,4]),  // test wrap up
		expect( p.move(0,0, 0, -2 ) ).toEqual([0,3]),  // test wrap up + 2
		expect( p.move(0,4, 0, 1 ) ).toEqual([0,0]),  // test wrap down
		expect( p.move(0,4, 0, 2 ) ).toEqual([0,1])  // test wrap down + 2
	})
})