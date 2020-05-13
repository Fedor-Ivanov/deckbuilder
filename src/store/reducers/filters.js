import { ACTION_FILTER_SELECT, selectFilter } from '../actions/filters';
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


const initialState = {
    type: type,
    provision: provision,
    faction: faction,
    rarity: rarity,
    selected: {
        type: '',
        provision: '',
        rarity: '',
        faction: ''
    }
};

const filter = (db, keys) => keys.reduce((a, key) => (a[key] = db[key], a), {});

export default function (state = initialState, { type, payload }) {
    switch (type) {

        case ACTION_FILTER_SELECT:

            let filtered = {
                type: '',
                provision: '',
                rarity: '',
                faction: ''
            }

            filtered[payload.name] = payload.value

            return {
                ...state,
                selected: filtered

            };

        default:
            return state;
    }
}