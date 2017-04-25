import {Component, Input} from "@angular/core";
import {ModalController} from "ionic-angular";

@Component({
	selector: "slow-item",
	templateUrl: "slow-item.component.html"
})
export class SlowItemComponent {

	@Input()
	item: any;

	constructor(private modalCtrl: ModalController) {
	}


	getCostIcon(): string {
		let cost: number = Math.random() * 1.5;
		let costIcon: string;
		if (cost < 0.33) {
			costIcon = "cost000";
		} else if (cost < 0.66) {
			costIcon = "cost033";
		} else if (cost < 1.00) {
			costIcon = "cost066";
		} else if (cost < 1.33) {
			costIcon = "cost100";
		} else {
			costIcon = "cost133";
		}
		return costIcon;
	}


	doClick(): void {
		console.log("Tap tap tap!");
	}


	doPress(): void {
		console.log("Press press press!");
	}

}