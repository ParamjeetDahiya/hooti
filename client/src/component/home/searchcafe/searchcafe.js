import React,{Component} from 'react';
import './searchcafe.css';

class SearchCafe extends Component{

    state={
        searchname:'',
        date:'',
        capacity:''
    }

    handleChangeSearch=(event)=>{
        let val=event.target.value;
        this.setState({
            searchname:val
        })
    }
    handleChangeDate=(event)=>{
        this.setState({
            date:event.target.value
        })
    }
    handleChangeCapacity=(event)=>{
        this.setState({
            capacity:event.target.value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div className="seachcafe">
                <div className="searchlist">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="search for a restaurant, cafe or club" onChange={this.handleChangeSearch} />
                        <input type="date" onChange={this.handleChangeDate} />
                        <input type="number" onChange={this.handleChangeCapacity} defaultValue="1"/>
                        <input type="submit" value="Search Hooti" />
                    </form>
                    
                </div>
                <div className="package"
                    style={{
                        background:`url('/images/backgrounds/package.jpg')`
                    }}
                >
                    <div className="packageText">
                        <h2>
                            Take a break from work<br/>
                            Plan a party from your office
                        </h2>
                        <h2>
                            Starting at<br/>
                            <strong>Rs</strong>799
                        </h2>
                    </div>
                </div>
        
            </div>
        )
    }
}

export default SearchCafe;