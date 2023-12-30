import * as lib from './js/lib.js'

// console.log('asdf')

const canvas = lib.b('canvas', 'my-canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
document.body.append( canvas)

const fCanvas = window.fCanvas = new fabric.Canvas( canvas, {
	backgroundColor: 'yellow'
})

const testsvg = '/clients/bered/bered_svg/_user_1_1702012976547.svg'

fabric.loadSVGFromURL( testsvg,  ( objects, options ) => {

	window.loaded_objs = objects

	for( let i = 0; i < loaded_objs.length; i++ ){
        fCanvas.add( loaded_objs[i])
	//     setTimeout(() => {
	//         loaded_objs[i].left += 20 - ( Math.random() * 40 )
	//         loaded_objs[i].top += 20 - ( Math.random() * 40 )
	//         fCanvas.requestRenderAll()
	//     }, i * Math.random() * 100 )
	}

	// let shifting = setInterval(() => {
	// 	const obj = loaded_objs[ Math.floor( Math.random() * loaded_objs.length ) ]
    //     obj.left += 20 - ( Math.random() * 40 )
    //     obj.top += 20 - ( Math.random() * 40 )
    //     fCanvas.requestRenderAll()

	// }, 20 )

})
