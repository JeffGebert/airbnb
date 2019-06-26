
const db = require('./db.js')

module.exports = (req, res) => {
	// console.log('req.query', req.query)
	let query = `SELECT properties.id,properties.name,properties.rating, properties.rooms,city.id as city,country.id as country,type.id as roomtype,properties.price,properties.plus,properties.image
FROM properties
LEFT JOIN city
ON properties.city = city.id
LEFT JOIN country
ON properties.country = country.id
LEFT JOIN type
ON properties.type = type.id `

	if (req.query && Object.keys(req.query).length) { // add WHERE if request has query
		query += `WHERE `
	}

	console.log(Object.keys(req.query).length)
	console.log(Object.keys(req.query)[0])
	console.log(query.rating)

	if (req.query.rating) {
		if (Object.keys(req.query)[0]=='rating'){
			query += `properties.rating = ${req.query.rating}`
		}else{
			query += ` and properties.rating = ${req.query.rating}`
		}
	}
	if (req.query.rooms) {
		if (Object.keys(req.query)[0]=='rooms'){
			query += `properties.rooms = ${req.query.rooms}`
		}else{
			query += ` and properties.rooms = ${req.query.rooms}`
		}
	}
	if (req.query.city) {
		if (Object.keys(req.query)[0]=='city'){
			query += `city.id = '${req.query.city}'`
		}else{
			query += ` and city.id = '${req.query.city}'`
		}
	}
	if (req.query.country) {
		if (Object.keys(req.query)[0]=='country'){
			query += `country.id = ${req.query.country}`
		}else{
		 	query += `and country.id = ${req.query.country}`
		}
	}

	if (req.query.price) {
		if (Object.keys(req.query)[0]=='price'){
			query += `properties.price = ${req.query.price}`
		}else{
			query += `and properties.price = ${req.query.price}`
		}
	}

	if (req.query.plus) {
		if (Object.keys(req.query)[0]=='plus'){
			query += `properties.plus = '${req.query.plus}'`
		}else{
			query += `and properties.plus = '${req.query.plus}'`
		}
	}

	if (req.query.roomtype) {
		if (Object.keys(req.query)[0]=='type'){
			query += `type.id = ${req.query.type}`
		}else{
			query += `and type.id = ${req.query.type}`
		}
	}

	console.log('query', query)


	db.query(query, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result.rows)
		}
	})
}
