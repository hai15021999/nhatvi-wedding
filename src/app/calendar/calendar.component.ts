import { NgClass } from "@angular/common";
import { Component } from "@angular/core";


@Component({
    selector: "app-calendar",
    templateUrl: "./calendar.component.html",
    styleUrls: ["./calendar.component.scss"],
    standalone: true,
    imports: [
        NgClass
    ]
})
export class CalendarComponent {
    // Add any properties or methods needed for the calendar functionality
    dateInWeek = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
    daysInMonth = ['', '', '', '', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    highlightDay = 2;
}