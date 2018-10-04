import React,{Component} from 'react';


//components

import Header from '../component/header/header';
class Layout extends Component{
   render(){
    return(
        <div>
            <Header />
            {this.props.children}
            
        </div>
    )
   }
}

export default Layout;
