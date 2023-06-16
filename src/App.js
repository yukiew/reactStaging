// 創建'App'組件，此組件為外殼，所有組件都將為此組件的子組件

import React, { Component } from "react";

import Header from "./Component/Header";
import List from "./Component/List";
import Footer from "./Component/Footer";

import './App.css'

//定義並暴露App組件
export default class App extends Component {
	// 狀態在哪，方法就在哪

	state = {
		todos: [
			{ id: '001', name: '吃飯', done: true },
			{ id: '002', name: '睡覺', done: true },
			{ id: '003', name: '打碼', done: false },
			{ id: '004', name: '逛街', done: true },
		]
	}

	//addTodo用於添加一個todo，接收參數是todo對象
	addTodo = (todoObj)=>{
		// 獲取原todos
		const {todos} = this.state
		// 追加一個todo
		const newTodos = [todoObj,...todos]
		// 更新狀態
		this.setState(
			{todos:newTodos}
		)
	}

	//updateTodo用於更新一個todo，接收參數是id, done
	updateTodo = (id, done)=>{
		// 獲取原todos
		const {todos} = this.state
		const newTodos = todos.map((todoObj)=>{
			if(todoObj.id === id) return {...todoObj,done}
			return todoObj
		})
		// 更新狀態
		this.setState(
			{todos:newTodos}
		)
	}

	
	//deleteTodo用於添加一個todo，接收參數是id
	deleteTodo = (id)=>{
		// 獲取原todos
		const {todos} = this.state
		// filter()過濾
		const newTodos = todos.filter((todoObj)=>{
			return todoObj.id !== id // 回傳false排除，true保留
		})
		// 更新狀態
		this.setState(
			{todos:newTodos}
		)
	}

	checkAllTodo = (done)=>{
		//獲取原todos
		const {todos} = this.state
		const newTodos = todos.map((todoObj)=>{
			return {...todoObj,done:done}
		})
		// 更新狀態
		this.setState(
			{todos:newTodos}
		)
	}

	clearAllDoneTodo = ()=>{
		//獲取原todos
		const {todos} = this.state
		const newTodos = todos.filter((todoObj)=>!todoObj.done)
		// 更新狀態
		this.setState(
			{todos:newTodos}
		)
	}

	render() {
		const { todos } = this.state
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo}/>
					<List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
					<Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDoneTodo={this.clearAllDoneTodo} />
				</div>
			</div>
		)
	}
}