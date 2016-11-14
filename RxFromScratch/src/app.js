import $ from 'jquery';
import Rx from 'rxjs/Rx';
import {getSubscribe} from './utils/getsubscribe';

const output = $('#output');

// create observerable 

const  source$ = new Rx.Observable(observer =>{
	console.log('Create observable from scratch...');

	observer.next('A Value.');
	observer.error(new Error('Error: Opps error.'));
	setTimeout(()=>{
		observer.next('I m lazy...');
		observer.complete();
	},2000);
	
});

source$.subscribe(getSubscribe('myobs'));