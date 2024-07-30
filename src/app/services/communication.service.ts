import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

  private messageSource = new BehaviorSubject<File | null>(null);
  currentMessage = this.messageSource.asObservable();

  onFileChange(file: File) {
    console.log(file);
    this.messageSource.next(file);
  }
}
