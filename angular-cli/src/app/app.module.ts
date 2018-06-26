import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
// ag-grid
import {AgGridModule} from "ag-grid-angular/main";
// application
import {AppComponent} from "./app.component";
// rich grid
import {RichGridComponent} from "./rich-grid-example/rich-grid.component";
import {MyGridComponent} from "./my-grid-example/my-grid.component";
import {DateComponent} from "./date-component/date.component";
import {HeaderComponent} from "./header-component/header.component";
import {HeaderGroupComponent} from "./header-group-component/header-group.component";
import { CategoryCheckboxCellRenderer } from "./my-grid-example/category-checkbox.cell-renderer";
import { MatButtonModule, MatCheckboxModule, MatSelectModule, MatListModule } from "@angular/material";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AgGridModule.withComponents(
            [
                DateComponent,
                HeaderComponent,
                HeaderGroupComponent,
                CategoryCheckboxCellRenderer
            ]
        ),
        MatCheckboxModule,
        MatButtonModule,
        MatSelectModule,
        MatListModule
        
    ],
    declarations: [
        AppComponent,
        RichGridComponent,
        DateComponent,
        HeaderComponent,
        HeaderGroupComponent,
        MyGridComponent,
        CategoryCheckboxCellRenderer,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
