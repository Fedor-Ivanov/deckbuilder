import React from 'react'
import { connect } from 'react-redux';
import { selectDeck, selectLeader, resetSelectedDeck } from '../../store/actions/filters'
import { setDeckFaction, setDeckLeader, setIdToDeck, setTitleDeck } from '../../store/actions/deck'
import { toggleModal } from '../../store/actions/modal'
import { useHistory } from 'react-router-dom'

function ModalNewDeck({
    onToggleModal,
    faction,
    deckFaction,
    onSelectDeckFaction,
    leaders,
    deckLeader,
    onSelectDeckLeader,
    onResetSelectedDeck,
    setDeckFaction,
    setDeckLeader,
    setIdToDeck,
    setTitleDeck
}) {


    let history = useHistory();

    function onCloseClick() {
        onResetSelectedDeck()
        onToggleModal()
        history.push("/builder");
    }

    function chooseFaction(faction) {
        onSelectDeckFaction(faction);
        setDeckFaction(faction);
    }

    function chooseLeader(leader) {
        onSelectDeckLeader(leader);
        setDeckLeader(leader);
    }

    function onDoneClick() {
        setIdToDeck();
        onToggleModal();
    }

    function onChange({ target }) {
        setTitleDeck(target.value)
    }

    return (

        <div>

            <input type='text' name='deckTitle' placeholder='title' onChange={onChange}></input>

            <div style={factionIcons}>
                {faction.map(item => {
                    return (
                        <label
                            key={item}>
                            <input
                                style={{ display: 'none' }}
                                type="radio"
                                name="faction"
                                onChange={({ target }) => chooseFaction(target.value)}
                                value={item}
                                key={item} />
                            <img style={width} src={require(`../../images/fraction/${item}.png`)} alt="" />
                        </label>
                    )
                })}
            </div>

            {deckFaction &&
                <div style={factionIcons}>
                    {leaders.map(item => {
                        return (
                            <label
                                key={item.id}>
                                <input
                                    style={{ display: 'none' }}
                                    type="radio"
                                    name="leader"
                                    onChange={({ target }) => chooseLeader(target.value)}
                                    value={JSON.stringify(item)}
                                    key={item.id} />
                                <img style={width} src={require(`../../images/leaders/${item.id}.png`)} alt="" />
                            </label>
                        )
                    })}
                </div>
            }
            {
                deckFaction &&
                deckLeader &&
                <button style={closeBtn} onClick={onDoneClick}>done</button>
            }
            <button style={closeBtn} onClick={onCloseClick}>close</button>
        </div>

    )
}

const factionIcons = {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)'
}

const width = {
    width: '100%'
}

const closeBtn = {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
    border: 'none',
    display: "block",
    marginTop: 10
};

function mapStateToProps({ filters }) {

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
    setDeckLeader: setDeckLeader,
    onToggleModal: toggleModal,
    setIdToDeck: setIdToDeck,
    setTitleDeck: setTitleDeck

};

export default connect(mapStateToProps, mapDispatchToProps)(ModalNewDeck)