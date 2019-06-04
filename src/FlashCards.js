import React from "react"; //giving access to JSX
//import Card from "./Card"
import { Card,} from "semantic-ui-react"
import FlashCard from "./FlashCard"

const FlashCards = ({cards,revealAnswer, remove}) =>(

  <Card.Group itemsPerRow={4} >
    { cards.map(flash_card =>(
      <FlashCard key={flash_card.id} 
      {...flash_card} 
      reveal={revealAnswer} 
      remove={remove}
      />
        )
        )}
        </Card.Group>
)
    

export default FlashCards