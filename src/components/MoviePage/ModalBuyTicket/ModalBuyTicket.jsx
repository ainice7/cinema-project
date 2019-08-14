import React from 'react';
import ReactDom from 'react-dom'

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
        return ReactDom.createPortal(<div>kek</div>, this.root)
    }
} 