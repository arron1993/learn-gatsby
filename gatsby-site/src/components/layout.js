import React from 'react'

import Header from "./header"

import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="container border">
                {children}
            </main>
        </>
    )
}

export default Layout