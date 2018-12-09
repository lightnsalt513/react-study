import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

  componentDidMount() {
    console.log('DishDetail component componentDidMount');
  }

  componentDidUpdate() {
    console.log('DishDetail component componentDidUpdate');
  }

  renderDish(selectedDish) {
    if (selectedDish != null) {
      return (
        <Card>
          <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name} />
          <CardBody>
            <CardTitle>{selectedDish.name}</CardTitle>
            <CardText>{selectedDish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  renderComments(selectedDish) {

    if (selectedDish != null) {
      const comment = selectedDish.comments.map((selectedComment) => {

        return (
          <div key={selectedComment.id}>
            <p>{selectedComment.comment}</p>
            <p>-- {selectedComment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(selectedComment.date)))}</p>
          </div>
        );
      });

      return (
        <div>
          <h4>Comments</h4>
          <div>
            {comment}
          </div>
        </div>
      );

    } else {
      return (
        <div></div>
      );
    }

  }

  render() {

    console.log('DishDetail component render');

    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.dish)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
