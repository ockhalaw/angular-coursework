import * as angular from 'angular';

const template = `
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button"
                        class="navbar-toggle collapsed"
                        ng-click="$ctrl.toggleNavbar()">
                    <span class="sr-only">Навигация</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Angular coursework</a>
            </div>
            <div id="navbar"
                 class="navbar-collapse collapse"
                 ng-class="{'in': $ctrl.showCollapsedNavbar}">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="/mail">Почта</a></li>
                    <li><a href="/users">Пользователи</a></li>
                </ul>
            </div>
        </div>
    </nav>`;

export class MainComponent {

    showCollapsedNavbar: boolean = false;

    toggleNavbar() {
        this.showCollapsedNavbar = !this.showCollapsedNavbar;
    }

}

export const MainModule = angular.module('mainModule', [])
    .component('main', {
        template,
        controller: MainComponent
    });