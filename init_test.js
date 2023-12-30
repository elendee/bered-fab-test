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

	let alerting_fail = setTimeout(() => {
		hal('error', 'probably invalid SVG', 5000 )
	})

	let objects = await new Promise( resolve => {
		fabric.loadSVGFromURL( testsvg,  ( objects, options ) => {
			resolve( objects )
			clearTimeout( alerting_fail )
		})
	})

	window.loaded_objs = objects

	for( let i = 0; i < loaded_objs.length; i++ ){
        fCanvas.add( loaded_objs[i] )
	}

})()
