JavaScript Code (script.js)
// Person Class class Person {
constructor(name, address, email, phone) { this.name = name;
this.address = address; this.email = email; this.phone = phone;
}
printDetails() {
return `Name: ${this.name}, Address: ${this.address}, Email: ${this.email}, Phone:
${this.phone}`;
}
// Arrow function as member function getName = () => this.name;
}
// Student Class extending Person class Student extends Person {
constructor(name, address, email, phone, rollNo) { super(name, address, email, phone);
this.rollNo = rollNo;
}
printDetails() {
if (this.rollNo === 0) throw new Error("Roll number cannot be zero."); return `${super.printDetails()}, Roll Number: ${this.rollNo}`;
}
}
// Validate form data function validateForm() {
// Tagline validation
const tagline = document.getElementById('tagline').value; if (tagline.length > 50) {
alert('Tagline cannot exceed 50 characters.'); return false;
}
// Phone number validation
const phone = document.getElementById('phone').value; const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
if (!phonePattern.test(phone)) {

alert('Phone number must be in the format 123-456-7890.'); return false;
}
// All validations passed processOrder();
return false; // Prevent default form submission
}
// Process and generate receipt function processOrder() {
const tagline = document.getElementById('tagline').value; const color = document.getElementById('color').value; const size = document.getElementById('size').value;
const quantity = document.getElementById('quantity').value;
const deliveryDate = document.getElementById('delivery-date').value; const name = document.getElementById('name').value;
const address = document.getElementById('address').value; const email = document.getElementById('email').value; const phone = document.getElementById('phone').value;
const comments = document.getElementById('comments').value;
// Create a new Person object
const person = new Person(name, address, email, phone);
// Create a new Student object to demonstrate inheritance (optional)
// const student = new Student(name, address, email, phone, 1);
// Generate receipt
const receipt = document.getElementById('receipt'); const receiptDetails = `
<strong>Order Confirmation:</strong><br> Tagline: ${tagline}<br>
Color: ${color}<br> Size: ${size}<br>
Quantity: ${quantity}<br>
Delivery Date: ${deliveryDate}<br> Name: ${name}<br>
Address: ${address}<br> Email: ${email}<br> Phone: ${phone}<br>
Comments: ${comments}<br>
Date of Order: ${new Date().toLocaleDateString()}
`;
document.getElementById('receiptDetails').innerHTML = receiptDetails; receipt.style.display = 'block
