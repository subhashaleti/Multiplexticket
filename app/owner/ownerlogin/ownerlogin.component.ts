import { Component, OnInit } from '@angular/core';
import { Owner } from '../ownermodel/owner';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OwnerService } from '../owner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownerlogin',
  templateUrl: './ownerlogin.component.html',
  styleUrls: ['./ownerlogin.component.css']
})
export class OwnerloginComponent implements OnInit {
  owner : Owner;
  loginForm:FormGroup;
  constructor(private fb: FormBuilder,private ownerService:OwnerService, private router: Router) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
      id: ['', [Validators.required]],
      password: ['', [Validators.required]]})

  }
  login=function(){
    this.ownerService.getOwnerFromData(this.loginForm.value).then(response => {this.owner=response;this.router.navigate(['/ownerview',this.owner.id])})
  .catch(response=>this.owner=response);
  }
}
