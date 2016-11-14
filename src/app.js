import $ from 'jquery';
import Rx from 'rxjs/Rx';
import {getSubscribe} from './utils/getsubscribe';
/*Buffer*/

/*
Rx.Observable.interval(500)
	.buffer(Rx.Observable.interval(2000))
	.subscribe(getSubscribe("Buffer"));
*/

//buffer count
/*Rx.Observable.range(1,20)
	.bufferCount(2)
	.subscribe(getSubscribe("Buffercount"));*/

//buffer Time
/*
Rx.Observable.interval(500)
	.bufferTime(5000)
	.subscribe(getSubscribe("Buffer Time"));*/

//Buffer 
const obs1$ = Rx.Observable.interval(1000);
const obs2$ = Rx.Observable.fromEvent(document, 'click');

const myBuffer = obs1$.buffer(obs2$);
const subscribe = myBuffer.subscribe(getSubscribe('Buffer From Event'));
