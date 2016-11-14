import $ from 'jquery';
import Rx from 'rxjs/Rx';
import {getSubscribe} from './utils/getsubscribe';


/*Rx.Observable.interval(1000)
	.take(10)
	.map(v => v * 2)
	.subscribe(getSubscribe("map"));

let names = ['john','sam','jane'];

Rx.Observable.from(names)
	.map(x => x.toUpperCase())
	.subscribe(getSubscribe('Names'));
*/
/*
const input = $('#input');
const char = $('#charlength');

Rx.Observable.fromEvent(input, 'keyup')
	.map(e => e.target.value)
	.map(v => {
		return {
			value:v,
			length:v.length
		}
	})
	.subscribe(x => {
		char.text(x.length);
	})*/
/*function getGitHubUser(username){
	return $.ajax({
		url:'https://api.github.com/users/'+username+'?client_id=a1ea1896d238c4b5af500645c5925f05715d76e3',
		dataType:'jsonp'
	}).promise();
}


Rx.Observable.fromPromise(getGitHubUser('ranjitnadar'))
	.map(obj => obj.data)
	.subscribe(user => {
		console.log(user.name);
	})*/

/*
#mapto 
Rx.Observable.interval(2000)
	.mapTo('Hello JS')
	.subscribe(getSubscribe("Map To"));*/

var data = [
	{value:1},
	{value:2},
	{value:3},
	{value:4}
];

Rx.Observable.from(data)
	.pluck('value')
	.subscribe(x => {
		console.log(x);
	})