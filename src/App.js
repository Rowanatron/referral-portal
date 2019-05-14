import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ViewProfiles from "./containers/viewProfiles";
import AddProfile from "./containers/addProfile";
import Calender from "./containers/calender";
import Header from "./components/Header";
import Login from "./containers/login";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

class App extends React.Component {
  componentWillMount() {
    this.props.getProfiles();
    this.props.getStatusList();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.loginStatus && <Header logout={this.props.logout} />}
        {this.props.generalError &&  <Alert key={0} variant={"danger"}>
          <Container>
            <p style={{ textAlign: "center" }}>{this.props.generalError}.</p>
          </Container>
        </Alert> }

        {this.props.loginStatus ? (
          <HashRouter>
            <Route
              path="/"
              exact
              render={() => (
                <Dashboard
                  profiles={this.props.profiles}
                  statusList={this.props.statusList}
                />
              )}
            />
            <Route exact path="/profiles/" render={() => <ViewProfiles />} />
            <Route exact path="/add-profile/" render={() => <AddProfile />} />
            <Route exact path="/calender/" render={() => <Calender />} />
            <Route exact path="/login/" render={() => <Login />} />
          </HashRouter>
        ) : (
          <HashRouter>
            <Route render={() => <Login />} />
          </HashRouter>
        )}
      </React.Fragment>
    );
  }
}

export default App;
