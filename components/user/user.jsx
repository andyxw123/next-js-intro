import React from 'react';
import css from './user.module.css';

const user = (props) => {
    return (
        <div className={css.User}>
            <h1>{props.name}</h1>
            <p className='Age'>Age: {props.age}</p>
            <style jsx>{`
            div {
                border: 1px solid #eee;
                box-shadow: 0 2px 3px #ccc;
                padding: 20px;
                text-align: center;
            }

            .Age {
                color: blue;
            }
            `}
            </style>
        </div>
    )
}

export default user;
