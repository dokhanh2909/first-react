import React from 'react'
import App from '../App'
import '../assets/css/Pokemon.css'
class Pokemon extends React.Component{
    constructor(props) {
        super(props)
    }


    render() {
    return (
        <div className="container">
            <div className="child1">
                <div>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png" alt="pokemon" sizes="" srcset=""/>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png" alt="pokemon" sizes="" srcset=""/>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png" alt="pokemon" sizes="" srcset=""/>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png" alt="pokemon" sizes="" srcset=""/>
                </div>
                <div>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png" alt="pokemon" sizes="" srcset=""/>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png" alt="pokemon" sizes="" srcset=""/>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png" alt="pokemon" sizes="" srcset=""/>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png" alt="pokemon" sizes="" srcset=""/>
                </div>
                <div>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png" alt="pokemon" sizes="" srcset=""/>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png" alt="pokemon" sizes="" srcset=""/>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png" alt="pokemon" sizes="" srcset=""/>
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png" alt="pokemon" sizes="" srcset=""/>
                </div>
            </div>
            <div className="child2">
                <div className="type_box">
                    <div className="title1">
                        <h1>FIRE</h1>
                    </div>
                </div>
                <div className="type_box">
                <div className="title2">
                        <h1>WATER</h1>
                    </div>
                </div>
                <div className="type_box">
                <div className="title3">
                        <h1>GRASS</h1>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export {
    Pokemon
}