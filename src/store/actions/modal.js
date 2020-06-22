export const ACTION_TOGGLE_MODAL = 'ACTION_TOGGLE_MODAL';
export function toggleModal() {
    return {
        type: ACTION_TOGGLE_MODAL
    };
}

export const ACTION_CARD_MODAL = 'ACTION_CARD_MODAL';
export function openModalCard(card) {
    return {
        type: ACTION_CARD_MODAL,
        payload: card
    };
}

