import React from "react"
import { Button, Divider, Card, Icon,Container} from "semantic-ui-react"

class FlashCard extends React.Component{
  state = {showBack: false}

  toggleCard = () =>this.setState({showBack: !this.state.showBack,})

  render(){
    return(

<Card>
<Card.Content textAlign='center' header ={this.props.front}/>
<Container textAlign='center'>

</Container>
      {this.state.showBack ?  
  <Card.Content textAlign='center' header={this.props.back}/> : <Card.Content textAlign="center" header="?"/>}

<Card.Content extra>

<Button floated='left' primary icon onClick={this.toggleCard}>
  <Icon name={this.state.showBack ? "angle double up":"angle double down"}/>
</Button>
  <Button basic color="red" floated="right" icon onClick={() => this.props.remove(this.props.id)}><Icon name = "remove circle"/></Button>
</Card.Content>
</Card>
    )
  }


}
export default FlashCard