const navEle = document.querySelectorAll("#TopNavLink > li");
const hoverDisplay = document.getElementById("navBoxHover");
const serviceContents = [
	document.getElementById("ServiveContent1"),
	document.getElementById("ServiveContent2"),
	document.getElementById("ServiveContent3"),
];
const nav = document.getElementById("nav");
const navPoints = nav.getBoundingClientRect();
let currentIndex = -1;

navEle.forEach((item, index) => {
	item.addEventListener("mouseover", () => {
		serviceContents.forEach((content) => {
			content.style.display = "none";
			if (content.parentNode === hoverDisplay) {
				hoverDisplay.removeChild(content);
			}
		});

		hoverDisplay.style.display = "block";
		serviceContents[index].style.display = "block";
		hoverDisplay.appendChild(serviceContents[index]);
		const navPoint = item.getBoundingClientRect();
		const hoverPoint = hoverDisplay.getBoundingClientRect();
		const navCenter = navPoint.left + navPoint.width / 2;
		hoverDisplay.style.left = `${navCenter - hoverPoint.width / 2}px`;
		currentIndex = index;
	});
});

hoverDisplay.addEventListener("mouseleave", () => {
	hideHoverDisplay();
});

nav.addEventListener("mouseleave", () => {
	hideHoverDisplay();
});

function hideHoverDisplay() {
	if (currentIndex !== -1) {
		serviceContents[currentIndex].style.display = "none";
		hoverDisplay.style.display = "none";
		currentIndex = -1; // Reset the active index
	}
}
