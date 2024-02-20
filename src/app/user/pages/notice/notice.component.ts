import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MessageService } from 'src/app/Services/message.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { dynamic_data } from 'src/dynamic_data/dynamic_data';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css'],
})
export class NoticeComponent implements OnInit {

  futureDateControl = new FormControl();

categories: FormControl<any> | undefined;
myForm:any;

constructor(private service:DataService, private router:Router, private msgService: MessageService, private datePipe: DatePipe, private fb: FormBuilder) { 
  // Set the minimum value to the current date and time
  const currentDateTime = new Date().toISOString().slice(0, 16);

    this.myForm = this.fb.group({
      futureDate: [null, [Validators.required, this.futureDateValidator(currentDateTime)]],
    });
}

 // Custom validator function to ensure the selected date is in the future
 private futureDateValidator(currentDateTime: string) {
  return (control) => {
    const selectedDateTime = control.value;

    if (selectedDateTime && selectedDateTime > currentDateTime) {
      // Disable selecting dates that are more than 1 year in the future
      const oneYearLater = new Date();
      oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
      if (selectedDateTime > oneYearLater.toISOString().slice(0, 16)) {
        return { tooFarInFuture: true };
      }
    }

    return null;
  };
}



ngOnInit() {
  

}
  




}
