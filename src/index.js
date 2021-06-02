import React from "react";
import { render } from "react-dom";
import { makeData } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const columns = [
  {
    Header: "Name",
    columns: [
      {
        Header: "First Name",
        accessor: "firstName"
      },
      {
        Header: "Last Name",
        id: "lastName",
        accessor: (d) => d.lastName
      }
    ]
  },
  {
    Header: "Info",
    columns: [
      {
        Header: "Age",
        accessor: "age"
      },
      {
        Header: "Status",
        accessor: "status"
      }
    ]
  },
  {
    Header: "Stats",
    columns: [
      {
        Header: "Visits",
        accessor: "visits"
      }
    ]
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData(),
      expanded: {}
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          expanded={this.state.expanded}
          onExpandedChange={(expandedList) => {
            const expanded = {};
            Object.keys(expandedList).forEach((item) => {
              const expand = Boolean(
                expandedList[item] && expandedList[item].constructor === Object
              );
              expanded[item] = expand;
            });
            this.setState({ expanded });
          }}
          getTrProps={(state, rowInfo, instance) => {
            let onject = this.state.expanded;
            var index = Object.keys(onject).filter(function (key) { return onject[key] === true })[0];
            console.log(index,rowInfo.index)
            return {
              style: {
                border: rowInfo.index == index
                    ? "solid 1px red"
                    : "none"
              }
            }
          }}
          data={data}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
          SubComponent={(row) => {
            return (
              <div style={{ padding: "20px" ,border:"1px solid red" }}>
                <em>
                  You can put any component you want here, even another React
                  Table!
                </em>
                <br />
                <br />
                <ReactTable
                  data={data}
                  columns={columns}
                  defaultPageSize={3}
                  showPagination={false}
                  SubComponent={(row) => {
                    return (
                      <div style={{ padding: "20px" }}>
                        Another Sub Component!
                      </div>
                    );
                  }}
                />
              </div>
            );
          }}
        />
        <br />

      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
