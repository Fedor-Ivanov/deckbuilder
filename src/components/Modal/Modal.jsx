import React from 'react'
import './modal.css'
import { connect } from 'react-redux';
import { selectDeck, selectLeader, resetSelectedDeck } from '../../store/actions/filters'
import { setDeckFaction, setDeckLeader } from '../../store/actions/deck'
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { toggleModal } from '../../store/actions/modal'


function Modal({
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
    modalCard
}) {

    const history = useHistory();

    const { path, url } = useRouteMatch();

    function onCloseClick() {
        onResetSelectedDeck()
        onToggleModal()
        history.push('/builder')
    }

    function onCloseModalClick() {
        onToggleModal()
        history.push(`${url}`)
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

                <Switch>
                    <Route exact path={`${path}/new`}>
                        {
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
                                    deckFaction && deckLeader && <button style={closeBtn} onClick={onToggleModal}>done</button>
                                }
                                <button style={closeBtn} onClick={onCloseClick}>close</button>
                            </div>
                        }
                    </Route>

                    {modalCard &&
                        <Route path={`${path}`}>
                            {
                                <>
                                    <div>{modalCard.name}</div>
                                    <button style={closeBtn} onClick={onCloseModalClick}>close</button>
                                </>
                            }
                        </Route>
                    }

                </Switch>


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

const closeBtn = {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
    border: 'none',
    display: "block",
    marginTop: 10
};

function mapStateToProps({ filters, modal }) {

    function playable(arr) {
        var array = arr;
        var index = arr.indexOf('Neutral');
        if (index > -1) {
            array.splice(index, 1);
        }
        return array
    }

    return {

        modalCard: modal.modalCard,
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

};

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
