import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Locateus from './Locateus/locateus'
 




export default function Main() {
    return (
        <>
            <div>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Locateus />
                <Footer />
            </div>

        </>
    )
}