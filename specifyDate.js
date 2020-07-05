function specifyDateRange(option) {
	
	let today = new Date();
	
	let month = today.getMonth();
	let year = today.getFullYear();
	
	let beginDate;
	let endDate;
	
	if (option == 1) {
		beginDate = new Date(year, month, 1);
		endDate = new Date(year, month+1, 0);
		alert(beginDate);
		alert(endDate);
	}
	else if (option == 2) {
		beginDate = new Date(year, month-1, 1);
		endDate = new Date(year, month, 0);
		alert(beginDate);
		alert(endDate);	
	}
	else if (option == 3) {
		beginDate = new Date(year, 0, 1);
		endDate = new Date(year, month+1, 0);
		alert(beginDate);
		alert(endDate);			
	}
	else {
		document.getElementById("dateSwitch").style.display = "block";
		document.getElementById("dateRangeContent").style.display = "none";
	}
}
