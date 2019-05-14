import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Chart } from "react-google-charts";
import ProfilesTable from "./ProfilesTable";
import { checkStatus } from "../utility/checkLoginStatus";

class Dashboard extends React.Component {
  componentWillMount() {
    checkStatus();
  }

  render() {
    const pieOptions = {
      title: "Referral Status",
      pieHole: 0.6,
      slices: [
        {
          color: "#2BB673"
        },
        {
          color: "#d91e48"
        },
        {
          color: "#007fad"
        },
        {
          color: "#e9a227"
        }
      ],
      legend: {
        position: "bottom",
        alignment: "center",
        textStyle: {
          color: "233238",
          fontSize: 14
        }
      },
      tooltip: {
        showColorCode: true
      },
      chartArea: {
        left: 0,
        top: 0,
        width: "100%",
        height: "80%"
      },
      fontName: "Roboto"
    };
    return (
      <Container>
        <Row>
          <Col>
            <Chart
              chartType="PieChart"
              data={[
                ["status", "count"],
                ["Selected", 12],
                ["Hold", 12],
                ["Rejected", 12]
              ]}
              options={pieOptions}
              graph_id="PieChart"
              width={"100%"}
              height={"400px"}
              legend_toggle
            />
          </Col>
          <Col>
            <Chart
              width={"100%"}
              height={"400px"}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Year", "Referral", "New Employees"],
                ["2012", 0, 10],
                ["2013", 10, 8],
                ["2014", 23, 20],
                ["2015", 17, 45],
                ["2016", 18, 44],
                ["2017", 9, 55],
                ["2018", 11, 34],
                ["2019", 27, 54]
              ]}
              options={{
                title: "Referral Chart",
                hAxis: {
                  title: "Year"
                },
                vAxis: {
                  title: "Referral Count"
                },
                series: {
                  0: { curveType: "function" },
                  1: { curveType: "function" }
                }
              }}
              rootProps={{ "data-testid": "1" }}
            />
          </Col>
          <Col>
            <Chart
              width={"100%"}
              height={"400px"}
              chartType="Bar"
              loader={<div>Loading Chart</div>}
              data={[
                ["Year", "Referer"],
                ["2014", 10],
                ["2015", 11],
                ["2016", 6],
                ["2017", 10],
                ["2018", 13],
                ["2019", 4]
              ]}
              options={{
                title: "Referer Chart",
                // Material design options
                chart: {
                  title: "Referer Chart"
                }
              }}
              // For tests
              rootProps={{ "data-testid": "2" }}
            />
          </Col>
        </Row>
        <Row>
          <ProfilesTable
            profiles={this.props.profiles}
            statusList={this.props.statusList}
            editUser={false}
          />
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
