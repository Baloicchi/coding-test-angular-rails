import { Component, OnInit } from '@angular/core';

import { UserService } from '@app/_services/user.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

	name: string;

  constructor(
	private userService: UserService
  ) { }

  ngOnInit() {
	  this.name = this.userService.getName();
  }

}
