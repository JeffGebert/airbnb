
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
ON properties.type = type.id`

	if (req.query.rating) {
		query += ` WHERE properties.rating = ${req.query.rating}`
	}
	if (req.query.rooms) {
		query += ` WHERE properties.rooms = ${req.query.rooms}`
	}
	if (req.query.city) {
		query += ` WHERE city.id = '${req.query.city}'`
	}
	if (req.query.country) {
		query += ` WHERE country.id = ${req.query.country}`
	}

	if (req.query.price) {
		query += ` WHERE properties.price = ${req.query.price}`
	}

	if (req.query.plus) {
		query += ` WHERE properties.plus = '${req.query.plus}'`
	}

	if (req.query.roomtype) {
		query += ` WHERE type.id = ${req.query.type}`
	}




	db.query(query, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result.rows)
		}
	})
}
