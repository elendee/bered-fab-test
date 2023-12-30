import env from './env.js'
import * as lib from './js/lib.js'


// console.log('asdf')


const canvas = lib.b('canvas', 'my-canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
document.body.append( canvas)

const fCanvas = window.fCanvas = new fabric.Canvas( canvas, {
	backgroundColor: 'yellow'
})

console.log('bad: ', env.BAD_SVG.replace('_user_', '').replace('.svg', '') )
console.log('good: ', env.SAMPLE_SVG.replace('_user_', '').replace('.svg', '') )

const testsvg = env.SAMPLE_SVG
// const testsvg = '/clients/bered_arcgis/bered_svg/' + env.BAD_SVG

;(async() => {

	// let alerting_fail = setTimeout(() => {
	// 	hal('error', 'probably invalid SVG', 3000 )
	// })

	const svg_string = await lib.loadFileAsString( testsvg )

	console.log('party:" ', svg_string )

	let objects = await new Promise( resolve => {
		try{
			fabric.loadSVGFromURL( testsvg,  ( objects, options ) => {
				setTimeout(() => resolve, 5000 )
				// clearTimeout( alerting_fail )
			}, err => {
				console.log('yea errr...')
				hal('error', 'probably invalid SVG', 3000 )

			})			
		}catch( err){
			console.log('catch err: ', err )
		}

	})

	window.loaded_objs = objects

	for( let i = 0; i < loaded_objs.length; i++ ){
        fCanvas.add( loaded_objs[i] )
	}

})()
