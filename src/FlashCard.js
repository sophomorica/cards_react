import React from "react"
import { Button, Card, Icon,Container} from "semantic-ui-react"


const FlashCard = ({id, front, back,showBack, reveal, remove}) => (

<Card>
<Card.Content textAlign='center' header ="Question"/>
<Card.Content textAlign='center' description={front}/>
<Container textAlign='center'>
<Button  primary icon onClick={() => reveal(id)}>
  <Icon name={showBack ? "angle double up":"angle double down"}/>
</Button>

</Container>

  <Card.Content textAlign='center' header ="Answer"/>
  <Card.Content textAlign='center' description={back}/>

  <Button color="red" icon onClick={() => remove(id)}>
                <Icon name = "remove circle"/></Button>
</Card>

)

export default FlashCard