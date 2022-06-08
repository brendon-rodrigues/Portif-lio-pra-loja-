import { waitForElementToBeRemoved } from "@testing-library/react"
import React from "react"
import Headercomponent from "./Components/Header/header"
import Main from "./Components/Main/main"
import footer from "./Components/Footer/footer"
import "./styles.css"

export default function App (){
  return(
    <>
      {Headercomponent ()}
      <Main />
      {footer()}
    </>
  )
}