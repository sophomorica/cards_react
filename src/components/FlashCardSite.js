import React from 'react';
import { Container, Card, Header, Icon, Divider } from "semantic-ui-react"
import FlashCard from "./FlashCard"
import CreateCard from "./CreateCard"

class FlashCardSite extends React.Component{
  state = {
    flashCards: [
      {id:1, front: "What is my name", back: "Jerry",},
      {id:2, front: "How fast is a cheetah", back: "Very Fast",},
      {id:3, front: "Where is the moon", back: "In space, next to the earth"},
      {id:4, front: "How do you like your eggs", back: "Scrambled"},
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

  renderCards = () =>{
    const {flashCards } = this.state
    return flashCards.map(card => <FlashCard key={card.id} 
      {...card} 
      revealAnswer={this.toggleAnswer}
      render = {this.renderCards}
      remove = {this.removeCard}
      />)
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
          <Divider/>
          <Card.Group itemsPerRow={4} >
          {this.renderCards()}
        </Card.Group>
          <CreateCard add = {this.addCard}/>
      </Container>
    )
  }
}

export default FlashCardSite;
