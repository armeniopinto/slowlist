import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";

@Component({
	selector: 'page-slow-page',
	templateUrl: 'slow-page.html',
})
export class SlowPage {

	items: any = {};

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad(): void {
		this.setItems();
	}

	private setItems(): void {
		for (let item of this.navParams.data.items) {
			for (let tag of item.tags) {
				if (!this.items[tag]) {
					this.items[tag] = [];
				}
				if (this.items[tag].indexOf(item) == -1) {
						this.items[tag].push(item);
				}
			}
		}
	}

	getTags(): Array<string> {
		return Object.keys(this.items).sort();
	}

}