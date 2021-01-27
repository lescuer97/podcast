import React from 'react'
import Header from './Header';
const Layout = ({children}) => {
    return (
       
<div className="w-100 h-100 flex justify-center">
    <div className="complete ">
    <div className="left-shadow">
        <Header />
    {children}

    </div>
            </div>
        </div>
    )
}

export default Layout;
