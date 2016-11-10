import * as angular from 'angular';
import {IUser} from "../user.model";

const template = `<div class="panel panel-info">
                <div class="panel-heading">
                  <h3 class="panel-title">
                    <input type="text" ng-model="$ctrl.user.fullName" />
                    <div class="pull-right">
                        <a ng-click="$ctrl.onEditSuccess({user: $ctrl.user})"><i class="fa fa-check fa-fw"></i>Сохранить</a>
                        <a ng-click="$ctrl.onEditCancel()"><i class="fa fa-ban fa-fw"></i>Отмена</a>
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
                            <td><input type="text" ng-model="$ctrl.user.gender" /></td>
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

class UserEditConroller {

    user: IUser;
    onEditCancel: Function;
    onEditSuccess: Function;

}

export const UserEditModule = angular.module('userEditModule', [])
    .component('userEdit', {
        template,
        controller: UserEditConroller,
        bindings: {
            user: '<',
            onEditCancel: '&',
            onEditSuccess: '&'
        }
    });
