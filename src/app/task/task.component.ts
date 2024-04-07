import { Component } from '@angular/core';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})

// data below is the data we want available in our template
export class TaskComponent {
  task = {
    title: 'Review the Angular directives',
    description: 'Random text hello goodbyew my name is burrito',
    priority_level: 'medium',
  };
}