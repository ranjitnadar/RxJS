import $ from 'jquery';
import Rx from 'rxjs/Rx';
import {getSubscribe} from './utils/getsubscribe';
/*
const promise$ = new Promise((resolve, reject) => {
	console.log('Creating Promise...');
	setTimeout(()=>{
		console.log('Something...');
		resolve('Hello From Promise');
	}, 2000);
});
// promise$.then(x => {
// 	console.log(x);
// });
// 

Rx.Observable.fromPromise(myPromise)
			.subscribe(getSubscribe("Promise"));

			*/
		

let input = $('#input');
let profile = $('#profile');

profile.hide();
Rx.Observable.fromEvent(input, 'keyup')
	.subscribe(e =>{
		profile.show();
		Rx.Observable.fromPromise(getGitHubUser(e.target.value)).subscribe(user =>{
			//console.log(user);

			$('#name').text(user.data.name);
			$('#login').text(user.data.login);
			$('#blog').text(user.data.blog);
			$('#avatar').attr('src', user.data.avatar_url);
			$('#repos').text(user.data.public_repos);
			$('#followers').text(user.data.followers);
			$('#following').text(user.data.following);
			$('#link').attr('href',user.data.html_url);
		});
	})


function getGitHubUser(username){
	return $.ajax({
		url:'https://api.github.com/users/'+username+'?client_id=a1ea1896d238c4b5af500645c5925f05715d76e3',
		dataType:'jsonp'
	}).promise();
}

