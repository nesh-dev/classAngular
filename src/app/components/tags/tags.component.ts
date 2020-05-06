import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input() public tags;

  @Output() selectTag = new EventEmitter<string>();

  onSelectTag(tag: string) {
    this.selectTag.emit(tag);
  }


  constructor() { }

  ngOnInit() {
  }

}
