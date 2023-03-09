import { useEffect } from "react";

export default function useIndex() {
	const observers: IntersectionObserver[] = [];

	useEffect(() => {
		animateStack();
		observeProjects();

		return () => {
			observers.forEach((observer) => {
				observer.disconnect();
			});
		};
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
	function observeProjects() {
		const observerOptions: IntersectionObserverInit = {
			root: null,
			rootMargin: "0% 0% -40% 0%",
			threshold: 0,
		};
		const callback: IntersectionObserverCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) animateProject(entry.target);
			});
		};
		const Observer = new IntersectionObserver(callback, observerOptions);
		observers.push(Observer);

		const litumbaProject = document.getElementById("litumba-project");
		const ndoloProject = document.getElementById("ndolo-project");
		const personalWebsiteProject = document.getElementById("personal-website-project");
		if (litumbaProject) Observer.observe(litumbaProject);
		if (ndoloProject) Observer.observe(ndoloProject);
		if (personalWebsiteProject) Observer.observe(personalWebsiteProject);
	}
	function animateProject(element: Element) {
		const h2 = element.querySelector("h2");
		const p = element.querySelector("p");
		const div = element.querySelector("div");
		const a = element.querySelector("a");

		if (h2) fadeInFromLeft(h2, 0);
		if (p) fadeInFromLeft(p, 100);
		if (div) fadeInFromLeft(div, 200);
		if (a) fadeInFromLeft(a, 300);
	}
	function fadeInFromLeft(element: Element, delay: number) {
		const keyframes = [
			{ transform: "translateX(-50px)", opacity: 0 },
			{ transform: "translateX(0px)", opacity: 1 },
		];
		const options: KeyframeAnimationOptions = {
			duration: 500,
			delay,
			fill: "forwards",
			easing: "cubic-bezier(.48,0,.48,1.33)",
		};
		element.animate(keyframes, options);
	}
}
