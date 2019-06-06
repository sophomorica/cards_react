import React from "react";
import CreateCard from "./CreateCard";
import { Button, Card, Icon, Container, Segment } from "semantic-ui-react";

class FlashCard extends React.Component {
  state = { showBack: false, editing: false };

  toggleCard = () => this.setState({ showBack: !this.state.showBack });
  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  };

  render() {
    return (
      <Segment>
        {this.state.editing ? (
          <CreateCard
            {...this.props}
            edit={this.props.edit}
            toggleEdit={this.toggleEdit}
          />
        ) : (
          <div>
            <Card>
              <Card.Content textAlign="center" header={this.props.front} />
              <Container textAlign="center" />
              {this.state.showBack ? (
                <Card.Content textAlign="center" header={this.props.back} />
              ) : (
                <Card.Content textAlign="center" header="?" />
              )}

              <Card.Content extra />
            </Card>
          </div>
        )}
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
            onClick={() => this.props.remove(this.props.id)}
          >
            <Icon name="remove circle" />
          </Button>
          <Button icon inverted color="green" onClick={this.toggleEdit}>
            <Icon name="pencil" />
          </Button>
        </div>
      </Segment>
    );
  }
}
export default FlashCard;
