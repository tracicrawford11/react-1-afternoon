import React, { Component } from 'react';


class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            unfilteredArray: ['Juston', 'Doice', 'Steven', 'Kelli', 'Beaux'],
            filteredArray: [],
            userInput: ''
        };
    }
        handleChange(val) { 
            this.setState({ userInput: val });
        }
        filteredArray(userInput) {
            let names=this.state.names;
            let filteredArray=[];

            for (let i=0; i<names.length; i++) {
                if (names[i].includes(userInput)) {
                    filteredArray.push(names[i]);
                }
            }
            this.setState( {filteredArray: filteredArray});
    }
    render () {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Names: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={ () => this.filteredArray(this.state.userInput) }>Filter</button>
                <span className='resultsBox filterStringPB'>Filtered Names: { JSON.stringify(this.state.unfilteredArray, null, 10) }</span>
            </div>
        )
    }
}

export default FilterString;