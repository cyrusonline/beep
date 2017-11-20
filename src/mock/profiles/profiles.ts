import {Profile} from '../../models/profile/profile.interface'

const userList:Profile[] = [
    {firstName:'Paul',lastName:'Chan',email:'paul@hsmc.com',avatar:'assets/imgs/avatar.png',dateOfBirth: new Date()},
    {firstName:'John',lastName:'Chan',email:'john@hsmc.com',avatar:'assets/imgs/avatar.png',dateOfBirth: new Date()},
    {firstName:'Maruy',lastName:'Chan',email:'mary@hsmc.com',avatar:'assets/imgs/avatar.png',dateOfBirth: new Date()},
    {firstName:'Ester',lastName:'Chan',email:'esther@hsmc.com',avatar:'assets/imgs/avatar.png',dateOfBirth: new Date()}
];

export const USER_LIST = userList;