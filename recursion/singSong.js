function singSong(n) {
	if (n == 0) {
		console.log("now it's time to visit the hospital. you have alcohol poisoning.")
		return "done"
	}
	if (n == 1){
		console.log(1 + " more bottle of beer on the wall," + 1 + "\n" +
			"more bottole of beer. You take it down and pass it around, no more bottles of \n"
			+ "beer on the wall!");
	}
	if (n > 1) {
		console.log(n + " bottles of beer on the wall," + n + " bottles of beer,\n" + 
		" you take one down and pass it around" + (n-1) + " bottles of beer on the wall" ); 
	}
	return singSong(n-1);
}