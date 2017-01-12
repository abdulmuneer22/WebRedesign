import React , {Component} from 'react'

import styles from '../Styles/styles.css'
import DropDown from './DropDown'
import Pagination from './Pagination'

class FilterRow extends Component{
    
    render(){
        return(
            <div className="row" style={{marginTop : 20}}>
                <div className={"col-md-6 col-sm-6"}>
                <div className={styles.filterRowLeftItem}>
                <p className={styles.normalText}>Showing</p>
                
                <DropDown />
                
                
                <p className={styles.normalText}>Results</p>
                </div>

                </div>

                <div className="col-md-6 col-sm-6">
                <Pagination/>
                </div>
                
            </div>
        );
    }
}


export default FilterRow