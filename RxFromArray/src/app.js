import $ from 'jquery';
import Rx from 'rxjs/Rx';
import {getSubscribe} from './utils/getsubscribe';

const output = $('#output');
/*

//Observable from array
 var nums = [1,2,3,4,5,6,'a','b',7];
var nums$ = Rx.Observable.from(nums).subscribe(getSubscribe('nums'));
*/
/*
//Observable from Object
const users = [
	{name:'John Doe', email:'john.doe@gmail.com'},
	{name:'Jane Doe', email:'jane.doe@gmail.com'}
];

var usersStream$ = Rx.Observable.from(users).subscribe(getSubscribe('User'));*/

/*//Observable from Set
const dataSet = new Set(['Foo',10,{name:'john doe'}]);
var dataSet$ = Rx.Observable.from(dataSet).subscribe(getSubscribe('set'));

const m = new Map([[1,2,11],[3,4,10],[5,6]]);

const m$ = Rx.Observable.from(m).subscribe(getSubscribe('Map'));*/

//Observable from string

const s = 'Hello World!';

const s$ = Rx.Observable.from(s).subscribe(getSubscribe('String'));