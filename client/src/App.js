import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollTop/scrollToTop'
import Navbar from './components/Navbar/Navbar';
import Landing from './components/pages/Landing/Landing';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Enquire from './components/pages/Enquire/enquire';
import About from './components/pages/About/about';
import Locations from './components/pages/Location/locations';
import MenuBar from './components/AppNav/hamburgerNav';
import SideBarNav from './components/AppNav/hamburgerNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContextProvider } from './store';
import './App.css';
import PrivateRoute from './PrivateRoute';

function App() {
    return (
        <AppContextProvider>
            <Router>
                <div className="pl-0 pr-0 m-0 container-fluid">
                    <SideBarNav />
                        <Navbar />
                    <ScrollToTop>
                        <Route exact path="/" component={Landing} />
                            <div className="p-0 m-0 container-fluid">
                                <Route exact path="/register" component={Register} />
                                <Route exact path="/login" component={Login} />
                                <PrivateRoute async exact path="/profile" component={Profile} />
                                <PrivateRoute exact path="/hamburgerNav" component={MenuBar} />
                                <PrivateRoute async exact path="/enquire" component={Enquire} />
                                <PrivateRoute async exact path="/about" component={About} />
                                <PrivateRoute async exact path="/locations" component={Locations} />
                            </div>
                        </ScrollToTop>
                    </div>
                </Router>
            </AppContextProvider>
    );
}

export default App;
