let hrs=document.getElementById('hrs');
let mins=document.getElementById('mins');
let secs=document.getElementById('secs');
setInterval(()=> {
hrs.innerHTML=new Date().getHours();
mins.innerHTML=new Date().getMinutes();
secs.innerHTML=new Date().getSeconds();
},);
document.getElementById('noob').style.background='linear-gradient(45deg, #000000, #030344)';
document.getElementById('noob').style.borderRadius='15px';
document.getElementById('noob').style.border='1px solid #ffffff';
document.getElementById('noob').style.position='absolute';
document.getElementById('noob').style.display='flex';
document.getElementById('noob').style.top='40%';
document.getElementById('noob').style.left='50%';
document.getElementById('noob').style.transform='translate(-50%, -50%)';
document.getElementById('noob').style.marginTop='200px';
document.getElementById('noob').style.color='white';
document.getElementById('noob').style.boxSizing='border-box';
document.getElementById('noob').style.height='350px';
document.getElementById('noob').style.width='350px';
document.getElementById('noob').style.alignItems='center';
document.getElementById('noob').style.alignContent='center';
document.getElementById('noob').style.fontFamily='cursive';
document.getElementById('noob').style.fontSize='40px';
document.getElementById('noob').style.paddingLeft='50px';

//variables declaration
let day=document.getElementById('day');
let month=document.getElementById('month');
let year=document.getElementById('year');
//day declaration
const weekdays=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday'];
function getWeekdayName(weekdayName) {
	return weekdays[weekdayNumber];
}
let date1 =new Date();
let weekdayNumber=date1.getDay();
let weekdayName = getWeekdayName(weekdayNumber);
day.innerHTML=weekdayName;
//month declaration
const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function getMonthNames(monthNames) {
	return months[monthNumber];
}
let date2 = new Date();
let monthNumber=date2.getMonth();
let monthNames = getMonthNames(monthNumber);
month.innerHTML=monthNames;
 year.innerHTML=new Date().getFullYear();

