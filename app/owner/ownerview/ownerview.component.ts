import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OwnerService } from '../owner.service';
import { Owner } from '../ownermodel/owner';

@Component({
  selector: 'app-ownerview',
  templateUrl: './ownerview.component.html',
  styleUrls: ['./ownerview.component.css']
})
export class OwnerviewComponent implements OnInit {
  owner:Owner = new Owner(); 
  id : string;
      
constructor(private ownerService:OwnerService, private router: Router,private route:ActivatedRoute) { }

ngOnInit() {
  this.getOwner();
}
getOwner=function(){
    this.id=this.route.snapshot.paramMap.get('id');
    this.ownerService.view(this.id).then(response=>this.owner=response);//to modify for exceptions
}

}
