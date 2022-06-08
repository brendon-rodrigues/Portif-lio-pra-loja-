import React,{useState} from "react"
import Foto from "../Assets/zelda.jpg"
import Aside from "../LateralSide/lateralside"
import "./styles.css"
export default function Main (){
    const[produtos, setProdutos] = useState([
        {
            img: Foto,
            nome: 'Mochila Zelda',
            preço: 100.00
        },
        {
            img: Foto,
            nome: 'Mochila Zelda',
            preço: 100.00
        },
        {
            img: Foto,
            nome: 'Mochila Zelda',
            preço: 100.00
        },
        {
            img: Foto,
            nome: 'Mochila Zelda',
            preço: 100.00
        },
        {
            img: Foto,
            nome: 'Mochila Zelda',
            preço: 100.00
        },
        {
            img: Foto,
            nome: 'Mochila Zelda',
            preço: 100.00
        },

    ])
    return(
        <main>
            <Aside />
            <section>
                {produtos.map(item =>(
                    <div id="productBox">
                        <li><img src={item.img}/></li>
                        <h3>{item.nome}</h3>
                        <p>R$ {item.preço}</p>
                    </div>
                ))}
               </section>
            
        </main>
    )
}