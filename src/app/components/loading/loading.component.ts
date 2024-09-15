import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  loading: boolean = true;

  constructor() { }

  ngOnInit(): void {
    const shelf = this;
    document.addEventListener("LOADING", (event:any)=>{
      shelf.loading = event.detail;
    }, {})
  }

}
