import { merge } from "webpack-merge";
import common from "./webpack.config.common.mjs";
import webpackDev from "./webpack.config.development.mjs";
import webpackProd from "./webpack.config.production.mjs";

export default (envVars) =>
{
	const { mode } = envVars;
	let envConfig;
	if(mode === "development")
		envConfig = webpackDev;
	else if(mode === "production")
		envConfig = webpackProd;
	return merge(common(), envConfig);
};
