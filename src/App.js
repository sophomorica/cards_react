import React from 'react';
import { Container, Button, Header, Icon, Divider } from "semantic-ui-react"
import FlashCards from "./FlashCards"

class App extends React.Component{
  state = {
    flashCards: [
      {id:1, front: "What is my name", back: "Jerry", showBack: false},
      {id:2, front: "How fast is a cheetah", back: "Very Fast", showBack: false},
      {id:3, front: "Where is the moon", back: "In space, next to the earth", showBack: true},
    ],

  }
  getId = () => {
    return Math.floor((1+ Math.randome())*1000)
  }
  toggleAnswer = (id) => this.setState({flashCards: !this.state.showBack})
  removeCard = (id) =>{
    const flashCards = this.state.flashCards.filter(card => {
      if (card.id !== id)
      return card;
    })
    this.setState({flashCards})
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
          <FlashCards 
          cards={this.state.flashCards} 
          revealAnswer={this.toggleAnswer}
          remove = {this.removeCard}
          />
       
      </Container>
    )
  }
}

export default App;
