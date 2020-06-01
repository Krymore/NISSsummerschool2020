document.addEventListener("DOMContentLoaded", function(event) { 
  givedata();
});

function givedata(){
	var now = new Date();
	var fromDateunix = 1590994800  // 13:00
	var soltime = 1591009800; // 17:10
	var limdate = new Date(fromDateunix * 1000);
	var soldate = new Date(soltime * 1000);
	if(now < limdate){
		console.log("wait");
		var div = '<p style="color:white"> Олимпида начнется в 13:00</p> <br><p style="color:white">Время еще не наступило, если вы считаете, что это не так, то обновите страницу<p>';
	}else{
		console.log("done");
		var div = '<a href="sources/ro.pdf">Ссылка на материал</a>';
		if(now >= soldate){
			div = div+'<br> <a href="sources/ro-sol.pdf">Решения</a>'
		}
	}
	document.getElementById("olymp").innerHTML = div;
}