import React,{Component} from 'react';

class CheckBox extends Component{
    constructor(){
        super();
        this.state = {
            isChecked : false
        }
    }


    Tick(){
        this.setState({
            isChecked : !this.state.isChecked
        })
    }

    render(){
        return(
            <div>
                {
                    !this.state.isChecked ?
                    <i className="fa fa-square-o" aria-hidden="true" style={{fontSize : 25, color : 'black'}}
                    onClick={()=>{this.Tick()}}
                    ></i>    
                    :
                    <i className="fa fa-check-square-o" aria-hidden="true" style={{fontSize : 25, color : 'black'}}
                    onClick={()=>{this.Tick()}}
                    ></i>    
                }
                
            </div>
        )
    }
}


export default CheckBox