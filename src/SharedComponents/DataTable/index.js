import React , {Component} from 'react'


import * as Table from 'reactabular-table';
import * as resolve from 'table-resolver';
import * as search from 'searchtabular';


class DataTable extends Component{
    
    constructor(props) {
    super(props);

    this.state = {
      query: {}, // Search query
      columns: [
        {
          header: {
            label: ''
          },
          children: [
            {
              property: 'name.name',
              header: {
                label: 'Column 1'
              }
            },
            {
              property: 'name.assignee',
              header: {
                label: 'Column 2'
              }
            },
            {
              property: 'name.task',
              header: {
                label: 'Column 3'
              }
            }
          ]
        },
        {
          property: 'name.time',
          header: {
            label: 'Column 4'
          }
        }
      ],
      rows: [
        {
          id: 100,
          name: {
            first: 'Adam',
            last: 'West',
            name : 'Jennifer Pinsker',
            assignee : 'John Boo',
            task : 'Profile Updated',
            time : '15 Sep, 8:56 AM'
          },
          age: 10
        },
        {
          id: 101,
          name: {
            first: 'Brian',
            last: 'Eno',
            name : 'Bob Robson',
            assignee : 'Michael Robinson',
            task : 'Violation Resolved',
            time : '15 Sep, 8:56 AM'
            
            
            
          },
          age: 43
        },
        {
          id: 103,
          name: {
            first: 'Jake',
            last: 'Dalton',
            name : 'Michael Robinson',
            assignee : 'Alexander Robson',
            task : 'Suspect Resolved',
            time : '15 Sep, 8:56 AM'
            
            
            
          },
          age: 33
        },
        {
          id: 104,
          name: {
            first: 'Jill',
            last: 'Jackson',
            name : 'Jennifer Pinsker',
            assignee : 'Jennifer Pinskar',
            task : 'Profile Violation Detected',
            time : '15 Sep, 8:56 AM'
            
            
            
          },
          age: 63
        },
        {
          id: 105,
          name: {
            first: 'Jill',
            last: 'Jackson',
            name : 'Jennifer Pinsker',
            assignee : 'Jennifer Pinskar',
            task : 'Profile Violation Detected',
            time : '15 Sep, 8:56 AM'
            
            
            
          },
          age: 63
        },
        {
          id: 106,
          name: {
            first: 'Jill',
            last: 'Jackson',
            name : 'Jennifer Pinsker',
            assignee : 'Jennifer Pinskar',
            task : 'Violation Resolved',
            time : '15 Sep, 8:56 AM'
            
            
            
          },
          age: 63
        },
        {
          id: 107,
          name: {
            first: 'Jill',
            last: 'Jackson',
            name : 'Jennifer Pinsker',
            assignee : 'Jennifer Pinskar',
            task : 'Profile Violation Detected',
            time : '15 Sep, 8:56 AM'
            
            
            
          },
          age: 63
        },
        {
          id: 108,
          name: {
            first: 'Jill',
            last: 'Jackson',
            name : 'Jennifer Pinsker',
            assignee : 'Jennifer Pinskar',
            task : 'Violation Resolved',
            time : '15 Sep, 8:56 AM'
            
            
            
          },
          age: 63
        },
        {
          id: 109,
          name: {
            first: 'Jill',
            last: 'Jackson',
            name : 'Jennifer Pinsker',
            assignee : 'Jennifer Pinskar',
            task : 'Profile Violation Detected',
            time : '15 Sep, 8:56 AM'
            
            
            
          },
          age: 63
        },
        {
          id: 110,
          name: {
            first: 'Jill',
            last: 'Jackson',
            name : 'Jennifer Pinsker',
            assignee : 'Jennifer Pinskar',
            task : 'Violation Resolved',
            time : '15 Sep, 8:56 AM'
            
            
            
          },
          age: 63
        }
      ]
    };
  }


    render(){

    const { columns, query, rows } = this.state;
    const resolvedColumns = resolve.columnChildren({ columns });
    const resolvedRows = resolve.resolve({
        columns: resolvedColumns,
        method: resolve.nested
    })(rows);
    const searchedRows = search.multipleColumns({
        columns: resolvedColumns,
        query
    })(resolvedRows);

    
    return (
    <div className="row">
    <Table.Provider columns={resolvedColumns}>
        <Table.Header
        // style ={{fontSize : 18}}
        className = "row"
        headerRows={resolve.headerRows({ columns })}
        >

        <search.Columns
        className="col-md-3"
        query={query}
        columns={resolvedColumns}
        onChange={query => this.setState({ query })}
        />

        </Table.Header>

        <Table.Body rows={searchedRows} rowKey="id" />
        
    </Table.Provider>
    </div>
    );
    }

}


export default DataTable