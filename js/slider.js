// get slides
let sliderDivs = Array.from(document.querySelectorAll(".screen div"));

// create ul
let ulBullets = document.createElement("ul");

// set ul id
let ulId = ulBullets.setAttribute("id", "pagination-ul");

// set ul class
let ulclass = ulBullets.setAttribute("class", "bullets");
// create lis
for (let i = 1; i <= sliderDivs.length; i++) {
	// li
	let li = document.createElement("li");

	// set attribute
	li.setAttribute("data-index", i);
	ulBullets.appendChild(li);
}
// append ul
document.querySelector(".container").append(ulBullets);

// get created ul
let createdUl = document.querySelector(".bullets");

// set default slide
sliderDivs[0].classList.add("active");

// set default bullet
createdUl.children[0].classList.add("active");

function theChecker(e) {
	// remove active class from all li
	e.target.parentElement.querySelectorAll("li").forEach((li) => {
		li.classList.remove("active");
	});
	// add active class to target li
	e.target.classList.add("active");
	// remove active class from all slides
	sliderDivs.forEach((div) => {
		div.classList.remove("active");
	});
	sliderDivs[e.target.dataset.index - 1].classList.add("active");

	document.querySelector(
		".backg"
	).style.cssText = `background-image: url(${sliderDivs[
		e.target.dataset.index - 1
	].children[0].getAttribute("src")})`;
}

createdUl.querySelectorAll("li").forEach((li) => {
	li.addEventListener("click", theChecker);
});

// create wall effect
document.querySelector("button").addEventListener("click", function (e) {
	setTimeout(() => {
		document.querySelector(".overlay").style.cssText =
			"transform: translateY(0)";
		setTimeout(() => {
			document.querySelector(".page-content").style.cssText =
				"transform: translateY(0)";
		}, 1000);
	}, 1000);
	document.querySelectorAll("button").forEach((div) => {
		div.classList.add("disappear");
	});
});
document.querySelector(".bullet").addEventListener("click", function (e) {
	document.querySelector(".page-content").style.cssText =
		"transform: translateY(-100%)";

	setTimeout(() => {
		document.querySelector(".overlay").style.cssText =
			"transform: translateY(-100%)";
		setTimeout(() => {
			document.querySelectorAll("button").forEach((div) => {
				div.classList.remove("disappear");
			});
		}, 1000);
	}, 1000);
});
