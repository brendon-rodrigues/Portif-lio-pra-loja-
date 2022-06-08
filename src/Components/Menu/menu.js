import React,{useState} from "react"
import dropboxlist from "../Dropdownmenu/dropdownmenu"
import "./styles.css"

const Menu = ()=>{
    const [dropboxmenu,setDropboxmenu] = useState()
    return(
        <div>
            <nav className="Menu">
                <ul>
                    <li>Início</li>
                    <li onClick={()=>{
                        setDropboxmenu(!dropboxmenu)
                        console.log(dropboxmenu)
                    }}>Produtos 
                    {dropboxmenu && dropboxlist()}                
                    </li>
                    
                    <li>Sobre</li>
                    <li>Contatos</li>
                </ul>    
            </nav>
        </div>
       
        
    )
}
export default Menu