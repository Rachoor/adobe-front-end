import { Component } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  // selectedFile: File | undefined;

  // onFileSelected(event: Event): void {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files && input.files.length) {
  //     this.selectedFile = input.files[0];
  //     console.log('Selected file:', this.selectedFile);
  //   }
  // }

  // uploadFile(): void {
  //   if (this.selectedFile) {
  //     // Implement file upload logic here
  //     console.log('Uploading file:', this.selectedFile);
  //   } else {
  //     console.log('No file selected');
  //   }
  // }
  selectedFile: File | null = null;
  
  constructor(private communicationService: CommunicationService) {}

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('SELECTED_FILE', this.selectedFile);
      this.communicationService.onFileChange(this.selectedFile);
    }
  }

  // onSubmit(): void {
  //   if (this.selectedFile) {
  //     // Handle file upload logic here
  //     console.log('File selected:', this.selectedFile.name);
  //   }
  // }
}