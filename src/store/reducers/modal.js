import { ACTION_TOGGLE_MODAL } from '../actions/modal';


const initialState = {
    isVisible: false
};

export default function (state = initialState, { type, payload }) {
    switch (type) {

        case ACTION_TOGGLE_MODAL:

            return {
                ...state,
                isVisible: !state.isVisible
            }

        default:
            return state;
    }
}