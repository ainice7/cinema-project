import React from 'react';
import ReactDom from 'react-dom';

import { ModalWrapper } from './ModalWrapper';

export class ModalBuyTicket extends React.Component {
    root = document.createElement("div");
    body = document.querySelector("body");

    componentDidMount() {
        this.body.appendChild(this.root);
    }

    componentWillUnmount() {
        this.body.removeChild(this.root);
    }

    render() {
        const { session, handleCloseModal } = this.props;
        return ReactDom.createPortal(
            <ModalWrapper session={session} handleCloseModal={handleCloseModal}/>, 
        this.root)
    }
} 