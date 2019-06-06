import React from 'react';
import { Container, Button, Header, Icon, Divider } from "semantic-ui-react"
import { Route, Switch, } from "react-router-dom";
import FlashCards from "./components/FlashCards"
import CreateCard from "./components/CreateCard"
import Navbar from "./components/Navbar"
import NoMatch from "./components/NoMatch"
import FlashCardSite from "./components/FlashCardSite"
import Home from "./components/Static_Pages/Home"
import About from "./components/Static_Pages/About"

const App = () => (
  <>
    <Navbar/>
    <Container>
      <Switch>
        <Route exact path= "/" component={FlashCardSite}/>
        <Route exact path= "/home" component={Home}/>
        <Route exact path= "/about" component={About}/>
        <Route component={NoMatch}/>
      </Switch>
    </Container>
  </>
)

export default App;
