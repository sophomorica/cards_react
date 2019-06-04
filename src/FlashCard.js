import React from "react"
import { Button, Card, Icon,Container} from "semantic-ui-react"


const FlashCard = ({id, front, back,}) => (

<Card>
<Card.Content textAlign='center' header ="Question"/>
<Card.Content textAlign='center' description={front}/>
<Container textAlign='center'>
<Button floated="center" primary icon>
  <Icon name = "angle double down"/>
</Button>
</Container>
</Card>

)

export default FlashCard