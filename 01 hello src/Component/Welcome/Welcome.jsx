import React, { Component } from "react";
import welcome from "./welcome.module.css"

import './Welcome.css'
export default class Welcome extends Component {

    render() {
        return (
            <h2 className={welcome.title}>
                Welcome!!!
            </h2>
        )
    }
}