import { Component, OnInit , AfterViewInit, viewChild, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})

export class ContactUsComponent  {
  @ViewChild('contactForm') 
  contactForm!: NgForm;
  fields = [
    { type: 'text', name: 'name', label: 'Username', value: '' },
    { type: 'email', name: 'email', label: 'Email', value: '' },
    { type: 'tel', name: 'phone', label: 'Phone', value: '' }
  ];
  message = '';

  focusFunc(event: FocusEvent) {
    const parent = (event.target as HTMLElement).parentNode as HTMLElement;
    parent.classList.add('focus');
  }

  blurFunc(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    const parent = input.parentNode as HTMLElement;
    if (input.value === '') {
      parent.classList.remove('focus');
    }
  }
  onSubmit() {
    // Handle form submission
    console.log('Form submitted');
    this.contactForm.resetForm();
  }

}
