import React from 'react'
import { connect } from 'react-redux';
import { selectDeck, selectLeader, resetSelectedDeck } from '../../store/actions/filters'
import { setDeckFaction, setDeckLeader, setIdToDeck } from '../../store/actions/deck'
import { toggleModal } from '../../store/actions/modal'

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
    setIdToDeck
}) {


    function onCloseClick() {
        onResetSelectedDeck()
        onToggleModal()
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
        onToggleModal()
    }

    return (

        <div>
            <div>
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
                            <img src={require(`../../images/fraction/${item}.png`)} alt="" />
                        </label>
                    )
                })}
            </div>

            {deckFaction &&
                <div>
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
                                <img src={require(`../../images/leaders/${item.id}.png`)} alt="" />
                            </label>
                        )
                    })}
                </div>
            }
            {
                deckFaction && deckLeader && <button style={closeBtn} onClick={onDoneClick}>done</button>
            }
            <button style={closeBtn} onClick={onCloseClick}>close</button>
        </div>

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
    setIdToDeck: setIdToDeck

};

export default connect(mapStateToProps, mapDispatchToProps)(ModalNewDeck)