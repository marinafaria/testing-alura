import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.scss']
})
export class PhotoFrameComponent implements OnInit {

  @Output() liked: EventEmitter<void> = new EventEmitter();
  @Input() description='';
  @Input() src='';
  @Input() likes=0


  constructor() { }

  ngOnInit(): void {
  }

  like() : void {
    this.liked.emit();
  }

}
