module.exports = {
	entry: {
		bundle: "./_js/main.js"
	},
	output: {
		path: "./js/",
		publicPath: "/js/",
		filename: "[name].js"
	},
	devtool: "source-map"
};
