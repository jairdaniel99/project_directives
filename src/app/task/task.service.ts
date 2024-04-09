import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}
  getTask() {
    // Http call to API to get a specific task
    return {
      title: 'Review the Angular directives',
      description: 'Random text hello goodbyew my name is burrito',
      priority_level: 'medium',
      date: new Date(2024, 4, 7),
      time: new Date(2024, 4, 7, 14, 30, 0),
    };
  }
}
