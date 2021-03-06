import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch

} from 'react-router-dom'
import LandingPage from './components/layout/LandingPage';
import {useTranslation} from "react-i18next";
import NavbarContainer from './components/layout/Navbar/NavbarContainer';
import Footer from './components/layout/Footer';
import LoginContainer from './components/Login/LoginContainer';

 function App() {
    const [t, i18n] = useTranslation('common');
    const Login = () => (<LoginContainer />)
    const Landing = () => (<LandingPage t={t} i18n={i18n} />)
    
    return (
        <Router>
            <div>
            {/* <LandingPage t={t} i18n={i18n} /> */}
            <NavbarContainer t={t} i18n={i18n}/>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />

            
            {/* <LoginContainer /> */}
            <Footer />
            </div>
       </Router>
    )
}

export default App;