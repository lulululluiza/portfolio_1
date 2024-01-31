//body
const body = document.querySelectorAll(".main-content");

//sections (header + sections on main)
const sections = document.querySelectorAll(".section");

//div with the side buttons
const secBtns = document.querySelectorAll(".controls");

//side buttons
const secBtn = document.querySelectorAll(".control");

function PageTransitions() {
	for(let i=0; i<=secBtn.length; i++) {
		secBtn[i].addEventListener('click', (e) => {
			//altera a cor do botao para o padrao ativo
			const currentActiveBtn = document.querySelectorAll(".active-btn");
			currentActiveBtn[0].classList.remove('active-btn')
			secBtn[i].classList.add('active-btn')

			//de acordo com o botao ativo, altera a view ativa
			const currentActiveSection = document.querySelectorAll(".active");
			currentActiveSection[0].classList.remove('active')
			const newCurrentActiveSection = document.querySelectorAll("#"+secBtn[i].dataset.id);
			newCurrentActiveSection[0].classList.add('active')
		})
	}	
}

PageTransitions()

