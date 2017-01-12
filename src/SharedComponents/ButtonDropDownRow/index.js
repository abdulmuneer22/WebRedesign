import React , {Component} from 'react'

import Button from './Button'

class ButtonDropDown extends Component{
    render(){
        return(
            <div className="row" style={{marginTop : 10,marginBottom : 20}}>
                <div className="col-md-6 col-sm-6">
                <Button />
                </div>

                <div className="col-md-6 col-sm-6">
                <div style={{float : 'right'}}>
                Toggle
                </div>
                </div>
                
            </div>
        );
    }
}


export default ButtonDropDown