import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

  //對接收的props進行類型和必要性的限制
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }

  // 鍵盤事件的回調
  handleKeyUp = (event) => {
    // 解構賦值獲得event.keyCode, event.target
    const { keyCode, target } = event
    // 判斷是否是迴車按鍵
    if (keyCode !== 13) return
    //添加的todo不能為空
    if (target.value.trim() === '') return
    //準備好一個對象
    const todoObj = {id:nanoid(), name: target.value.trim(), done: false}
    // 將todoObj傳遞給App
    this.props.addTodo(todoObj)
    // 清空輸入
    target.value = ''
  }

  render() {


    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="請輸入你的任務名稱，按Enter確認" />
      </div>
    )
  }
}
