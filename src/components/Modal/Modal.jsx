import React from 'react'
import './modal.css'
import ModalNewDeck from '../ModalNewDeck/ModalNewDeck'
import ModalCardDescription from '../ModalCardDescription/ModalCardDescription'
import { connect } from 'react-redux';



function Modal({
    modalCardId,
}) {

    return (
        <div style={backdropStyle}>
            <div style={modalStyle}>

                {modalCardId === 'new' ? (

                    <ModalNewDeck></ModalNewDeck>

                ) : (
                        <ModalCardDescription></ModalCardDescription>
                    )}

            </div>
        </div>
    )
}


const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50
};

const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    minWidth: 500,
    minHeight: 185,
    margin: '0 auto',
    padding: 30,
    display: "block",
};


function mapStateToProps({ modal }) {

    return {

        modalCardId: modal.modalCardId,

    };
}

const mapDispatchToProps = {



};

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
