import * as actionTypes from "./constants";
import produce from "immer";
const initialState = {
    name: "Walter White",
    email: "walter@gmail.com",
    recipes: [
        { name: "React Hooks", read: false },
        { name: "Redux", read: false },
        { name: "Redux Saga", read: false },
        { name: "Lazy loading with Suspense", read: false },
        { name: "Styled Components", read: false },
        { name: "Localization React Intl", read: false },
        { name: "Immutable state change(with Immer)", read: false },
        { name: "Code Spliting", read: false }
    ]
};

const reducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case actionTypes.MARK_AS_READ:
                draft["recipes"][action.index].read = true;
                break;
            case actionTypes.MARK_AS_UNREAD:
                draft["recipes"][action.index].read = false;
                break;
            default:
                return;
        }
    });
export default reducer;
