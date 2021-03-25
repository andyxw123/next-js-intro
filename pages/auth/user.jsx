import React from 'react'
import Link from 'next/link';
import User from './../../components/user/user';

const authUser = () => {
    return (
        <div>
            <h1>The Auth User Page</h1>
            <p>Go to <Link href='/'><a>Root Index Page</a></Link></p>
            <User name='Andy' age='47' />
        </div>
    )
}

export default authUser


