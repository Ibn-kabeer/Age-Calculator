function CalculateAge() {
    //Get the input values
const DAY = parseInt(document.getElementById('DAY').value);
const MONTH = parseInt(document.getElementById('MONTH').value) -1;
const YEAR = parseInt(document.getElementById('YEAR').value);


 
   //Create A birth and current date
const birthDate = new Date (YEAR, MONTH, DAY);
const currentDate = new Date();

  //Calculate the difference in time
let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
let ageMonths = currentDate.getMonth() - birthDate.getMonth();  
let ageDays = currentDate.getDay() - birthDate.getDay();

 //Adjust for negative values in MONTHS/DAYS
if (ageDays < 1) {
    ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    ageMonths -= 1;
} 
if (ageMonths < 1) {
    ageMonths += 12;
    ageYears -= 1;
}
  
 document.getElementById('div1').style.display = "none";
 document.getElementById('div2').style.display = "none";
 document.getElementById('div3').style.display = "none";


 document.getElementById('yearsResult').textContent = ageYears;
 // Hide div1
 document.getElementById('monthsResult').textContent = ageMonths;
 document.getElementById('daysResult').textContent = ageDays;


}


