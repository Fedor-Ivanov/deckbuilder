import React from 'react'
import { connect } from 'react-redux';
import { toggleModal } from '../../store/actions/modal'
import Card from '../Card/Card'

function ModalCardDescription({ onToggleModal, modalCard }) {

    function onCloseModalClick() {
        onToggleModal()
    }

    const fromModal = true;

    return (
        <>
            {modalCard &&



                <div>
                    <Card fromModal={fromModal} card={modalCard}></Card>
                    <div>{modalCard.name}</div>
                    <div>{modalCard.ability}</div>
                    <div>{modalCard.flavor}</div>

                    <button style={closeBtn} onClick={onCloseModalClick}>close</button>
                </div>

            }
        </>

    )
}

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



