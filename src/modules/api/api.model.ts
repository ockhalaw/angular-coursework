import * as _ from 'lodash';
import {IUser} from "../users/user.model";
import {IMailBox, ILetter} from "../mail/mail.model";

export interface IUserDto extends IUser {
    _id: string;
}

export interface IMailBoxDto extends IMailBox {
    _id: string;
}

export interface ILetterDto extends ILetter {
    _id: string;
}

export const dtoToUser = function(userDto: IUserDto): IUser {
    return <IUser>_.pick(userDto, [
        'fullName',
        'email',
        'birthdate',
        'gender',
        'address'
    ]);
};