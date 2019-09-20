console.log("Connected");

let months = [
	"January", 
	"February", 
	"March", 
	"April", 
	"May", 
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

var presentDay = new Date();
var currentYear = presentDay.getFullYear();
var currentMonth = presentDay.getMonth();

buildCalendar(currentMonth, currentYear);

var prevButton = document.querySelector(".prev")
var nextButton = document.querySelector(".next")

prevButton.addEventListener("click", function() {
	currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
	currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
	buildCalendar(currentMonth, currentYear);
});

nextButton.addEventListener("click", function() {
	currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
	currentMonth = (currentMonth + 1) % 12;
	buildCalendar(currentMonth, currentYear);
});

// builds out calendar table and populates with correct number of days 
function buildCalendar(month, year) {

	// populate calendar header (month)
	document.querySelector("#calendar-month").textContent = months[month];
	document.querySelector("#calendar-full-date").textContent = currentYear;

	let firstDay = (new Date(year, month)).getDay();
	let daysInMonth = new Date(year, month + 1, 0).getDate();

    var table = document.querySelector("#calendar-body");
    table.innerHTML = ""; // clear cells

    // create all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
    	// adds up to six table rows
        let row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
        	// empty cells before month starts
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }
            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
        }
    	table.appendChild(row);
    }
}