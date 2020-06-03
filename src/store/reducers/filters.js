import {
    ACTION_FILTER_SELECT,
    ACTION_FILTER_RESET,
    ACTION_SELECT_DECK_FACTION,
    ACTION_SELECT_DECK_LEADER,
    ACTION_SELECT_DECK_RESET
} from '../actions/filters';
import data from '../../data/cardlist-v6.2.0.json'


//----------------- type
let allTypes = data.map(item => (
    item.type
))
let type = allTypes.filter(function (item, pos) {
    return allTypes.indexOf(item) === pos;
})

//----------------- provision
let allProvisions = data.map(item => (
    item.provision
))
let provisionArr = allProvisions.filter(function (item, pos) {
    return allProvisions.indexOf(item) === pos;
})
let provision = provisionArr.sort(function (a, b) {
    return a - b
})

//----------------- faction
let allFaction = data.map(item => (
    item.faction
))
let faction = allFaction.filter(function (item, pos) {
    return allFaction.indexOf(item) === pos;
})

//----------------- rarity
let allRarity = data.map(item => (
    item.rarity
))
let rarity = allRarity.filter(function (item, pos) {
    return allRarity.indexOf(item) === pos;
})

//----------------- category: leader
let leaders = [];
data.map(function (item) {
    if (item.category === 'Leader') {
        leaders.push(item)
    }
})

const initialState = {
    type: type,
    provision: provision,
    faction: faction,
    rarity: rarity,
    leaders: leaders,
    selected: {
        type: '',
        provision: '',
        rarity: '',
        faction: ''
    },
    deckSelect: {
        faction: '',
        leader: ''
    }
};


export default function (state = initialState, { type, payload }) {
    switch (type) {

        case ACTION_FILTER_SELECT:

            return {
                ...state,
                selected: {
                    ...state.selected,
                    [payload.name]: payload.value
                }

            };

        case ACTION_FILTER_RESET:

            return {
                ...state,
                selected: {
                    ...state.selected,
                    type: '',
                    provision: '',
                    rarity: '',
                    faction: ''
                }
            }

        case ACTION_SELECT_DECK_FACTION:

            return {
                ...state,
                deckSelect: {
                    ...state.deckSelect,
                    faction: payload
                }
            }

        case ACTION_SELECT_DECK_LEADER:

            return {
                ...state,
                deckSelect: {
                    ...state.deckSelect,
                    leader: payload
                }
            }

        case ACTION_SELECT_DECK_RESET:

            return {
                ...state,
                deckSelect: {
                    faction: '',
                    leader: ''
                }
            }


        default:
            return state;
    }
}