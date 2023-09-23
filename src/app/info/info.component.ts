import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{

  @Input() name = '';
  @Input() family = '';
  @Input() age = 0;
  @Input() edu = '';

  constructor(){}
  ngOnInit(): void {
  }

}
