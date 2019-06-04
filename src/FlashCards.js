import React from "react"; //giving access to JSX
//import Card from "./Card"
import { Card, Grid,Header} from "semantic-ui-react"

const FlashCards = ({cards}) =>(

  <Card.Group itemsPerRow={4} >
    { cards.map(card =>(
      <Card>
        <Card.Content textAlign='center' header ="Question"/>
        <Card.Content textAlign='center' description={card.front}/>
      </Card>
        )
        )}
        </Card.Group>
)
    

export default FlashCards