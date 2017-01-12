import React,{Component} from 'react';


class Toggle extends Component{
    constructor(){
        super();
        this.state = {
            isToggleActive : false
        }
    }


    switchToggle(){
        this.setState({
            isToggleActive : !this.state.isToggleActive
        });
    }


    render(){
        return(
            <div>
            {
                this.state.isToggleActive ?
            <i className="fa fa-toggle-on" aria-hidden="true" style={{fontSize : 28, color : 'grey'}} 
            onClick={()=>{this.switchToggle()}}
            ></i>
            :
            <i className="fa fa-toggle-off" aria-hidden="true" style={{fontSize : 28, color : 'grey'}} 
            onClick={()=>{this.switchToggle()}}
            ></i>
                     
            }
            </div>
        )
    }
}

export default Toggle
