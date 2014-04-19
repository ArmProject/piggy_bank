app.service('CompareService', [

	function() {
		var self = this;
		this.type = {
			FUND: {
				title: "fund",
				list: ["a", "b"]
			},
			LOTTERY: {
				title: "lottery",
				list: ["c", "d"]
			},
			BOND: {
				title: "bond",
				list: ["e", "f"]
			}
		};

	}
]);