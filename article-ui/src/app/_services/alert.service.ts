import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  private successMsg: string;
  private errorMsg: string;

  getSuccessMsg() {
  	return this.successMsg;
  }
  
  getErrorMsg() {
  	return this.errorMsg;
  }

  setSuccessMsg(msg: string) {
  	this.successMsg = msg;
  }

  setErrorMsg(msg: string) {
  	this.errorMsg = msg;
  }

  clearSuccessMsg() {
  	this.successMsg = "";
  }

  clearErrorMsg() {
  	this.errorMsg = "";
  }


}
