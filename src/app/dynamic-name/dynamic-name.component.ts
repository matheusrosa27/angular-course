import { Component, Input } from '@angular/core';

@Component({
  selector: 'dynamic-name',
  templateUrl: './dynamic-name.component.html',
  styleUrls: ['./dynamic-name.component.css']
})
export class DynamicNameComponent {

  @Input()
  name: string | undefined;

  // Key Up Update
  onKeyUp(newName: string) {
    this.name = newName;
  }

}
