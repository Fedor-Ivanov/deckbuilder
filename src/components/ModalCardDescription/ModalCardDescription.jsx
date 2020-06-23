import React from 'react'
import { connect } from 'react-redux';
import { toggleModal } from '../../store/actions/modal'

function ModalCardDescription({ onToggleModal, modalCard }) {

    function onCloseModalClick() {
        onToggleModal()
    }

    return (
        <>
            {modalCard &&
                <div style={backdropStyle}>
                    <div style={modalStyle}>
                        <div>{modalCard.name}</div>
                        <button style={closeBtn} onClick={onCloseModalClick}>close</button>
                    </div>
                </div>
            }
        </>

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

const closeBtn = {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
    border: 'none',
    display: "block",
    marginTop: 10
};


function mapStateToProps({ modal }) {

    return {
        modalCard: modal.modalCard,
    };
}

const mapDispatchToProps = {

    onToggleModal: toggleModal,

};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCardDescription)



