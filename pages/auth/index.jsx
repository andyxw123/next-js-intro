import React from 'react'
import Link from 'next/link';

const authIndex = (props) => {
    return (
        <div>
            <h1>The Auth Index Page for {props.appName}</h1>
            <p>Go to <Link href='/'><a>Root Index Page</a></Link></p>
        </div>
    )
}

authIndex.getInitialProps = (context) => {
    console.log(context);

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({appName: 'Super App'});
        }, 1000);
    });

    return promise;
  }

export default authIndex
