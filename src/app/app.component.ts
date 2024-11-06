import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { fromEvent, Observable, Subscription } from 'rxjs';

import { ajax, } from 'rxjs/ajax';
// import './rxj/observables/ajax';
import { MessageServiceService } from './services/MessageService.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface InfoObservable {
  type: 'Warning' | 'Error';
  text: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'rjx';

  messages!:InfoObservable[];

  @ViewChild('btnacept', { static: true }) button!: ElementRef; // Referencia al botón
  apiData: Observable<any> = ajax('/api/data');



  myFormGroup!: FormGroup;

  mouseMoveObservable!: Observable<MouseEvent>;
  mouseMoveSubscription!: Subscription;


  constructor(private messageServiceService: MessageServiceService){}

  ngOnInit(): void {

    this.myFormGroup = new FormGroup({
      text: new FormControl('', [
        Validators.required
      ]),
      type: new FormControl('', [
      ])
    });

    // this.apiData.subscribe(res => console.log(res.status, res.response));

    // this.myFromEvent();

    // this.myAjax();

    this.messageServiceService.message$.subscribe((info)=>{
      this.messages = info;
      // console.log("messageServiceService", this.messages);
    });

  }


  onSubmit(){
    if(this.myFormGroup.invalid){
      return;
    }
    const {type, text} = this.myFormGroup.value;

    if(type === "" || type === false){
      this.messageServiceService.addWarning(text);
    } else {
      this.messageServiceService.addError(text);
    }

    console.log(this.myFormGroup.value)
  }

  myAjax() {
    // const apiData:Observable<any> = ajax('https://rickandmortyapi.com/api/character/?page=1');
    // Subscribe to create the request
    // apiData.subscribe(res => console.log(res.status, res.response));
  }

  myFromEvent() {
    /* FromEvent */
    this.mouseMoveObservable = fromEvent<MouseEvent>(this.button.nativeElement, 'mousemove');
    this.mouseMoveSubscription = this.mouseMoveObservable.subscribe(evt => {
      // Log coords of mouse movements
      console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
      console.log(evt);

      // When the mouse is over the upper-left of the screen,
      // unsubscribe to stop listening for mouse movements
      if (evt.clientX < 40 && evt.clientY < 40) {
        this.mouseMoveSubscription.unsubscribe();
      }
    });
  }
}
