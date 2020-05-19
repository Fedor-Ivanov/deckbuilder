export const ACTION_FILTER_SELECT = 'ACTION_FILTER_SELECT';
export function selectFilter(value, filter) {
    return {
        type: ACTION_FILTER_SELECT,
        payload: { name: filter, value: value }
    };
}

export const ACTION_FILTER_RESET = 'ACTION_FILTER_RESET';
export function resetFilters() {
    return {
        type: ACTION_FILTER_RESET,
    };
}

export const ACTION_SELECT_DECK_FACTION = 'ACTION_SELECT_DECK_FACTION';
export function selectDeck(value) {
    return {
        type: ACTION_SELECT_DECK_FACTION,
        payload: value
    };
}

export const ACTION_SELECT_DECK_LEADER = 'ACTION_SELECT_DECK_LEADER';
export function selectLeader(value) {
    return {
        type: ACTION_SELECT_DECK_LEADER,
        payload: value
    };
}

export const ACTION_SELECT_DECK_RESET = 'ACTION_SELECT_DECK_RESET';
export function resetSelectedDeck() {
    return {
        type: ACTION_SELECT_DECK_RESET,
    };
}