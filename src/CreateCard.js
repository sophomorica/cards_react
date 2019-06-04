import React from "react"
import {Form,Card} from "semantic-ui-react"

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
      <Card display="flex">

        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths ='equal'>
            <Form.Input
            fluid
            label = "Question"
            placeholder = "Question"
            name = "front"
            value = {this.state.front}
            onChange = {this.handleChange}
            />

            <Form.Input
            fluid
            label = "Answer"
            placeholder = "Answer"
            name = "back"
            value = {this.state.back}
            onChange = {this.handleChange}
            />
            <Form.Button primary>Create</Form.Button>
          </Form.Group>
        </Form>
      </Card>
    )
  }
}

export default CreateCard