import React from 'react'

import Header from "./header"

class Layout extends React.Component {
    render(children) {
        return (
            <>
                <Header />
                <main>{children}</main>
            </>
        )
    }
}

export default Layout