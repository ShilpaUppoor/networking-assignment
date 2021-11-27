import { isEmpty, uniq } from 'lodash';
import { Graph } from '../utils';

export const SET_PERSON_NAME = 'SET_PERSON_NAME';
export const SET_FRIEND = 'SET_FRIEND';
export const SET_FRIEND_LIST = 'SET_FRIEND_LIST';
export const SET_ALL_PEOPLE = 'SET_ALL_PEOPLE';
export const SET_SHORTEST_DISTANCE = 'SET_SHORTEST_DISTANCE';
export const SET_PATH = 'SET_PATH';

export const setShortestDistance = (distance: any) => {
    return {
        type: SET_SHORTEST_DISTANCE,
        payload: distance
    };
};

export const setPath = (path: any) => {
    return {
        type: SET_PATH,
        payload: path
    };
};

export const setPerson = (name: string) => {
    return {
        type: SET_PERSON_NAME,
        payload: name
    };
};

export const setFriend = (name: string) => {
    return {
        type: SET_FRIEND,
        payload: name
    };
};

export const setFriendList = (person: string, friend: string, relationship: string) => {
    return {
        type: SET_FRIEND_LIST,
        payload: {
            person: person,
            friend: friend,
            relationship: isEmpty(relationship) ? 'Friend' : relationship
        }
    };
};

export const setAllPeople = (name: string) => {
    return {
        type: SET_ALL_PEOPLE,
        payload: name
    };
};

export const addUser = (person: string, friend: string, relationship: string) => {
    return async (dispatch: any) => {
        dispatch(setFriendList(person, friend, relationship));
        dispatch(setAllPeople(person));
        dispatch(setAllPeople(friend));
    };
};

export const computeRelationship = (state: any) => {
    return async (dispatch: any) => {
        const { allPeople, friendList, personName, friend } = state;
        const allUsers: Array<any> = uniq(allPeople);
        const index = allUsers.indexOf('');
        if (index > -1) {
            allUsers.splice(index, 1);
        }
        let g = new Graph(allUsers.length);
        for (let i = 0; i < allUsers.length; i++) {
            g.addVertex(allUsers[i]);
        }
        for (let i = 1; i < friendList.length; i++) {
            g.addEdge(friendList[i].person, friendList[i].friend);
        }
        const output = g.bfs(personName, friend);
        if (output !== undefined) {
            dispatch(setShortestDistance(output?.shortestDistance));
            dispatch(setPath(output?.path));
        }
    };
};
