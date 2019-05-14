import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/es/Col";
import "./calenderStyle.css";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/es/Row";
import Form from "react-bootstrap/es/Form";
import Tabs from "react-bootstrap/es/Tabs";
import Tab from "react-bootstrap/Tab";

class AddProfile extends React.Component {
  componentWillMount() {
    this.props.getAvailabilityOverview();
  }

  state = {
    key: ""
  };

  render() {
    return (
      <Container fluid={true} className="availabilityContainer">
        <Col md={3} className="availabilityPanel">
          <h5 className={"availabilityPanelHeader"}>Availability Overview</h5>
          {this.props.availabilityOverview.map(item => (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>{`Beschibaar ${item.name}`}</th>
                  <th>Van</th>
                  <th>Tot</th>
                </tr>
              </thead>
              <tbody>
                {item.schedule.map(schedule => (
                  <tr>
                    <td>{schedule.date}</td>
                    <td>{schedule.from}</td>
                    <td>{schedule.to}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ))}
        </Col>
        <Col md={9} className="calender">
          <Row>
            <Col md="2" />
            <Col md="2">
              <Form.Label column sm="4" md="12">
                Select a date:
              </Form.Label>
            </Col>
            <Col md="3">
              <Form.Control
                type="date"
                onChange={e => this.props.getScheduleByDate(e.target.value)}
              />
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              {this.props.schedules && this.props.schedules.interviews && (
                <Tabs
                  id="controlled-tab-example"
                  activeKey={this.state.key}
                  onSelect={key => this.setState({ key })}
                >
                  {this.props.schedules.interviews.map(interview => (
                    <Tab
                      eventKey={interview.meetingRoom}
                      title={interview.meetingRoom}
                    >
                      <Col md={6}>
                        <Row>
                          <Table striped bordered hover>
                            <tbody>
                              <tr>
                                <td width="120">Interviewer</td>
                                <td>{interview.interviewer}</td>
                              </tr>
                            </tbody>
                          </Table>
                          {interview.schedules.map(schedule => (
                            <Table striped bordered hover>
                              <tbody>
                                <tr>
                                  <td width="120">Time</td>
                                  <td>{schedule.time}</td>
                                </tr>
                                <tr>
                                  <td width="120">Candidate</td>
                                  <td>{schedule.candidate}</td>
                                </tr>
                              </tbody>
                            </Table>
                          ))}
                        </Row>
                      </Col>
                    </Tab>
                  ))}
                </Tabs>
              )}
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}

export default AddProfile;
