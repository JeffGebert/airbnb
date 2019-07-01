window.onload=() =>{

	axios.get('/api/plus').then((res) => {

		let ul = document.getElementById('Plus2')
		console.log(ul)
		let images = res.data

		images.forEach((s)=>{
			let stars =''
			for(i=0; i<s.rating; i++){
				stars +='<i class="fas fa-star"></i>'
			}



			ul.insertAdjacentHTML('beforeEnd', `
			<div class="product">
				<div class="product-image" style="background-image: url('${s.image}')">
			</div>
			<span data-veloute="select-badge" class="_2dw42w"><span class="_1xxanas2"><span style="color: rgb(255, 255, 255);">Plus</span></span></span>
			<div class="_htj5lue" style="color: rgb(145, 70, 105);"><span class="_1xxanas2"><span style="color: rgb(145, 70, 105);">Verified<span aria-hidden="true"> · </span>Montréal</span></span></div>
			<div style="margin-top: 6px;"><div class="_1sibeedb"><div class="_b9qfkc2"><div class="_1dss1omb">${s.name}</div></div></div></div>
			<div style="margin-top: 4px;"><div><div class="_1yarz4r"><span><span><span class="_1jlnvra2"><span class="_1jlnvra2"><span class="_1jlnvra2"> <span class="_krjbj">Price:</span>${s.price}</span></span>/night</span><span class="_1jlnvra2"></span></span></span></div></div></div>
			<div style="margin-top: 2px;"><div class="_aq2oyh"><div class="_36rlri"><span class="_q27mtmr"><span role="img" aria-label="Rating 5 out of 5" class="_rs3rozr" style="width: 50px;"><span class="_83zdpk" style="width: 50px;"><span class="_1hj8l5ri" style="width: 50px;"></span></span></span></span><span class="_krjbj">`+ stars + `</span></div></div></div>
			`)
		})
	})

	axios.get('/api/cities').then((res) => {

		let products_ul = document.getElementById('cities')
		let images = res.data

		products_ul.innerHTML=''
		images.forEach((s)=>{
			products_ul.insertAdjacentHTML('beforeEnd', `<div class="city">
								<div class="cityimages" style="background-image: url(${s.image};);">
								</div>
								<div>
								<div class="citylabel">
									<span class="_1tmwryn">${s.city}</span>
								</div>
								<div class="countrylabel">
									<span class="_iq9zv0m">${s.country}</span>
								</div>
								</div>
						</div>
						</div>`

			)
		})
	})




}
