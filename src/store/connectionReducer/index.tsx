import {
    NO_PATH,
    SET_ALL_PEOPLE,
    SET_FRIEND,
    SET_FRIEND_LIST,
    SET_PATH,
    SET_PERSON_NAME,
    SET_SHORTEST_DISTANCE
} from './actions';

const INITIAL_STATE = {
    personName: '',
    friend: '',
    allPeople: [''],
    distance: '',
    path: '',
    friendList: [{ person: '', friend: '', relationship: '' }],
    error: ''
};

const reducer = (state = INITIAL_STATE, action: any) => {

    switch (action.type) {
        case SET_PERSON_NAME:
            return { ...state, personName: action.payload };

        case SET_FRIEND:
            return { ...state, friend: action.payload };

        case SET_FRIEND_LIST:
            return { ...state, friendList: [...state.friendList, action.payload] };

        case SET_ALL_PEOPLE:
            return { ...state, allPeople: [...state.allPeople, action.payload] };

        case SET_SHORTEST_DISTANCE:
            return { ...state, distance: action.payload };

        case SET_PATH:
            return { ...state, path: action.payload };

        case NO_PATH:
            return { ...state, path: action.payload };

        default:
            return state;
    }
};

export default reducer;
