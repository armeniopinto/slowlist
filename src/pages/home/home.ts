import {Component} from "@angular/core";
import {Http} from "@angular/http";
import {NavController, LoadingController, Loading} from "ionic-angular";

import {SlowPage} from "../slow-page/slow-page";

@Component({
	selector: "page-home",
	templateUrl: "home.html"
})
export class HomePage {

	items: Array<any>;

	constructor(public http: Http, public navCtrl: NavController,
		public loadingCtrl: LoadingController) {

		http.get("assets/items.json").subscribe((result) => {
			this.items = result.json();
			console.log("Items loaded.");
		});
	}

	openSlowPage(): void {
		let loading: Loading = this.loadingCtrl.create({content: "Opening slow page..."});
		loading.present().then(() => {
			this.navCtrl.push(SlowPage, {items: this.items}).then(() => {
				loading.dismiss();
				console.log("Slow page loaded!");
			});
		});
	}

}
