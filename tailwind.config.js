/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				project_shadow:
					"394px 264px 190px rgba(0, 0, 0, 0.03), 222px 148px 160px rgba(0, 0, 0, 0.1), 99px 66px 119px rgba(0, 0, 0, 0.16), 25px 16px 65px rgba(0, 0, 0, 0.19), 0px 0px 0px rgba(0, 0, 0, 0.19);",
			},
			animation: {
				"slow-spin": "spin 10s linear infinite",
			},
		},
	},
	plugins: [],
};
