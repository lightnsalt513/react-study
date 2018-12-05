import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
    super(props);
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

  renderComments(selectedComments) {

    if (selectedComments != null) {
      const comment = selectedComments.map((selectedComment) => {

        const date = new Date(selectedComment.date),
              locale = 'en-us',
              month = date.toLocaleString(locale, {
                month: "short"
              }),
              day = date.getDate(),
              year = date.getFullYear();

        return (
          <div>
            <p>{selectedComment.comment}</p>
            <p>-- {selectedComment.author}, {month + ' ' + day + ', ' + year}</p>
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
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.selectedDish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.selectedComments)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
