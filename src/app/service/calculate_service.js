app.service('CalculateService', ['CompareService',
	function(CompareService) {
		var self = this;

		function calFund(data) {
			return 10;
		}
		this.calculate = function(data) {
			switch (data.type) {
				case CompareService.type.FUND.title:
					return calFund(data);
			}
		};

	}
]);