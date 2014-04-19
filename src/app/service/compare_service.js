app.service('CompareService', [

	function() {
		var self = this;
		this.type = {
			FUND: {
				title: "Fund",
				list: {
					"bank1": ["a", "b"],
					"bank2": ["a", "b"]
				}
			},
			LOTTERY: {
				title: "Lottery",
				list: {
					"bank1": ["a", "b"],
					"bank2": ["a", "b"]
				}
			},
			BOND: {
				title: "Bond",
				list: {
					"bank1": ["a", "b"],
					"bank2": ["a", "b"]
				}
			}
		};

	}
]);