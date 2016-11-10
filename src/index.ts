import * as angular from 'angular';

// load our default (non specific) css
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/screen.scss';
import {UsersModule} from "./modules/users/users.component";
import {MainModule} from "./modules/main/main.component";

angular.module('app', [MainModule.name, UsersModule.name]);
angular.bootstrap(document, ['app'], {
    strictDi: true
});