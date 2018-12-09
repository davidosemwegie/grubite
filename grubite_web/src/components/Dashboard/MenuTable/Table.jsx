import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';
import { isEmpty } from '../../../backend/functions'
import './Table.css'


const columns = [
    {
        dataField: 'foodId',
        text: "Food Id",
        hidden: true
    },
    {
        dataField: 'foodName',
        text: 'Food Item',
        sort: true
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

        let empty = null

        if (isEmpty(this.props.data)) {
            return (
                <p className="emptyFoodTableText">Sorry there are no food items available</p>
            )
            //empty = (<p className="emptyFoodTableText">There are no food Items in this category</p>) 
        } else {
            return (
                <div>
                    <BootstrapTable keyField='foodId' data={this.props.data} columns={columns} filter={filterFactory()} />
                </div>
            )
        }
    }
}

export default Table;