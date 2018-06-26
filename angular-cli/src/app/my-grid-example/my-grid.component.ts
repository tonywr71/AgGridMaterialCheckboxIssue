
import { Component, ElementRef, ChangeDetectorRef } from "@angular/core";
import { ColDef, GridOptions } from "ag-grid";
import { CategoryCheckboxCellRenderer } from "./category-checkbox.cell-renderer";

@Component({
    selector: "my-grid-component",
    templateUrl: "my-grid.component.html"
  })
  export class MyGridComponent {

    columnDefs: ColDef[] = [
        { width: 200, field: "col0", cellRendererFramework: CategoryCheckboxCellRenderer, onCellValueChanged: (o, n) => this.updateCategoryList(o, n) },
        { width: 200, field: "col1", cellRendererFramework: CategoryCheckboxCellRenderer, onCellValueChanged: (o, n) => this.updateCategoryList(o, n) },
        { width: 200, field: "col2", cellRendererFramework: CategoryCheckboxCellRenderer, onCellValueChanged: (o, n) => this.updateCategoryList(o, n) },
        { width: 200, field: "col3", cellRendererFramework: CategoryCheckboxCellRenderer, onCellValueChanged: (o, n) => this.updateCategoryList(o, n) },
        { width: 200, field: "col4", cellRendererFramework: CategoryCheckboxCellRenderer, onCellValueChanged: (o, n) => this.updateCategoryList(o, n) },
        { width: 200, field: "col5", cellRendererFramework: CategoryCheckboxCellRenderer, onCellValueChanged: (o, n) => this.updateCategoryList(o, n) }
      ];

      gridOptions: GridOptions = {
        
            defaultColDef: {
              enableRowGroup: false,
              enablePivot: false,
              enableValue: true
            },
            columnDefs: this.columnDefs,
            enableStatusBar: true,
            enableRangeSelection: false,
            enableColResize: true,
            enableSorting: true,
            enableFilter: true,
            headerHeight: 0,
            rowHeight: 48,
            toolPanelSuppressSideButtons: true,
            toolPanelSuppressPivots: true,
            suppressNoRowsOverlay: false
          };

          gridParams: any;

      isCheckboxListOpen: boolean = false;
      startCapture: boolean = false;
      rowData: any[] = [{
            col0: {code: "3412", description: "A-1 Rent-A-Car", isChecked: true}, 
            col1: {code: "3374", description: "Accent Rent-A-Car", isChecked: true},
            col2: {code: "6513", description: "Accommodation", isChecked: false},
            col3: {code: "8931", description: "Accounting Services", isChecked: false},
            col4: {code: "3354", description: "Action Auto Rental", isChecked: false},
            col5: {code: "3681", description: "Adam Marks Hotel", isChecked: false}
        }];

      testField: boolean = true;

      col0: boolean = true;
      col1: boolean = true;
      col2: boolean = false;
      col3: boolean = false;
      col4: boolean = false;
      col5: boolean = false;
      
      constructor() {

      }

      onGridReady(params) {
        //params.api.sizeColumnsToFit();
        this.gridParams = params;
      }

      openCategories() {
          this.isCheckboxListOpen = !this.isCheckboxListOpen;
         // if (this.isCheckboxListOpen) {
           // this.gridParams.api.setRowData(this.rowData);
          //}
      }

      cardClick() {
        if (this.isCheckboxListOpen && !this.startCapture) {
          this.startCapture = true;
        }
        else if (this.isCheckboxListOpen) {
          this.isCheckboxListOpen = false;
          this.startCapture = false;
        }
      }

      updateCategoryList(oldValue, newValue) {
      }

  }

  