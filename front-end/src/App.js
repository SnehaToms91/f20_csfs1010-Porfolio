import React from 'react'
import './App.css'
import Navigation from './components/shared/Navigation'
import Footer from './components/shared/footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Login from './components/pages/Login'
import Listing from './components/pages/Listing'
import PrivateRoute from './components/shared/PrivateRoute'
import Signup from './components/pages/Signup'
import Project from './components/pages/Project'
function App() {
  return (
   <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/project" component={Project} />
          <PrivateRoute path="/submissions">
            <Listing />
          </PrivateRoute>
          <Route exact path="/signup" component={Signup} />
        </Switch>
        <Footer />  
    </BrowserRouter>
  )
}

export default App;
