import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Scrolltotop from './Scrolltotop'
import Main from '../core/Main'
import Homepage from '../shared/component/Homepage/Homepage'
import About from '../shared/component/About/About'
import Contact from '../shared/component/Contact/Contact'
import OurProduct from '../shared/component/OurProduct/OurProduct'
import Products from '../shared/component/Products/Products'
import Otherproducts from '../shared/component/OtherProduct/Otherproducts'
import Othercategory from '../shared/component/Othercategory/Othercategory'
import Visitus from '../shared/component/Visitus/Visitus'



export default function Router() {
    return (
        <BrowserRouter>
            <Scrolltotop />
            <Routes>
                <Route element={<Main />} >
                    <Route path='/' element={<Homepage />} />
                    <Route path='/aboutus' element={<About />} />
                    <Route path='/contactus' element={<Contact />} />
                    <Route path='/our-products' element={<OurProduct />} />
                    <Route path='/products/:id' element={<Products />} />
                    <Route path='/other-products' element={<Otherproducts />} />
                    <Route path='/other-category/:id' element={<Othercategory />} />
                    <Route path='/visitus' element={<Visitus />} />




                </Route>
            </Routes>
        </BrowserRouter>
    )
}