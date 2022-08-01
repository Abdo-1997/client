import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
@Input() PageSize!:number;
@Input() TotalCount!:number;
@Output() pageChange=new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  onPagerChange(event:any){
    console.log(event,"from pager ")
    this.pageChange.emit(event.page) ;
  }
}
