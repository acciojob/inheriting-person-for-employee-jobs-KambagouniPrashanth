// complete this js code
function Person(name, age) {
	this.name=name;
	this.age=age;
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`)
	
}

function Employee(name, age, jobTitle) {
	Person.call(this,name,age);
	this.jobTitle=jobTitle;
	
	
	
}
Employee.prototype.jobGreet=function() {
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobtitle}.`)

	
}
let employee=new Employee("Prashanth","20","Devloper")




// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
