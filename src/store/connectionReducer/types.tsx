export interface Person {
    personName: string;
    friend: string;
};

export interface FriendList {
    list: [{ person: string, friend: string, relationship: string }]
};
