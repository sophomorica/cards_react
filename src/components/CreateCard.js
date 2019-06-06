import React from "react"
import {Form,Card} from "semantic-ui-react"
import { from } from "rxjs";

class CreateCard extends React.Component{

  state = {front: "", back: "",}

  handleChange = (e) => {
    this.setState({[e.target.name]: [e.target.value]})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.add(this.state)
    //this.props.add(showBack: false)
    this.setState({front:"", back:""})
  }
  render(){
    return(
      <Card>
          

        <Card.Content textAlign="center" header= "Write a Query"/>
        <Form onSubmit={this.handleSubmit}>
        <Form.Input 
        fluid
        placeholder = "Question"
        name = "front"
        value = {this.state.front}
        onChange = {this.handleChange} />
        <Card.Content textAlign="center" header= "Write an Answer"/>
         <Form.Input
            fluid
            placeholder = "Answer"
            name = "back"
            value = {this.state.back}
            onChange = {this.handleChange}
            />

          <Card.Content textAlign='center' extra>

            <Form.Button primary>Create</Form.Button>
          </Card.Content>

        </Form>
      </Card>
    )
  }
}

export default CreateCard