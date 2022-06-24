import { Component } from "react";
class CardList extends Component {
    render() {
        const { monster } = this.props;
        return (<div>
            {monster.map((monsters)=>(
                <h1 key={monsters.id}>{monsters.name}</h1>
            ))}
        </div>
        );
    }
}
export default CardList;