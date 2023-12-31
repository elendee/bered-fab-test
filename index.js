const env = require('./.env.js')
const http = require('http');
const fs = require('fs')
const express = require('express');





const app = express();


console.log('LOADING', env.SAMPLE_SVG )


// const file = fs.readFileSync( env.SAMPLE_SVG )
let SVG_STRING

fs.readFile( env.SAMPLE_SVG, (error, fileBuffer) => {
	if( error ){
		console.error('Error reading file:', error )
		return;
	}
	SVG_STRING = fileBuffer.toString('utf8')
})


const port = 3000


app.use('/', express.static( './' ))
// app.use('/js', express.static( './js' ))
// app.use('/fs', express.static( './fs' ))
// `app.use('/inc', express.static( './inc' ))
// app.use('/resource', express.static( './resource' ))
// app.use('/node_modules/', express.static( './node_modules/' ))
// app.use('/geometries', express.static( './geometries' ))


app.get('/', (req, res) => {

	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

	res.send(`
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>fab svg test</title>
	<link rel='stylesheet' href='/style.css'>
	<script type="text/javascript" src='https://cdnjs.cloudflare.com/ajax/libs/fabric.js/5.3.1/fabric.min.js'></script>
</head>
<body>

	<script type="module" src='/init_test.js'></script>

	<div id='svg'>${ SVG_STRING }</div>

</body>
</html>`)
})

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})




// const server = http.createServer( async(request, response) => {

// 	response.writeHead(200, {
// 		'Content-Type': 'text/html'
// 	})

// 	response.end(`
// <!DOCTYPE html>
// <html>
// <head>
// 	<meta charset="utf-8">
// 	<meta name="viewport" content="width=device-width, initial-scale=1">
// 	<title>fab svg test</title>
// 	<link rel='stylesheet' href='${ env.PUBLIC_ROOT }/style.css'>
// 	<script type="text/javascript" src='https://cdnjs.cloudflare.com/ajax/libs/fabric.js/5.3.1/fabric.min.js'></script>
// </head>
// <body>

// 	<script type="module" src='${ env.PUBLIC_ROOT }/init_test.js'></script>

// 	<div id='svg'>${ SVG_STRING }</div>

// </body>
// </html>`)
// });



// 