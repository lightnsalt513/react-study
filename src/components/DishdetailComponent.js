import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';

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
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to='/menu'>Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>
              {props.dish.name}
            </BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish selectedDish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments selectedComments={props.comments} />
            <CommentForm />
          </div>
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
