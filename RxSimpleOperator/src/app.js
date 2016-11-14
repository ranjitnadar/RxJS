import $ from 'jquery';
import Rx from 'rxjs/Rx';
import {getSubscribe} from './utils/getsubscribe';

const output = $('#output');

/*const simple$ = Rx.Observable.interval(2000)
				.take(10)
				.subscribe(getSubscribe('Interval'));

// timer(startafter, interval)
const simpleTime$ = Rx.Observable.timer(3000,1000)
					.take(10)
					.subscribe(getSubscribe('Timer'));


//Range(start, limit)

const range$ = Rx.Observable.range(1, 10)
				.subscribe(getSubscribe('Range'));

//of()
const ofoperator$ = Rx.Observable.of(2,'hello','world',[1,2,3,4,5],[6,7,8],[9,10,11])
					.subscribe(getSubscribe('of'));
let i =0;
const source$ = Rx.Observable.defer(()=>{
	i++;

	return Rx.Observable.of(i);
})
source$.subscribe(getSubscribe('one'));
source$.subscribe(getSubscribe('two'));
source$.subscribe(getSubscribe('three'));

*/