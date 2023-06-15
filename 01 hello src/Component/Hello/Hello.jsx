//引入React組件，Component組件
import React, { Component } from "react";
//引入css
import hello from "./Hello.module.css"

export default class Hello extends Component {

    render() {
        return (
            <h2 className={hello.title}>
                Hello, React!!!
            </h2>
        )
    }
}