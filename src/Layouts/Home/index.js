import React , {Component} from 'react'

import NavBar from '../../SharedComponents/NavBar'
import FilterRow from '../../SharedComponents/FilterRow'
import DataTable from '../../SharedComponents/DataTable'
import ButtonDropDownRow from '../../SharedComponents/ButtonDropDownRow'
import Pagination from '../../SharedComponents/FilterRow/Pagination'


class Home extends Component{
    render(){
        return(
            <div>
            <NavBar />
            
            <div className="container">
            <FilterRow />
            <ButtonDropDownRow/>
            <DataTable/>
            <Pagination/>
            
            </div>

            </div>
        );
    }

}


export default Home