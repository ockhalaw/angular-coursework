import * as angular from 'angular';
import {IUser} from "../user.model";

const template = `<div class="panel panel-info">
                <div class="panel-heading">
                  <h3 class="panel-title">
                    <input type="text" ng-model="$ctrl.user.fullName" />
                    <div class="pull-right" >
                        <a ng-click="$ctrl.addUser()"><i class="fa fa-check fa-fw"></i>Сохранить</a>
                    </div>
                  </h3>
                </div>
                <div class="panel-body">
                  <div class="row">
                    <div class="col-md-9 col-lg-9">
                      <table class="table table-user-information">
                        <tbody>
                          <tr>
                            <td>Email</td>
                            <td><input type="text" ng-model="$ctrl.user.email" /></td>
                          </tr>
                          <tr>
                            <td>Дата рождения</td>
                            <td><input type="text" ng-model="$ctrl.user.birthdate" /></td>
                          </tr>
                          <tr>
                            <td>Пол</td>
                            <td><a ng-click="$ctrl.toggleGender()" ng-bind="$ctrl.user.gender === 'M' ? 'мужской' : 'женский'"></a></td>
                          </tr>
                          <tr>
                            <td>Адрес</td>
                            <td><input type="text" ng-model="$ctrl.user.address" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>`;

class UserAddConroller {

    user = <IUser>{};
    onAdd: Function;


    addUser() {
        const user = this.user;
        this.user = <IUser>{};
        this.onAdd({user: user});
    }

    toggleGender() {
        if (this.user.gender === 'M') {
            this.user.gender = 'F';
        } else {
            this.user.gender = 'M'
        }
    }

}

export const UserAddModule = angular.module('userAddModule', [])
    .component('userAdd', {
        template,
        controller: UserAddConroller,
        bindings: {
            onAdd: '&'
        }
    });
