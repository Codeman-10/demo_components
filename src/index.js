import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";
import Stepper from 'react-stepper-horizontal';
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData(),
      dummydata: [{
        firstName: "gokul",
        lastName: "Vijay"
      }, {
        firstName: "gokul",
        lastName: "Vijay"
      }, {
        firstName: "gokul",
        lastName: "Vijay"
      }]

    };
  }

  renderCell(row) {

    console.log(row)
    return (<div className="test1">
      <div className="test2">
        <Stepper steps={[{ title: 'Step One' }, { title: 'Step Two' }, { title: 'Step Three' }, { title: 'Step Four' }]} activeStep={1} />

      </div>
      <ReactTable
        data={this.state.dummydata}
        columns={[
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
          {

            Header: "Age",
            accessor: "age",
          }
        ]}
        showPagination={false}
        sortable={false}
        defaultPageSize={3}
        className="-striped -highlight"
      />
    </div>);
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable

          data={data}
          columns={[
            {
              Header: "First Name",
              accessor: "firstName",
            },
            {
              Header: "Last Name",
              accessor: "lastName",
            },
            {

              Header: "Age",
              accessor: "age",
            }
            ,

            {
              columns: [
                {
                  expander: true,
                  Header: () => <strong>More</strong>,
                  width: 65,
                  Expander: ({ isExpanded, ...rest }) =>
                    <div>
                      {isExpanded
                        ? <span>close</span>
                        : <span>open</span>}
                    </div>,
                  style: {
                    cursor: "pointer",
                    fontSize: 25,
                    padding: "0",
                    textAlign: "center",
                    userSelect: "none"
                  },
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
          SubComponent={(row) => this.renderCell(row)}
        />
        <br />

      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
