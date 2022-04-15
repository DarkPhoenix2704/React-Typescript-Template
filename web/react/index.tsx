import * as React from "react";
import ReactDOM from "react-dom";
import { Workbox } from "workbox-window";
import App from "./App";
import "./index.css";

ReactDOM.render(<App/>, document.getElementById("root"));

if(window.location.hostname !== "localhost")
{
	const workbox = new Workbox("./serviceWorker.js");
	if("serviceWorker" in navigator)
		workbox.register();
}
