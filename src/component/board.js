import React from 'react';

function Square(props) {
    return ( <button className="square" 
                onClick={props.onClick}
                key={props.iddh}
            > 
                { props.value}        
            </button>
        );
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square 
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                iddh={i}
            /> 
        );
    }
    
    board_row = () => {
        let row = [];
        let t = 0;
        for (let i = 0; i < 3; i++) {
            let children = [];
            
            for (let j = 0; j < 3; j++) {
                children.push(this.renderSquare(t));
                t++;   
            }
            row.push(<div className="board-row" key={i}>{children}</div>)
        
        }
        return row;
    }

    render() {
        return(
            <div>
                {this.board_row()}
            </div>
        )
    }
    
}

export default Board;