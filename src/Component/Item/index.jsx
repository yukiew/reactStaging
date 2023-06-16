import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {mouse: false} //滑鼠移入移出狀態

  // 滑鼠移入移出的回調
  handleMouse = (flag)=>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }

  // 勾選或取消勾選某一個todo的回調
  handleCheck = (id)=>{
    return(event)=>{
      this.props.updateTodo(id, event.target.checked)
    }
  }

  // 刪除選某一個todo的回調
  handleDelete = (id)=>{
    return()=>{
      if(window.confirm('確定刪除嗎?')){
        this.props.deleteTodo(id)
      }
    }
  }

  render() {
    const {id, name, done} = this.props
    const mouse = this.state.mouse
    return (
        // 事件回調得返回值必須是函數
        <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}> 
            <label>
                <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                <span>{name}</span>
            </label>
            <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{display:mouse ? 'block' : 'none'}}>刪除</button>
        </li>
    )
  }
}
