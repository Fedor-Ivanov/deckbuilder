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
