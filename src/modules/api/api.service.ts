import * as angular from 'angular';
import {IUserDto, IMailBoxDto, ILetterDto} from "./api.model";
import {IUser} from "../users/user.model";
import {ILetter} from "../mail/mail.model";

const API_NAME = 'sy0';
const API_BASE_URL = `http://test-api.javascript.ru/v1/${API_NAME}`;

export class ApiService {

    private apiBaseUrl = API_BASE_URL;

    static $inject = ['$http'];

    constructor(private $http: ng.IHttpService) {}

    getUsers(): ng.IPromise<IUserDto[]> {
        return this.$http.get(`${this.apiBaseUrl}/users`).then(response => response.data);
    }

    getUser(userId: string): ng.IPromise<IUserDto> {
        return this.$http.get(`${this.apiBaseUrl}/users`).then(response => response.data);
    }

    createUser(user: IUser): ng.IPromise<string> {
        return this.$http.post(`${this.apiBaseUrl}/users`, user).then(response => response.data);
    }

    updateUser(userId: string, user: IUser): ng.IPromise<IUserDto> {
        return this.$http.patch(`${this.apiBaseUrl}/users/${userId}`, user).then(response => response.data);
    }

    deleteUser(userId: string): ng.IPromise<any> {
        return this.$http.delete(`${this.apiBaseUrl}/users/${userId}`);
    }

    getMailboxes(): ng.IPromise<IMailBoxDto[]> {
        return this.$http.get(`${this.apiBaseUrl}/mailboxes`).then(response => response.data);
    }

    getLetters(): ng.IPromise<ILetterDto[]> {
        return this.$http.get(`${this.apiBaseUrl}/letters`).then(response => response.data);
    }

    sendLetter(letter: ILetter): ng.IPromise<ILetterDto> {
        return this.$http.post(`${this.apiBaseUrl}/letters`, letter).then(response => response.data);
    }

    deleteLetter(): ng.IPromise<any> {
        return this.$http.delete(`${this.apiBaseUrl}/letters`);
    }

}

export const ApiServiceModule = angular.module('ApiServiceModule', [])
    .service('ApiService', ApiService);