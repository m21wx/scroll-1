	
	let section = Array.from(document.querySelectorAll('section'));
	window.addEventListener('scroll',(e)=>{
		section.forEach(e=>{
			let pageScrollY = window.scrollY ;
			let sectionTop = e.offsetTop ;
			let sectionHight= e.offsetTop + e.offsetHeight - 50;
			let a = document.querySelector('.'+ e.id)

			if(pageScrollY  >= sectionTop &&  pageScrollY <= sectionHight ){
				a.classList.add('active')
		
		
			}else{
					a.classList.remove('active')
			}
			
		})
		
	})