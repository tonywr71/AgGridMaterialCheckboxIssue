import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular/main";

@Component({
  selector: "category-checkbox",
  template: `<mat-checkbox *ngIf="params.value" [ngModel]="params.data[params.colDef.field].isChecked" 
  (change)="onCheckChanged(params.colDef,params.data[params.colDef.field])">{{params.value.description}}</mat-checkbox><input type="checkbox" [checked]="params.data[params.colDef.field].isChecked" />` 
})
export class CategoryCheckboxCellRenderer implements ICellRendererAngularComp {

  params: any;

  refresh(params: any): boolean {
    return false;
  }
  afterGuiAttached?(params?: any): void {
    //do nothing
  }

  agInit(params: any): void {
    this.params = params;
    //console.log("params", this.params);
  }

  onCheckChanged(colDef, field): void {

    //console.log("params.data[params.colDef.field].isChecked", this.params.data[this.params.colDef.field].isChecked);
    //console.log("field.isChecked", field.isChecked);

    field.isChecked = !field.isChecked;
    if (colDef.onCellValueChanged instanceof Function) {
      colDef.onCellValueChanged(!field.isChecked, field.isChecked);
    }
  }

}
