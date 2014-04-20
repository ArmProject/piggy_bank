app.service('CompareService', [

	function() {
		var self = this;
		this.data = {
			FUND: {
				profit: {
					name: "profit",
					value: 0
				},
				amount:{
					name: "amount",
					value: 1
				}
			},
			LOTTERY: {},
			BOND: {}
		};
		this.type = {
			FUND: {
				title: "Fund",
				list: {
					"bank1": [{
						name: "a",
						rate: 0
					}, {
						name: "b",
						rate: 1
					}],
					"bank2": [{
						name: "a",
						rate: 0
					}, {
						name: "b",
						rate: 1
					}]
				}
			},
			LOTTERY: {
				title: "Lottery",
				list: {
					"bank1": [{
						name: "a",
						rate: 0
					}, {
						name: "b",
						rate: 1
					}],
					"bank2": [{
						name: "a",
						rate: 0
					}, {
						name: "b",
						rate: 1
					}]
				}
			},
			BOND: {
				title: "Bond",
				list: {
					"bank1": [{
						name: "a",
						rate: 0
					}, {
						name: "b",
						rate: 1
					}],
					"bank2": [{
						name: "a",
						rate: 0
					}, {
						name: "b",
						rate: 1
					}]
				}
			}
		};

	}
]);