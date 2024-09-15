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
    document.addEventListener("LOADING", (event: any) => {
      if (event.detail === false) {
        setTimeout(() => {
          shelf.loading = event.detail;
        }, 1500);
      }
      if (event.detail === true) {
        shelf.loading = event.detail;
      }
    }, {})
  }

}
