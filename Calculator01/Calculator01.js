// deno-lint-ignore-file no-unused-vars no-inner-declarations no-var

var usr_inp = "";

const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");
const btn4 = document.getElementById("button4");
const btn5 = document.getElementById("button5");
const btn6 = document.getElementById("button6");
const btn7 = document.getElementById("button7");
const btn8 = document.getElementById("button8");
const btn9 = document.getElementById("button9");
const btn0 = document.getElementById("button0");
const btnrem = document.getElementById("buttonremove");
const btnclear = document.getElementById("buttonClear");
const btnsignchange = document.getElementById("buttonSignchanged");
const btnpercentage = document.getElementById("buttonPercentage");

const btnDivision = document.getElementById("buttonDevisition");
const btnMulti = document.getElementById("buttonMultiplication");
const btnSub = document.getElementById("buttonSubtraction");
const btnplus = document.getElementById("buttonplus");
const btneql = document.getElementById("buttonEqual");
const ques = document.getElementById("question");
const answer_label = document.getElementById("answer_label");
const btnDeci = document.getElementById("buttonDecimal");
btnclear.onclick = () => {
	usr_inp = "";
	ques.textContent = "";
	answer_label.textContent = usr_inp;
};
btnsignchange.onclick = () => {
	usr_inp = change_sign(usr_inp.toString());
	answer_label.textContent = usr_inp;
};
btnpercentage.onclick = () => {
	ques.textContent = usr_inp;
	usr_inp = percentage(usr_inp.toString());
	if (usr_inp % 1 !== 0) {
		const formattedResult = usr_inp.toFixed(4);
		answer_label.textContent = formattedResult.toString();
		console.log(formattedResult);
	} else {
		answer_label.textContent = usr_inp.toString();
	}
};
btnDivision.onclick = () => {
	usr_inp += "/";
	answer_label.textContent = usr_inp;
};
btnMulti.onclick = () => {
	usr_inp += "*";
	answer_label.textContent = usr_inp;
};
btnSub.onclick = () => {
	usr_inp += "-";
	answer_label.textContent = usr_inp;
};
btnplus.onclick = () => {
	usr_inp += "+";
	answer_label.textContent = usr_inp;
};
btneql.onclick = () => {
	ques.textContent = usr_inp;
	try {
		usr_inp = eval(usr_inp);
		if (usr_inp === Infinity || usr_inp === -Infinity) {
			answer_label.textContent = "Division by zero!";
		} else {
			if (usr_inp % 1 !== 0) {
				const formattedResult = usr_inp.toFixed(4);
				answer_label.textContent = formattedResult.toString();
				console.log(formattedResult);
			} else {
				answer_label.textContent = usr_inp.toString();
			}
		}
	} catch (error) {
		answer_label.textContent = "Error: " + error.message; // More informative error message
		console.error("Calculation error:", error);
	}
};

btn1.onclick = () => {
	usr_inp += "1";
	answer_label.textContent = usr_inp;
};

btn2.onclick = () => {
	usr_inp += "2";
	answer_label.textContent = usr_inp;
};
btn3.onclick = () => {
	usr_inp += "3";
	answer_label.textContent = usr_inp;
};
btn4.onclick = () => {
	usr_inp += "4";
	answer_label.textContent = usr_inp;
};
btn5.onclick = () => {
	usr_inp += "5";
	answer_label.textContent = usr_inp;
};
btn6.onclick = () => {
	usr_inp += "6";
	answer_label.textContent = usr_inp;
};
btn7.onclick = () => {
	usr_inp += "7";
	answer_label.textContent = usr_inp;
};
btn8.onclick = () => {
	usr_inp += "8";
	answer_label.textContent = usr_inp;
};
btn9.onclick = () => {
	usr_inp += "9";
	answer_label.textContent = usr_inp;
};
btnDeci.onclick = () => {
	usr_inp += ".";
	answer_label.textContent = usr_inp;
};
btn0.onclick = () => {
	usr_inp += "0";
	answer_label.textContent = usr_inp;
};
btnrem.onclick = () => {
	usr_inp = usr_inp.slice(0, -1);
	console.log(usr_inp);
	answer_label.textContent = usr_inp;
};

function change_sign(str = "") {
	if (str.startsWith("-")) {
		return str.substring(1);
	} else {
		return "-" + str;
	}
}

function percentage(str = "") {
	let value = null;
	if (str.includes("/")) {
		str = eval(str);
		value = parseFloat(str) * 100;
		return value;
	}
	str = eval(str);
	value = parseFloat(str) / 100;
	return value;
}
