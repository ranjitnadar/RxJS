import $ from 'jquery';
import Rx from 'rxjs/Rx';
import {getSubscribe} from './utils/getsubscribe';

const output = $('#output');

/*//cold observable
const coldObs$ = Rx.Observable.create(observer =>{
	observer.next(Date.now());
});

coldObs$.subscribe(getSubscribe('Cold:'));
coldObs$.subscribe(getSubscribe('Cold:'));


//hot  Observable
//eg1
const hotObs$ = Rx.Observable.create(observer =>{
	observer.next(Date.now());
}).publish();

hotObs$.subscribe(getSubscribe('Hot:'));
hotObs$.subscribe(getSubscribe('Hot:'));

hotObs$.connect();

//Hot Observable
const hotobs$ = Rx.Observable.interval(1000).publish();

hotobs$.connect();

setTimeout(()=>{
	hotobs$.subscribe(getSubscribe('One'));
	setTimeout(()=>{
		hotobs$.subscribe(getSubscribe('Two'));
	},4000);
},2000);*/

//Hot Observable Refcount
const refCount$ = Rx.Observable.interval(1000).publish().refCount();


setTimeout(()=>{
	refCount$.subscribe(getSubscribe('One'));
	setTimeout(()=>{
		refCount$.subscribe(getSubscribe('Two'));
	},4000);
},2000);