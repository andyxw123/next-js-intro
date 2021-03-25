import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class rootIndex extends Component {
  onButtonClicked = () => Router.push('/auth/user');

  static getInitialProps(context) {
    console.log(context);

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({appName: 'Super App'});
        }, 1000);
    });

    return promise;
  }

  render() {
    return (
      <div>
        <h1>The Root Index Page Of {this.props.appName}</h1>

        <p>
          Go to{' '}
          <Link href='/auth'>
            <a>Auth Index Page</a>
          </Link>
        </p>

        <p>
          Go to{' '}
          <Link href='/auth/user'>
            <a>Auth User Page</a>
          </Link>
        </p>

        <button onClick={this.onButtonClicked}>Auth User Page</button>
      </div>
    );
  }
}

export default rootIndex;
