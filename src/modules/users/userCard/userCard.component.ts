import * as angular from 'angular';
import {IUser} from "../user.model";

const template = `<div class="panel panel-info">
                <div class="panel-heading">
                  <h3 class="panel-title">
                    <span ng-bind="$ctrl.user.fullName"></span>
                    <div class="pull-right">
                        <a ng-click="$ctrl.onEditStart({index: $ctrl.index})"><i class="fa fa-pencil fa-fw"></i>Редактировать</a>
                        <a ng-click="$ctrl.onDelete({index: $ctrl.index})"><i class="fa fa-close fa-fw"></i>Удалить</a>
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
                            <td><span ng-bind="$ctrl.user.email"></span></td>
                          </tr>
                          <tr>
                            <td>Дата рождения</td>
                            <td><span ng-bind="$ctrl.user.birthdate"></span></td>
                          </tr>
                          <tr>
                            <td>Пол</td>
                            <td><span ng-bind="$ctrl.user.gender"></span></td>
                          </tr>
                          <tr>
                            <td>Адрес</td>
                            <td><span ng-bind="$ctrl.user.address"></span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>`;

class UserCardConroller {

    user: IUser;
    index: number;
    onEditStart: Function;
    onDelete: Function;

    static $inject = [];

    constructor(){}

}

export const UserCardModule = angular.module('userCardModule', [])
    .component('userCard', {
        template,
        controller: UserCardConroller,
        bindings: {
            user: '<',
            index: '<',
            onEditStart: '&',
            onDelete: '&'
        }
    });
