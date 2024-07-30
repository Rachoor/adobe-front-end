import { Component, OnInit} from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-apply-transformations',
  templateUrl: './apply-transformations.component.html',
  styleUrls: ['./apply-transformations.component.css']
})
export class ApplyTransformationsComponent implements OnInit {
  isChecked: boolean = false;
  input1: string = '';
  input2: string = '';
  selectedFile: File | null = null;

  constructor(private communicationService: CommunicationService) { }

  ngOnInit(): void {
    this.communicationService.currentMessage.subscribe((file: File | null) => this.selectedFile = file);
  }
  


  onSubmit() {
    console.log('Checkbox is:', this.isChecked);
    console.log('Input 1:', this.input1);
    console.log('Input 2:', this.input2);
    console.log('from transformations', this.selectedFile);
  }
}
