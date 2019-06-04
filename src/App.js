import React from 'react';
import { Container, Button, Header, Icon, Divider } from "semantic-ui-react"
import FlashCards from "./FlashCards"
import CreateCard from "./CreateCard"

class App extends React.Component{
  state = {
    flashCards: [
      {id:1, front: "What is my name", back: "Jerry",},
      {id:2, front: "How fast is a cheetah", back: "Very Fast",},
      {id:3, front: "Where is the moon", back: "In space, next to the earth"},
    ],

  }
  getId = () => {
    return Math.floor((1+ Math.random())*1000)
  }
  addCard = (cardData) =>{
    let card = { id: this.getId(), ...cardData, }
    this.setState({flashCards: [...this.state.flashCards, card]})
  }
  toggleAnswer = (id) => {
    this.state.flashCards.filter(card =>{
      if (card.id == id){
       
        card.showBack = !card.showBack
        
      }
      
    })
  }
  removeCard = (id) =>{
    const flashCards = this.state.flashCards.filter(card => {
      if (card.id !== id)
      return card;
    })
    this.setState({flashCards})
  }
  render(){
    return (
      <Container style  = {{paddingTop: "25px"}}>
        <Header as="h1" textAlign='center'>
          <Icon name= "book" color = "blue" circular/>
        </Header>
        <Header as="h1" textAlign='center'>
          Flash Cards</Header>
          <CreateCard add = {this.addCard}/>
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
