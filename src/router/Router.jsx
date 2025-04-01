import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Scrolltotop from './Scrolltotop'
import Main from '../core/Main'
import Home from '../component/Home/Home'
import Aboutpage from '../component/Aboutpage/Aboutpage'
import Contactpage from '../component/Contactpage/Contactpage'
import Ourproductpage from '../component/Ourproductpage/Ourproductpage'
import Products from '../shared/component/Products/Products'
// import Otherproducts from '../shared/component/OtherProduct/Otherproducts'
// import Othercategory from '../shared/component/Othercategory/Othercategory'
// import Visitus from '../shared/component/Visitus/Visitus'



export default function Router() {
    return (
        <BrowserRouter>
            <Scrolltotop />
            <Routes>
                <Route element={<Main />} >
                    <Route path='/' element={<Home />} />
                    <Route path='/aboutus' element={<Aboutpage />} />
                    <Route path='/contactus' element={<Contactpage />} />
                    <Route path='/our-products' element={<Ourproductpage />} />
                    <Route path='/products/:id' element={<Products />} />
                    {/* <Route path='/other-products' element={<Otherproducts />} />
                    <Route path='/other-category/:id' element={<Othercategory />} /> */}
                    {/* <Route path='/visitus' element={<Visitus />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}