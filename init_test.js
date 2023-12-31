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

	const svg = document.getElementById('svg')

	const styles = svg.querySelectorAll('style')
	for( const s of styles ){
		s.remove()
	}

	const svg_string = svg.innerHTML





	// console.log('party:" ', svg_string )

	fabric.loadSVGFromString( svg_string, ( objects, options ) => {
		for( const obj of objects ){
			fCanvas.add( obj )
		}
		fCanvas.requestRenderAll()			
	});

})()
