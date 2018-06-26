import React from 'react';

export default props => {

    return (
        <li className="collection-item row to-do-item">
            <div className={`col s10 ${props.complete ? 'complete' : ''}`}>
                {props.title}
            </div>
            <div className="col s2 right-align">
                <button onClick={props.delete} className="btn pink lighten-4">Delete</button>
            </div>
        </li>
    )
}