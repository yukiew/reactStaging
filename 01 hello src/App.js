// 創建'App'組件，此組件為外殼，所有組件都將為此組件的子組件

import React, { Component } from "react";
import Hello from "./Component/Hello/Hello"
import Welcome from "./Component/Welcome/Welcome"

//定義並暴露App組件
export default class App extends Component {
	render() {
		return (
			<div>
				<Hello />
				<Welcome />
			</div>
		)
	}
}