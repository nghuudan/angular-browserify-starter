export const DemoComponent = {
	bindings: {
		chosenId: '<'
	},
	template: `
		<h2>Demo {{$ctrl.chosenId}}</h2>
		<ul>
			<li ng-repeat="demoId in [1, 2, 3]">
				<strong ng-if="demoId == $ctrl.chosenId">Demo {{demoId}}</strong>
				<a ng-if="demoId != $ctrl.chosenId"
					ui-sref="demoChosen({demoId:demoId})">Demo {{demoId}}
				</a>
			</li>
		</ul>
	`
};

export default DemoComponent;
