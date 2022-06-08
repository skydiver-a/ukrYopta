const options = document.querySelector('.options');
const optBtns = document.querySelectorAll('.option');

options.addEventListener("click", (event) => {
  if (event.target.classList.contains("option")) {
    optBtns.forEach(item => {
      (item === event.target)
        ? item.classList.add('active')
        : item.classList.remove('active');
    });
  }
});
/*
darkMode.addEventListener('click', () => {
	darkMode.toggle("dark").css(darkMode.hasClass("dark")
				? { background: "#202225", color: "#f9f9f9" }
				: { background: "#f9f9f9", color: "#202225" }
		);
});
*/