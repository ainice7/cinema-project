import React from 'react';
import { connect }  from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { getMovies } from '../../actions/index';
import { MainPageContainer } from '../MainPage/Main';
import { MovieContainer } from '../MoviePage/Movie'; 
import { ScheduleContainer } from '../Schedule/Schedule';
import Preloader from '../Common/Preloader';
import Fail from '../Common/Fail';

class Main extends React.Component {
    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        const {isLoading, loadingFail} = this.props;

        if(isLoading) {
            return <Preloader />
        }   else if(loadingFail) {
            return <Fail />
        }

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

const mapStateToProps = (state) => ({
    isLoading: state.loading.isLoading,
    loadingFail: state.loading.loadingFail
})

const mapDispatchToProps = {
    getMovies,
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;