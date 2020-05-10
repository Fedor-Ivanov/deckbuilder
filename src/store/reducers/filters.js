import { } from '../actions/filters';
import data from '../../data/cardlist-v6.2.0.json'



let allTypes = data.map(item => (
    item.type
))

let types = allTypes.filter(function (item, pos) {
    return allTypes.indexOf(item) === pos;
})

console.log(types)

const initialState = {
    filters: {
        types: types
    }
};

export default function (state = initialState, { type, payload }) {
    switch (type) {

        default:
            return state;
    }
}