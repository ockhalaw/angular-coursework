import * as angular from 'angular';
import {UserCardModule} from "./userCard/userCard.component";
import {IUser} from "./user.model";
import {IUserDto, dtoToUser} from "../api/api.model";
import {UserEditModule} from "./userEdit/userEdit.component";
import {UserAddModule} from "./userAdd/userAdd.component";
import {ApiServiceModule, ApiService} from "../api/api.service";

export class UsersController {

    users: IUserDto[];
    editIndex = -1;

    static $inject = ['ApiService'];

    constructor (private apiService: ApiService) {}

    $onInit() {
        this.loadUsers();
    }

    onDelete(index) {
        this.editIndex = -1;
        this.apiService.deleteUser(this.users[index]._id)
            .then(()=>{
                this.loadUsers();
            });
    }

    onEditStart(index: number) {
        this.editIndex = index;
        console.log(index);
    }

    onEditSuccess(user: IUserDto) {
        this.editIndex = -1;
        this.apiService.updateUser(user._id, dtoToUser(user))
            .then(()=>{
                this.loadUsers();
            });
    }

    onEditCancel() {
        this.editIndex = -1;
    }

    onAdd(user: IUser) {
        if (user.fullName && user.email) {
            if (!user.gender) {
                user.gender = 'F';
            }
            this.apiService.createUser(user).then(() => {
                this.loadUsers()
            });
        }
    }

    private loadUsers() {
        this.apiService.getUsers().then(users => {
            this.users = users;
        });
    }

}

export const UsersModule = angular.module('userCardApp', [
        UserCardModule.name,
        UserEditModule.name,
        UserAddModule.name,
        ApiServiceModule.name
    ])
    .component('users', {
        template: `
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <h3>Пользователи:</h3>
                        <div ng-repeat="user in $ctrl.users">
                            <user-card ng-if="$index !== $ctrl.editIndex"
                                       user="user"
                                       index="$index"
                                       on-edit-start="$ctrl.onEditStart(index)"
                                       on-delete="$ctrl.onDelete(index)"></user-card>
                            <user-edit ng-if="$index === $ctrl.editIndex"
                                       user="user"
                                       on-edit-cancel="$ctrl.onEditCancel()"
                                       on-edit-success="$ctrl.onEditSuccess(user)"></user-edit>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <h3>Добавление пользователя:</h3>
                        <user-add on-add="$ctrl.onAdd(user)"></user-add>
                    </div>
                </div>
            </div>`,
        controller: UsersController
    });