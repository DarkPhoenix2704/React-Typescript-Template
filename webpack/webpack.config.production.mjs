import path from "path";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

export default () => ({
	mode: "production",
	devtool: "source-map",
	plugins: [
		new CleanWebpackPlugin(),
		new InjectManifest({
			swSrc: "./web/serviceWorker",
			swDest:"sw.js",
			exclude: [ /\.map$/, /^manifest.*\.js(?:on)?$/, /\.(jpe?g|png|webp)$/i ],
			maximumFileSizeToCacheInBytes: 3*1024*1024
		}),
		new WebpackPwaManifest({
			filename: "manifest.json",
			name: "React-TypeScript-Template",
			short_name: "React-TypeScript-Template",
			background_color: "#ffffff",
			orientation: "any",
			theme_color: "#267fff",
			publicPath: "/",
			icons: [
				{
					src: path.resolve(__dirname, "..", "web/assets/logo.png"),
					sizes: [96, 128, 192, 256, 384, 512]
				}
			]
		}),
	],
	optimization:{
		minimizer:[
			new CssMinimizerPlugin(),
			new TerserPlugin(),
		],
		splitChunks: {
			chunks: "all",
		},
	}
});
