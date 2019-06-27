
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

	console.log(req.query)


	for (i = 0; i < Object.keys(req.query).length; i++) {
		console.log("jeff2",Object.keys(req.query)[i])

		if (Object.keys(req.query)[i]=='rating' & i==0){
			query += `properties.rating = ${req.query.rating}`
		}else if(Object.keys(req.query)[i]=='rating'){
			query += ` and properties.rating = ${req.query.rating}`
		}


		if (Object.keys(req.query)[i]=='rooms' && i==0){
			query += `properties.rooms = ${req.query.rooms}`
		}else if(Object.keys(req.query)[i]=='rooms'){
			query += ` and properties.rooms = ${req.query.rooms}`
		}
		if (Object.keys(req.query)[i]=='city' && i==0){
			query += `city.id = '${req.query.city}`
		}else if(Object.keys(req.query)[i]=='city'){
			query += ` and city.id = '${req.query.city}'`
		}
		if (Object.keys(req.query)[i]=='country' && i==0){
			query += `country.id = ${req.query.country}`
		}else if(Object.keys(req.query)[i]=='country'){
			 query += `and country.id = ${req.query.country}`
		}
		if (Object.keys(req.query)[i]=='price' && i==0){
			query += `properties.price = ${req.query.price}`
		}else if(Object.keys(req.query)[i]=='price'){
			query += `and properties.price = ${req.query.price}`
		}
		if (Object.keys(req.query)[i]=='plus' && i==0){
			query += `properties.plus = '${req.query.plus}'`
		}else if(Object.keys(req.query)[i]=='plus'){
			query += `and properties.plus = '${req.query.plus}'`
		}
		if (Object.keys(req.query)[i]=='type' && i==0){
			query += `type.id = ${req.query.type}`
		}else if(Object.keys(req.query)[i]=='type'){
			query += `and type.id = ${req.query.type}`
		}
	}

	console.log(query)
	db.query(query, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result.rows)
		}
	})
}
