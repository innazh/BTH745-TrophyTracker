import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile-info',
  templateUrl: './user-profile-info.component.html',
  styleUrls: ['./user-profile-info.component.css']
})
export class UserProfileInfoComponent implements OnInit {

  @Input()
  userName:any;
  @Input()
  userAchievement:any;
  constructor() { }

  ngOnInit() {
  }

}
