/* eslint-disable react/prop-types */
import React, { Component } from 'react';

const BudgetContext = React.createContext();


class BudgetProvider extends Component {

    state = {
        budget: 1000,
        expenses: [
            {title: 'dress', amount: 5000},
            {title: 'holiday', amount: 1000},
            {title: 'cake', amount: 500}
        ]
    }

    componentDidMount() {
        
    }

    render() {
        return(
            <BudgetContext.Provider 
                    value={this.state}
                >
                {this.props.children}
            </BudgetContext.Provider>   
        )
    }
}

const BudgetConsumer = BudgetContext.Consumer;

export { BudgetProvider, BudgetConsumer };
