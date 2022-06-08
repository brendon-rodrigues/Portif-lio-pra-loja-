import React, {useState} from "react";
import Menu from "../Menu/menu"
import "./styles.css"

export default function Headercomponent (){
    return(
        <header className="header">
            <h1>Loja</h1>
           {Menu()}
        </header>
    )
}