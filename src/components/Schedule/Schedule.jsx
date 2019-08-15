import React from 'react';
import { connect }  from 'react-redux';

import { getSessions } from '../../actions/schedule';
import { SessionsBlock } from './SessionsBlock';
import { dateOptions } from '../../constance';

class Schedule extends React.Component {
    componentDidMount() {
        this.props.getSessions();
    }

    getSessions = () => {
        const {sessions, movies, rooms} = this.props;
        const sessionArr = sessions.length 
                            && movies.length 
                            && rooms.length ? sessions.map(item => (
            item.map(elem => ({
                ...elem,
                room: rooms.find(room => room._id === elem.room).name,
                movie: movies.find(movie => movie._id === elem.movie)
            }))
        )) : [];

        return sessionArr.map(item => {
            return item.filter(elem => elem.movie)
        })
    }

    render() {
            return(
            <div className="schedule-window">
                {
                    this.getSessions().map((item, i) => (
                        <div className="schedule-block" key={i}>
                            <h2>{new Date(item[0].date).toLocaleString("ru", dateOptions)}</h2>
                            <SessionsBlock moviesOnDate={item} />
                        </div>
                    ))  
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    sessions: state.data.sessions,
    movies: state.data.movies,
    rooms: state.data.rooms
})

const mapDispatchToProps = {
    getSessions
};

export const ScheduleContainer = connect(mapStateToProps, mapDispatchToProps)(Schedule);