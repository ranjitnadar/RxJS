export function getSubscribe(id){
	return{
		next(x){
			console.log(`${id}: ${x}`);
			
		},
		error(err){
			console.log(`${id}:${err.stack}`);
		},
		complete(){
			console.log(`${id} : Completed`);
		}
	}
}