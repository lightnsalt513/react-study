import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({selectedDish}) {
  return (
    <Card>
      <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name} />
      <CardBody>
        <CardTitle>{selectedDish.name}</CardTitle>
        <CardText>{selectedDish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function RenderComments({selectedComments}) {
  const comment = selectedComments.map((selectedComment) => {
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
}

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish selectedDish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments selectedComments={props.dish.comments} />
        </div>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
}

export default DishDetail;
