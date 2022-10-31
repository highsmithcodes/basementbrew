import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Dashboard from './components/Dashboard'
import LogOut from './components/LogOut'
import './App.css'
import AddPost from './components/post/AddPost'
import Posts from './components/post/Posts'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/signup" component={ SignUp } />
        <Route path="/login" component={ LogIn } />
        <Route path="/dashboard" component={ Dashboard } />
        <Route path="/logout" component={ LogOut } />
        <Route path="/addpost" component={ AddPost } />
        <Route path='/posts' component={Posts} />
      </Switch>
    </Router>
  )
}

export default App