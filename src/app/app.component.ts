import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  emails: Array<Email> = [email1, email2, email3, email4];
}

class Email {
  email: string;
  importance: boolean;
  subject: string;
  content: string;
	
	constructor(emailP: string, importanceP: boolean, subjectP: string, contentP: string){
    this.email = emailP;
    this.importance = importanceP;
    this.subject = subjectP;
    this.content = contentP;
	}
}
let email1 = new Email('bill@Gates.com', true, 'New Windows', 'Windows XI will launch in year 2100.');
let email2 = new Email('ada@Lovelace.com', true, 'Programming', 'Enchantress of Nmbers');
let email3 = new Email('John@carmac.com', false, 'Updated Algo', 'New algorith for shadow volumes');
let email4 = new Email('gabe@newel.com', false, 'HL3!', 'Just kidding');




