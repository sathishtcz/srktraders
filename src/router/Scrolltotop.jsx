import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Scrolltotop() {

    const location = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [location.pathname])

}
