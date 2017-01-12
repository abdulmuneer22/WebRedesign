import React , {Component} from 'react'
import styles from '../Styles/styles.css'


class Pagination extends Component{
    render(){
        return(
            <div className={styles.paginationWrapper}>
                <ul className="pagination" style={{marginTop : 5}}>
                    <li>
                        <a href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>

                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                    
                    
                    <li>
                        <a href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}


export default Pagination