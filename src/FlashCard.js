import React from "react"
import { Button, Card, Icon,Container} from "semantic-ui-react"

class FlashCard extends React.Component{
  state = {showBack: false}

  toggleCard = () =>this.setState({showBack: !this.state.showBack,})

  render(){
    return(

<Card>
<Card.Content textAlign='center' header ="Question"/>
<Card.Content textAlign='center' description={this.props.front}/>
<Container textAlign='center'>
<Button  primary icon onClick={this.toggleCard}>
  <Icon name={this.state.showBack ? "angle double up":"angle double down"}/>
</Button>

</Container>
      {this.state.showBack ?  
  <Card.Content textAlign='center' description={this.props.back}/> : null}


  <Button color="red" icon onClick={() => this.props.remove(this.props.id)}>
                <Icon name = "remove circle"/></Button>
</Card>
    )
  }


}
export default FlashCard