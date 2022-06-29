import { Component } from "react";
import "./card.styles.css";
class Card extends Component {
    render() {

        const { name, email, id } = this.props.monsters;
        return (
            <div className="card-container" key={id}>
                <img
                    alt={`monster ${name}`}
                    src={`https://robohash.org/${name}?set=set2&size=200x200`}
                />
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        );
    }
}
export default Card;
