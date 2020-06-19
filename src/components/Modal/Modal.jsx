import React from 'react'
import './modal.css'
import { connect } from 'react-redux';
import { selectDeck, selectLeader, resetSelectedDeck } from '../../store/actions/filters'
import { setDeckFaction, setDeckLeader } from '../../store/actions/deck'
import { useHistory } from 'react-router-dom';



function Modal({ onToggleModal, faction, deckFaction, onSelectDeckFaction, leaders, deckLeader, onSelectDeckLeader, onResetSelectedDeck, setDeckFaction, setDeckLeader }) {

    const history = useHistory();

    function onCloseClick() {
        onResetSelectedDeck()
        onToggleModal()
        history.push('/builder')
    }

    function chooseFaction(faction) {
        onSelectDeckFaction(faction);
        setDeckFaction(faction);
    }

    function chooseLeader(leader) {
        onSelectDeckLeader(leader);
        setDeckLeader(leader);
    }

    return (
        <div style={backdropStyle}>
            <div style={modalStyle}>


                <div>
                    {faction.map(item => {
                        return (
                            <label>
                                <input
                                    type="radio"
                                    name="faction"
                                    onChange={({ target }) => chooseFaction(target.value)}
                                    value={item}
                                    key={item} />
                                {item}
                            </label>
                        )
                    })}
                </div>

                <div>
                    {leaders.map(item => {
                        return (
                            <label>
                                <input
                                    type="radio"
                                    name="leader"
                                    onChange={({ target }) => chooseLeader(target.value)}
                                    value={JSON.stringify(item)}
                                    key={item.id} />
                                {item.name}
                            </label>
                        )
                    })}
                </div>


                {/*             
                <select value={deckFaction} name='faction' onChange={({ target }) => chooseFaction(target.value)} >
                    <option value=''>choose faction</option>
                    {faction.map(item => {
                        return <option key={item}>{item}</option>
                    })}
                </select>

                <select value={deckLeader} name='leader' onChange={({ target }) => chooseLeader(target.value)} >
                    <option value=''>choose leader</option>
                    {leaders.map(item => {
                        return <option value={JSON.stringify(item)} key={item.id}>{item.name}</option>
                    })}
                </select> */}

                {
                    deckFaction && deckLeader && <button style={closeBtn} onClick={onToggleModal}>done</button>
                }

                <button style={closeBtn} onClick={onCloseClick}>close</button>
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

function mapStateToProps({ filters, deck }) {

    function playable(arr) {
        var array = arr;
        var index = arr.indexOf('Neutral');
        if (index > -1) {
            array.splice(index, 1);
        }
        return array
    }

    return {

        deckFaction: filters.deckSelect.faction,
        faction: playable(filters.faction),
        deckLeader: filters.deckSelect.leader,
        leaders: filters.deckSelect.faction === '' ? filters.leaders : filters.leaders.filter(item => item.faction === filters.deckSelect.faction),

    };
}

const mapDispatchToProps = {

    onSelectDeckFaction: selectDeck,
    onSelectDeckLeader: selectLeader,
    onResetSelectedDeck: resetSelectedDeck,
    setDeckFaction: setDeckFaction,
    setDeckLeader: setDeckLeader

};

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
