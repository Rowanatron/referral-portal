import React from "react";
import Table from "react-bootstrap/Table";
import Status from "./Status";
import Modal from "react-bootstrap/es/Modal";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/es/Col";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/es/Form";
import Button from "react-bootstrap/es/Button";
library.add(faEye);
library.add(faEdit);

class CustomTable extends React.Component {
  state = {
    showProfile: false,
    editProfile: false,
    status: "",
    comment: "",
    validated: false,
    meetingRoom: "",
    interviewer: "",
    date: ""
  };

  updateProfile = e => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      e.stopPropagation();
      let formData = JSON.stringify(this.state);
        fetch("http://localhost:8087/candidates/candidate/"+this.state.selectedProfile[0]["id"]+"/status", {
          headers: {
            "Content-Type": "application/json"
          },
          method: "PUT",
          body: formData
        });
      }

    this.setState({ validated: true });
  };

  render() {
    const head = [
      "#",
      "Name",
      "Email",
      "ReferredBy",
      "Skills",
      "Status",
      "View",
        ...(this.props.editUser ? ["Edit"] : [])
    ];
    return (
      <React.Fragment>
        {this.state.selectedProfile && (
          <Modal
            size="lg"
            show={this.state.showProfile}
            onHide={() => this.setState({ showProfile: false })}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                {this.state.selectedProfile[0]["name"]}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <h5>Personal Info</h5>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>{this.state.selectedProfile[0]["name"]}</td>
                      </tr>
                      <tr>
                        <td>In Netherlands</td>
                        <td>{this.state.selectedProfile[0]["inNL"] ? 'Yes' : 'No'}</td>
                      </tr>
                      <tr>
                        <td>Skills</td>
                        <td>{this.state.selectedProfile[0]["skill"]}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>Referral Info</h5>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>Has been referred</td>
                        <td>{this.state.selectedProfile[0]["referred"] ? 'Yes' : 'No'}</td>
                      </tr>
                      <tr>
                        <td>Referred by</td>
                        <td>{this.state.selectedProfile[0]["referredBy"]}</td>
                      </tr>
                      <tr>
                        <td>Received Date</td>
                        <td>
                          {this.state.selectedProfile[0]["receivedDate"]}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>Status Info</h5>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>Status</td>
                        <td>{this.state.selectedProfile[0]["status"]}</td>
                      </tr>
                      <tr>
                        <td>Comment</td>
                        <td>{this.state.selectedProfile[0]["comments"]}</td>
                      </tr>
                      <tr>
                        <td>Last update</td>
                        <td>
                          {this.state.selectedProfile[0]["statusLastUpdated"]}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
        )}
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              {head.map(head => (
                <th key={head}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.props.profiles &&
              this.props.profiles.map((item, i) => (
                <tr key={item.id}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.referredBy}</td>
                  <td>{item.skill}</td>
                  <td>
                    <Status>{item.status}</Status>
                  </td>
                  <td>
                    <a
                      href="javascript:void(0)"
                      onClick={() =>
                        this.setState({
                          showProfile: true,
                          selectedProfile: this.props.profiles.filter(
                            profile => profile.id === item.id
                          )
                        })
                      }
                    >
                      {" "}
                      <FontAwesomeIcon icon="eye" />
                    </a>{" "}
                  </td>
                  { this.props.editUser && <td>
                    <a
                      href="javascript:void(0)"
                      onClick={() =>
                        this.setState({
                          editProfile: true,
                          selectedProfile: this.props.profiles.filter(
                            profile => profile.id === item.id
                          )
                        })
                      }
                    >
                      {" "}
                      <FontAwesomeIcon icon="edit" />
                    </a>
                  </td> }
                </tr>
              ))}
          </tbody>
        </Table>
        {this.state.selectedProfile && (
          <Modal
            size="lg"
            show={this.state.editProfile}
            onHide={() => this.setState({ editProfile: false })}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                {this.state.selectedProfile[0]["name"]}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col>
                  <h5>Status Update</h5>
                  <Form
                    noValidate
                    validated={this.state.validated}
                    onSubmit={e => this.updateProfile(e)}
                  >
                    <Table striped bordered hover>
                      <tbody>
                        <tr>
                          <td>Status</td>
                          <td>
                            <Form.Control
                              as="select"
                              onChange={e =>
                                this.setState({ status: e.target.value })
                              }
                              required
                            >
                              <option/>
                              {this.props.statusList &&
                                this.props.statusList.map(status => (
                                  <option selected={this.state.selectedProfile[0]["status"]}
                                          value={status}>
                                    {status}
                                  </option>
                                ))}
                            </Form.Control>
                          </td>
                        </tr>
                        <tr>
                          <td>Comment</td>
                          <td>
                            <Form.Group controlId="profileStatus" as={Row}>
                              <Form.Control
                                as="textarea"
                                rows="3"
                                placeholder={this.state.selectedProfile[0]["comments"]}
                                required
                                onChange={e =>
                                  this.setState({ comments: e.target.value })
                                }
                              />
                            </Form.Group>
                          </td>
                        </tr>
                        { this.state.status === "scheduled" &&
                        <React.Fragment>
                        <tr>
                          <td>Meeting Rooms</td>
                          <td>
                            <Form.Control
                                as="select"
                                onChange={e =>
                                    this.setState({ meetingRoom: e.target.value })
                                }
                                required
                            >
                              <option/>
                              {this.props.meetingRooms &&
                              this.props.meetingRooms.map(room => (
                                  <option value={room.key}>
                                    {room.value}
                                  </option>
                              ))}
                            </Form.Control>
                          </td>
                        </tr>
                        <tr>
                          <td>Interviewer</td>
                          <td>
                            <Form.Control
                                as="select"
                                onChange={e =>
                                    this.setState({ interviewer: e.target.value })
                                }
                                required
                            >
                              <option/>
                              {this.props.interviewers &&
                              this.props.interviewers.map(interviewer => (
                                  <option value={interviewer.key}>
                                    {interviewer.value}
                                  </option>
                              ))}
                            </Form.Control>
                          </td>
                        </tr>
                        <tr>
                          <td>Date</td>
                          <td>
                            <Form.Control
                                type="date"
                                onChange={e =>
                                    this.setState({ date: e.target.value })
                                }
                                required
                            />
                          </td>
                        </tr>
                        </React.Fragment>}
                      </tbody>
                    </Table>

                    <Row>
                      <Col sm="9" />
                      <Col sm="3">
                        <Button type="submit">Update Profile</Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
        )}
      </React.Fragment>
    );
  }
}

export default CustomTable;
