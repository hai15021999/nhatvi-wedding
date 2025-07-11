import { NgClass, NgFor } from "@angular/common";
import { Component } from "@angular/core";


@Component({
    selector: "app-calendar",
    templateUrl: "./calendar.component.html",
    styleUrls: ["./calendar.component.scss"],
    standalone: true,
    imports: [
        NgFor,
        NgClass
    ]
})
export class CalendarComponent {
    // Add any properties or methods needed for the calendar functionality
    days = Array.from({ length: 31 }, (_, i) => i + 1);
    highlightDay = 2;
}