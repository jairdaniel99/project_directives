import { Component } from '@angular/core';
import { timestamp } from 'rxjs';
import { TaskService } from './task.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})

// data below is the data we want available in our template
export class TaskComponent {
  // the task variable is used inside of our template using interpolation
  task: any;

  // Initially: run the constructor to create taskComponent instance
  constructor() {
    // constructor creates an instance of our task service dependency
    let taskService = new TaskService();
    // fetch the task using the service instance
    this.task = taskService.getTask();
  }
}
