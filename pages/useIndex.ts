import { useEffect } from "react";

export default function useIndex() {
	useEffect(() => {
		animateStack();
	}, []);

	return { saveEmail };

	function animateStack() {
		const stack = document.getElementById("stack");
		if (!stack) return;

		stack.animate([{ transform: "translateX(0%)" }, { transform: "translateX(-50%)" }], {
			iterations: Infinity,
			duration: 10000,
		});
	}

	function saveEmail() {
		const confirmationDisplay = document.getElementById("email-confirmation");

		navigator.clipboard.writeText("mawitgaddev@gmail.com").then(onSave, onFail);
		function onSave() {
			if (!confirmationDisplay) return;
			confirmationDisplay.textContent = "Email saved to clip board";
			openEmailConfirmationUi();
			setTimeout(() => {
				closeEmailConfirmation();
			}, 3000);
		}
		function onFail() {
			if (!confirmationDisplay) return;
			confirmationDisplay.textContent = "Sorry could not save to clipBoard but the email is: mawitgaddev@gmail.com";
			openEmailConfirmationUi();
			setTimeout(() => {
				closeEmailConfirmation();
			}, 3000);
		}
	}
	function openEmailConfirmationUi() {
		const confirmationDisplay = document.getElementById("email-confirmation");
		const animationKeyframes = [{ top: "-100px" }, { top: "50px" }];

		if (!confirmationDisplay) return;
		confirmationDisplay.animate(animationKeyframes, {
			duration: 500,
			easing: "ease-out",
			fill: "forwards",
		});
	}
	function closeEmailConfirmation() {
		const confirmationDisplay = document.getElementById("email-confirmation");
		const animationKeyframes = [{ top: "50px" }, { top: "-200px" }];
		if (!confirmationDisplay) return;
		confirmationDisplay.animate(animationKeyframes, {
			duration: 500,
			easing: "ease-out",
			fill: "forwards",
		});
	}
}
