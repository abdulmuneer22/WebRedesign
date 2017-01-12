import React , {Component} from 'react'

import styles from '../Styles/styles.css'

class NavBar extends Component{
    render(){
        return(
            <div className={styles.navBar}>
                <div className={"col-md-2 col-sm-2"}>
                <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true" style={{color : 'white',fontSize :28 }}></span>
                </div>


                <div className="col-md-8 col-sm-8">
                <div className={styles.brandName}>BRAND NAME</div>
                </div>

                <div className="col-md-2 col-sm-2">
                <div className={styles.logOutNavBar}>
                Logout
                </div>
                </div>
                

            </div>
        );
    }
}


export default NavBar