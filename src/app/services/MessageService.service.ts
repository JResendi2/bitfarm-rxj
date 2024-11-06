import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

// el formato de la informacion que devolvera mi observable
export interface InfoObservable {
  type: 'Warning' | 'Error';
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService implements OnInit{

  private messages: InfoObservable[] = []; // informacion almacenada

  private mySubject = new Subject<InfoObservable[]>()
  /*
    tanto el messages, como la informacion del observable son del mismo tipo
  */


  constructor() { }

  ngOnInit(): void {
    this.addWarning("test");
    this.addWarning("test");
    this.addWarning("test");
  }

  message$ = this.mySubject.asObservable();

  addError(text:string){
    this.messages.push({type: 'Error', text});
    this.mySubject.next([...this.messages]);
  }

  addWarning(text:string){
    this.messages.push({type: 'Warning', text});
    this.mySubject.next([...this.messages]);
  }

  // next() -> emite el evento a todos sus obsevadores
}
