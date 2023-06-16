import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  // 全選
  hadleCheckAll = (event)=> {
    this.props.checkAllTodo(event.target.checked)
  }
  
  // 清除所有Done項目的回調
  hadleClearAllDone = ()=>{
    this.props.clearAllDoneTodo()
  }

  render() {
    const {todos} = this.props
    // 完成數
    const doneCount = todos.reduce((pre, todo)=> todo.done? pre+1 : pre, 0)
    // 總數
    const total = todos.length
    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox" onChange={this.hadleCheckAll} checked={doneCount===total && total !== 0? true: false} />
            </label>
            <span>
                <span>已完成{doneCount}</span> / 全部{total}
            </span>
            <button className="btn btn-danger" onClick={this.hadleClearAllDone}>清除完成任務</button>
        </div>
    )
  }
}
