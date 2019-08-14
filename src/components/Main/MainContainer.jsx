import React from 'react';
import { connect }  from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { getMovies } from '../../actions/index';
import { MainPageContainer } from '../MainPage/Main';
import { MovieContainer } from '../MoviePage/Movie'; 
import { ScheduleContainer } from '../Schedule/Schedule';

class Main extends React.Component {
    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        
        return (
           <div>
            <Switch>
                <Route path='/' exact component={MainPageContainer} />
                <Route path='/movie/:id' component={MovieContainer} />
                <Route path='/sessions' component={ScheduleContainer} />
            </Switch>
        </div> 
        )
        
    }
}

const mapDispatchToProps = {
    getMovies,
};

const MainContainer = connect(null, mapDispatchToProps)(Main);

export default MainContainer;