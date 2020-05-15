import React from 'react'
import './modal.css'
import { connect } from 'react-redux';
import { selectDeck, selectLeader } from '../../store/actions/filters'



function Modal({ onToggleModal, faction, deckFaction, onSelectDeckFaction, leaders, deckLeader, onSelectDeckLeader }) {

    return (
        <div style={backdropStyle}>
            <div style={modalStyle}>
                <select value={deckFaction} name='faction' onChange={({ target }) => onSelectDeckFaction(target.value)} >
                <option value=''>choose faction</option>
                    {faction.map(item => {
                        return <option key={item}>{item}</option>
                    })}
                </select>

                <select value={deckLeader} name='leader' onChange={({ target }) => onSelectDeckLeader(target.value)} >
                <option value=''>choose leader</option>
                    {leaders.map(item => {
                        return <option key={item.id}>{item.name}</option>
                    })}
                </select>

                <button style={closeBtn} onClick={onToggleModal}>close</button>
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
    maxWidth: 500,
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

function mapStateToProps({ filters }) {

    function playeble(arr) {
        var array = arr;
        var index = arr.indexOf('Neutral');
        if (index > -1) {
            array.splice(index, 1);
        }
        return array
    }

    console.log(filters.deckSelect.faction);

	return {
		
		deckFaction: filters.deckSelect.faction,
        faction: playeble(filters.faction),
        deckLeader: filters.deckSelect.leader,
        leaders: filters.deckSelect.faction == '' ? filters.leaders : filters.leaders.filter(item => item.faction == filters.deckSelect.faction)

	};
}

const mapDispatchToProps = {

    onSelectDeckFaction: selectDeck,
    onSelectDeckLeader: selectLeader


};

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
