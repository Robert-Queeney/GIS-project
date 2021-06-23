import React, { Component } from 'react';

class Form extends Component {

    constructor(props){
        super(props)
        this.state = {
            beginningMonth: "", 
            beginningYear: "", 
            endMonth: "", 
            endYear: ""
        }
    }

    handleBeginningMonthChange = (event) => {
        this.setState({beginningMonth: event.target.value})
    }

    handleBeginningYearChange = (event) => {
        this.setState({beginningYear: event.target.value})
    }

    handleEndMonthChange = (event) => {
        this.setState({endgMonth: event.target.value})
    }

    handleEndYearChange = (event) => {
        this.setState({endYear: event.target.value})
    }

    render(){
        return (
            <form>
            <div>
                <label>Beginning Month</label>
                <input 
                    type="text" 
                    value={this.state.username} 
                    onChange={this.handleBeginningMonthChange}/>
            </div>
            <div>
                <label>Beginning Year</label>
                <input 
                    type="text" 
                    value={this.state.username} 
                    onChange={this.handleBeginningYearChange}/>
            </div>
            <div>
                <label>End Month</label>
                <input 
                    type="text" 
                    value={this.state.username} 
                    onChange={this.handleEndMonthChange}/>
            </div>
            <div>
                <label>End Year</label>
                <input 
                    type="text" 
                    value={this.state.username} 
                    onChange={this.handleEndYearChange}/>
            </div>
            </form>
        )
    }
}

export default Form;