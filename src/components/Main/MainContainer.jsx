import React from 'react';
import { connect }  from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { getMovies } from '../../actions/index';
import { MainPageContainer } from '../MainPage/Main';
import { MovieContainer } from '../MoviePage/Movie'; 
import Preloader from '../Common/Preloader';

class Main extends React.Component {
    componentDidMount() {
        this.props.getMovies();
        console.log('did',this.state);
    }

    componentWillMount() {
        console.log('will', this.state);
    }

    render() {
        
        return (
           <div>
            {this.props.isLoading ? <Preloader /> : <Switch>
                <Route path='/' exact component={MainPageContainer} />
                <Route path='/movie/:id' component={MovieContainer} />
            </Switch> }
            
        </div> 
        )
        
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.loading.isLoading
});

const mapDispatchToProps = {
    getMovies,
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;