const navEle = document.querySelectorAll("#TopNavLink > li");
const hoverDisplay = document.getElementById("navBoxHover");
const serviceContents = [
	document.getElementById("ServiveContent1"),
	document.getElementById("ServiveContent2"),
	document.getElementById("ServiveContent3"),
	document.getElementById("ServiveContent4"),
];
const nav = document.getElementById("nav");

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
		const ele_points = serviceContents[index].getBoundingClientRect();
		const navPoint = item.getBoundingClientRect();
		const hoverPoint = hoverDisplay.getBoundingClientRect();
		const navCenter = navPoint.left + navPoint.width / 2;
		hoverDisplay.style.left = `${navCenter - hoverPoint.width / 2}px`;
	});

	item.addEventListener("mouseout", () => {
		serviceContents[index].style.display = "none";
	});
});

nav.addEventListener("mouseout", () => {
	hoverDisplay.style.display = "none";
});
