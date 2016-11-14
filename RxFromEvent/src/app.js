import $ from 'jquery';
import Rx from 'rxjs/Rx';


const button = $('#button');
const input = $('#input');
const userInput = $('.userInput');
const mousePosition = $('.mousePosition');

const buttonStream$ = Rx.Observable.fromEvent(button, 'click');

buttonStream$.subscribe(function(x){
	console.log('clicked');
},function(err){
	console.log(err);
}, function(){
	console.log('Completed!');
});

const inputStream$ = Rx.Observable.fromEvent(input, 'keyup')
					.subscribe(
						(x)=> {
							console.log(x.target.value)
							userInput.html(x.target.value);
						},
						(err)=>{
							console.log(err)
						},
						(completed)=>{
							console.log('completed')
						});

const mouseMove$ = Rx.Observable.fromEvent(document,'mousemove')
					.subscribe((x) => {
						mousePosition.html('X:'+ x.clientX+':'+'Y:'+x.clientY);
					});

