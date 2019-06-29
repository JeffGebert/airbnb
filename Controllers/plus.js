
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
ON properties.type = type.id WHERE plus='yes'`


	console.log(query)
	db.query(query, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result.rows)
		}
	})
}
