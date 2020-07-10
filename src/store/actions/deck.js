export const ACTION_ADD_CARD_TO_DECK = 'ACTION_ADD_CARD_TO_DECK';
export function cardAdd(card) {
    return {
        type: ACTION_ADD_CARD_TO_DECK,
        payload: card
    };
}

export const ACTION_SET_DECK_FACTION = 'ACTION_SET_DECK_FACTION';
export function setDeckFaction(faction) {
    return {
        type: ACTION_SET_DECK_FACTION,
        payload: faction
    };
}

export const ACTION_SET_DECK_LEADER = 'ACTION_SET_DECK_LEADER';
export function setDeckLeader(leader) {
    return {
        type: ACTION_SET_DECK_LEADER,
        payload: JSON.parse(leader)
    };
}

export const ACTION_GET_DECK_LEADER = 'ACTION_GET_DECK_LEADER';
export function getDeckLeader(leader) {
    return {
        type: ACTION_GET_DECK_LEADER,
        payload: leader
    };
}

export const ACTION_RESET_DECK = 'ACTION_RESET_DECK';
export function resetDeck() {
    return {
        type: ACTION_RESET_DECK
    };
}

export const ACTION_LOCK_DECK = 'ACTION_LOCK_DECK';
export function deckLock() {
    return {
        type: ACTION_LOCK_DECK,
    };
}

export const ACTION_DELETE_CARD_FROM_DECK = 'ACTION_DELETE_CARD_FROM_DECK';
export function deleteCardFormDeck(id) {
    return {
        type: ACTION_DELETE_CARD_FROM_DECK,
        payload: id
    };
}

export const ACTION_SET_ID_TO_DECK = 'ACTION_SET_ID_TO_DECK';
export function setIdToDeck() {
    return {
        type: ACTION_SET_ID_TO_DECK,
    };
}

export const ACTION_SET_TITLE_DECK = 'ACTION_SET_TITLE_DECK';
export function setTitleDeck(title) {
    return {
        type: ACTION_SET_TITLE_DECK,
        payload: title
    };
}

export const ACTION_GET_ID_TO_DECK = 'ACTION_GET_ID_TO_DECK';
export function getIdDeck(id) {
    return {
        type: ACTION_GET_ID_TO_DECK,
        payload: id
    };
}

export const ACTION_GET_TITLE_DECK = 'ACTION_GET_TITLE_DECK';
export function getTitleDeck(title) {
    return {
        type: ACTION_GET_TITLE_DECK,
        payload: title
    };
}

export const ACTION_GET_CARDS_DECK = 'ACTION_GET_CARDS_DECK';
export function getCardsDeck(cards) {
    return {
        type: ACTION_GET_CARDS_DECK,
        payload: cards
    };
}

export const THUNK_EDIT_DECK = 'THUNK_EDIT_DECK';
export function setDeck(deck) {
    return function (dispatch) {
        dispatch(getDeckLeader(deck.leader));
        dispatch(getIdDeck(deck.id));
        dispatch(getTitleDeck(deck.title));
        dispatch(setDeckFaction(deck.faction));
        dispatch(getCardsDeck(deck.cards));
    };
}
