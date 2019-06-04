import React from 'react';
import { Container, Header, Segment, Button, Icon, Divider } from "semantic-ui-react"
import FlashCards from "./FlashCards"

class App extends React.Component{
  state = {
    flashCards: [
      {id:1, front: "What is my name", back: "Jerry"},
      {id:2, front: "How fast is a cheetah", back: "Very Fast"},
      {id:3, front: "Where is the moon", back: "In space, next to the earth"},
    ],
    showBack: false,
  }
  getId = () => {
    return Math.floor((1+ Math.randome())*1000)
  }

  render(){
    return (
      <Container>
        <Header as="h1" textAlign='center'>
          <Icon name= "book" color = "blue" circular/>
        </Header>
        <Header as="h1" textAlign='center'>
          Flash Cards</Header>
          <Divider/>
          <FlashCards cards={this.state.flashCards}/>
      </Container>
    )
  }
}

export default App;
