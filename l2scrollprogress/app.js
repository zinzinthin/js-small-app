//UI

const getprogressbar = document.getElementById('progress-bar');

window.onscroll = function () {
	scrollpoint();
}

document.getElementById('btn-print').addEventListener('click', e => {
	window.print();
});


function scrollpoint() {
	let scrolltop = document.documentElement.scrollTop;
	//console.log(`Have been scroled => ${getscrolltop}`);

	let viewheight = document.documentElement.clientHeight;
	//console.log(`Current visible screen height => ${getclientheight}`);

	let totalscrollheight = document.documentElement.scrollHeight;
	//console.log(`Total scroll height(viewheight+overflow height) ${getscrollheight}`);

	//console.log(`How much remain to scroll => ${getscrollheight-getclientheight-getscrolltop}`);

	let scrolllength = totalscrollheight-viewheight;
	//console.log(scrolllength);

	let scrolllengthpercent = Math.floor((scrolltop*100)/scrolllength);

	getprogressbar.style.width = `${scrolllengthpercent}%`;

}