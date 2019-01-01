import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
  }

  render() {
    return(
      <React.Fragment>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil fa-lg"></span> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <div className="form-group">
                <Label htmlFor="rating">Rating</Label>
                <Control.select model=".rating" id="rating" name="rating"
                  className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </div>
              <div className="form-group">
                <Label htmlFor="username">Your Name</Label>
                <Control.text model=".username" id="username" name="username"
                  placeholder="Your Name"
                  className="form-control" />
              </div>
              <div className="form-group">
                <Label htmlFor="userComment">Your Name</Label>
                <Control.textarea model=".userComment" id="userComment" name="userComment"
                  rows="4"
                  className="form-control" />
              </div>
              <div className="form-group">
                <Button type="submit" color="primary">Submit</Button>
              </div>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default CommentForm;
