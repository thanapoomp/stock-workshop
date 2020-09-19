import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Menu from './components/fregments/Menu'
import Header from './components/fregments/Header'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import { Container } from '@material-ui/core'

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true)
  }

  const handleDrawerClose = () => {
    setOpenDrawer(false)
  }

  return (
    <Router>
      <Header handleDrawerOpen={handleDrawerOpen} open={openDrawer}></Header>
      <Menu open={openDrawer} handleDrawerClose={handleDrawerClose} ></Menu>
      <Container style={{paddingTop:90}}>
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/login" />}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default App
