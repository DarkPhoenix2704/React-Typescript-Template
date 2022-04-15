export default () => ({
	mode: "development",
	devServer:{
		port:3000,
		open:true,
		historyApiFallback:true,
		watchFiles:["./web/**/**/**/**/*.{js,jsx,ts,tsx,css}"]
	}
});
