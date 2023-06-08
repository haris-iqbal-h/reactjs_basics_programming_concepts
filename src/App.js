import React from 'react'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
import Search from './pages/Search'
import AboutUs from './pages/AboutUs'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Assets from './pages/Assets'
import Calculator from './pages/Calculator'

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about-us' element={<AboutUs/>}/>
                    <Route path='/assets' element={<Assets />}/>
                    <Route path='/calculator' element={<Calculator />}/>
                    <Route path='/search/:id' element={<Search/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </Router>
        </>
    )
}
export default App