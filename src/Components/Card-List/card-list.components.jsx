import { Component } from "react";
import './card-list.style.css';
import Card from './card/card.componets.jsx';
class Cardlist extends Component {
    render() {
        const { monster } = this.props;
        return (
            <div className="card-list">
                {monster.map((monster) => {
                    return (
                    <Card monsters={monster}/>   
                    );
                })}
            </div>
        );
    }
}

export default Cardlist;