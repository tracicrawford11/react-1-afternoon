import React, { Component } from 'react';


class FilterObject extends Component {
    constructor () {
        super ();

        this.state = {
            employees: [
                {
                    name: 'Traci',
                    title: 'Mom',
                    age: 46
                },
                {
                    name: 'Tony',
                    title: 'Dad',
                    age: 58
                },
                {
                    name: 'Cameron',
                    title: 'Son',
                    age: 18
                }
            ],
            userInput: '',
            filteredEmployees: []
        }
    }
    handleChange(val) {
        this.setState ( {userInput: val });
    }
    filteredEmployees(prop) {
        let employees = this.state.employees;
        let filteredEmployees = this.state.filteredEmployees;

        for (let i = 0; i <employees.length; i++) {
            if (employees[i].hasOwnProperty(prop)) {
                filteredEmployees.push(employees[i]);
            }
        }
        this.setState ({ filteredEmployees: filteredEmployees});
    }
    render () {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.employees, null, 10)}</span>
                <input className='inputLine' onChange = { (e) => this.handleChange (e.target.value) }></input>
                <button className='confirmationButton' onClick ={ ()=> this.filteredEmployees(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterObjectPB'>Filtered: {JSON.stringify(this.state.filteredEmployees)}</span>
            </div>
        )
    }
}

export default FilterObject;