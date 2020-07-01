import { combineReducers } from 'redux';
import cards from './cards';
import deck from './deck';
import filters from './filters'
import modal from './modal'
import decks from './decks'


export default combineReducers({
    cards: cards,
    deck: deck,
    filters: filters,
    modal: modal,
    decks: decks
});
