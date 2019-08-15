import React from 'react';
import axios from 'axios';

import { URL_SPACE_SHADOW} from '../../../constance';
import { getRowsArray } from '../../../utils/getRowsArray';
import { getRandomInt } from '../../../utils/getRandomInt';
import Preloader from '../../Common/Preloader';
import { ModalContent } from './ModalContent';


export class ModalWrapper extends React.Component {
    state = {
        isLoading: true, 
        space: [], 
        chosenPlace: null,
        showForm: false, 
        user: null
    }

    componentDidMount() {
        axios.get(`${URL_SPACE_SHADOW}?session=${this.props.session._id}`)
            .then( ({ data }) => { 
                this.setLoadingDone();
                this.getPlaceArray(data.space)
            })
            .catch(error => {
                this.setLoadingDone();
                console.error(error)});
    }

    setLoadingDone = () => (this.setState({ isLoading: false }));

    getPlaceArray = (arr) => {
        const sortedByRow = arr.sort((a, b) => (a.row - b.row));

        const rows = getRowsArray(sortedByRow);
        const rowsSortedByPlaces = rows.map(item => {
            return item.sort((a,b) => (a.place - b.place))
        })
        this.setState({ space: rowsSortedByPlaces.map(item => {
            const random = getRandomInt(2, 6);
            return item.map(elem => {
                if(elem.place % random === 0) {
                    return {
                        ...elem,
                        booked: true
                    }
                }
                return elem;
            });
        })});
    }

    handleChosePlace = (data) => {
        this.setState({chosenPlace: data});
    }

    handleOpenForm = () => {
        this.setState({ showForm: true });
    }

    handleClickBuy = (data) => {
        this.setState({ user: data })
    }

    render() {
        const { isLoading, space, chosenPlace, showForm, user } = this.state;
        const { session, handleCloseModal } = this.props;

        return (
            <div className="modal-background">
                <div className="modal-content">
                    {isLoading 
                        ? <Preloader /> 
                        : <ModalContent 
                            user={user}
                            session={session}
                            space={space}
                            chosenPlace={chosenPlace}
                            showForm={showForm}
                            handleCloseModal={handleCloseModal}
                            handleChosePlace={this.handleChosePlace}
                            handleClickBuy={this.handleClickBuy}
                            handleOpenForm={this.handleOpenForm} />
                    }
                    
                </div>
            </div>
        )
    }
}