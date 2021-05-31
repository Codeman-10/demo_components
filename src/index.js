import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }

  renderCell () {

    return (<div className="test1">
<table  >
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
 
</table>




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
          SubComponent={() => this.renderCell()}
        />
        <br />

      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
