
const db = require('./db.js')

module.exports = (req, res) => {
	// console.log('req.query', req.query)
	let query = `SELECT DISTINCT city.city as city,country.country as country,city.image
FROM properties
LEFT JOIN city
ON properties.city = city.id
LEFT JOIN country
ON properties.country = country.id
`


	db.query(query, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result.rows)
		}
	})
}
