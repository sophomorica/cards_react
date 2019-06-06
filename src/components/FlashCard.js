import React from "react";
import { Button, Card, Icon, Container } from "semantic-ui-react";

class FlashCard extends React.Component {
  state = { showBack: false, editing: false };

  toggleCard = () => this.setState({ showBack: !this.state.showBack });
  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  };

  render() {
    return (
      <Card>
        
        <Card.Content textAlign="center" header={this.props.front} />
        <Container textAlign="center" />
        {this.state.showBack ? (
          <Card.Content textAlign="center" header={this.props.back} />
        ) : (
          <Card.Content textAlign="center" header="?" />
        )}

        <Card.Content extra>
          <div>
            <Button floated="left" primary icon onClick={this.toggleCard}>
              <Icon
                name={
                  this.state.showBack ? "angle double up" : "angle double down"
                }
              />
            </Button>
            <Button
              basic
              color="red"
              floated="right"
              icon
              onClick={() => this.props.remove(this.props.id)}>
              <Icon name="remove circle" />
            </Button>
            <Button icon inverted color="green" onClick={this.toggleEdit}>
              <Icon name="pencil" />
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}
export default FlashCard;
