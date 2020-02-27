import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";


class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name:'',
      date:'',
      image:"",
      rating:''
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handlChange = (e) =>{
      this.setState({[e.target.name]:e.target.value})
  }
  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Add New Movie
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                <input onChange={this.handlChange} type="text" name="name" />
              </div>
              <div>
                <label>Image:</label>
                <input onChange={this.handlChange} type="text" name="image" />
              </div>
              <div>
                <label>Rating:</label>
                <input onChange={this.handlChange} type="text" name="rating" />
              </div>
              <div>
                <label>Year:</label>
                <input onChange={this.handlChange} type="text" name="year" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary" onClick={() =>{
                this.props.add(this.state)
                this.setState({show: false});
                }}>Add Movie</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddModal;
