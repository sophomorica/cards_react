import React from 'react';
import { Container, Button, Header, Icon, Divider } from "semantic-ui-react"
import { Route, Switch, } from "react-router-dom";
import FlashCards from "./components/FlashCards"
import CreateCard from "./components/CreateCard"
import Navbar from "./components/Navbar"
import NoMatch from "./components/NoMatch"
import FlashCardSite from "./components/FlashCardSite"

const App = () => (
  <>
    <Navbar/>
    <Container>
      <Switch>
        <Route exact path= "/" component={FlashCardSite}/>
        <Route component={NoMatch}/>
      </Switch>
    </Container>
  </>
)

export default App;
