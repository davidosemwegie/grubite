import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';


const columns = [
    {
        dataField: 'foodId',
        text: "Food Id"
    },
    {
        dataField: 'foodName',
        text: 'Food Item',
        sort: true,
        filter: textFilter()
    },
    {
        dataField: 'description',
        text: 'Description'
    },
    {
        dataField: 'price',
        text: 'Product Price',
        sort: true
    }];

class Table extends Component {

    render() {
        return (
            <div>
                <BootstrapTable keyField='foodId' data={this.props.data} columns={columns} filter={filterFactory()} />
            </div>
        );
    }
}

export default Table;