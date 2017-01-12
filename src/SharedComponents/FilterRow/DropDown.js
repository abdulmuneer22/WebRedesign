import React , {Component} from 'react'

class DropDown extends Component{
    render(){
        return(
            <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                25 
                <span className="caret"></span>
                </button>
            
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="#">50</a></li>
                    <li><a href="#">100</a></li>
                    <li><a href="#">150</a></li>
                    
                </ul>
            </div>
    );
    }
}


export default DropDown

