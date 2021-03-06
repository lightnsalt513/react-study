import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderDish({selectedDish}) {
  return (
    <FadeTransform in 
        transformProps={{
          exitTransform: 'scale(0.5) translateY(-50%)'
        }}>
      <Card>
        <CardImg width="100%" src={baseUrl + selectedDish.image} alt={selectedDish.name} />
        <CardBody>
          <CardTitle>{selectedDish.name}</CardTitle>
          <CardText>{selectedDish.description}</CardText>
        </CardBody>
      </Card>
    </FadeTransform>
  );
}

function RenderComments({selectedComments, postComment, dishId}) {
  const comment = selectedComments.map((selectedComment) => {
    return (
      <Fade in>
        <div key={selectedComment.id}>
          <p>{selectedComment.comment}</p>
          <p>-- {selectedComment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(selectedComment.date)))}</p>
        </div>
      </Fade>
    );
  });

  return (
    <Stagger in>
      <div>
        <h4>Comments</h4>
        <div>
          {comment}
        </div>
      </div>
    </Stagger>
  );
}

const DishDetail = (props) => {
  if (props.isLoading) {
    return(
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return(
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null) {
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
            <RenderComments selectedComments={props.comments}
              postComment={props.postComment}
              dishId={props.dish.id} />
            <CommentForm postComment={props.postComment}
              dishId={props.dish.id}/>
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
