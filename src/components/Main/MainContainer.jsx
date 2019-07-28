import React from 'react';
import { connect }  from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { getMovies } from '../../actions/index';
import { MainPageContainer } from '../MainPage/Main';

class Main extends React.Component {
    componentDidMount() {
        this.props.getMovies()
    }

    render() {
        return (
           <div>
            <Switch>
                <Route path='/' exact component={MainPageContainer} />
                <Route path='/movies/:id' />
            </Switch>
        </div> 
        )
        
    }
}

const mapDispatchToProps = {
    getMovies
};

const MainContainer = connect(null, mapDispatchToProps)(Main);

export default MainContainer;