import React from 'react';
import './button.css';
const Button=(props)=>{
    
    
    const showbutton=(type)=>{
        let template=null;
        switch(type){
            case 'login':
                template=(
                    <div className="login">
                        <input type={props.inputType} value={props.value} />
                    </div> 
                )
                break;
            default :
                template=null;
                break    
        }
        return template;
    }

    return(
        <div>
            {showbutton(props.type)}
        </div>
    )
}

export default Button;