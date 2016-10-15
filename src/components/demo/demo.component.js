/**
 * Component for the demo page
 * @type {Object}
 */
export const DemoComponent = {
	bindings: {
		chosenDemo: '<',
		demoList: '<'
	},
	template: `
		<h2>Demo {{$ctrl.chosenDemo.id}}</h2>
		<ul>
			<li ng-repeat="demo in $ctrl.demoList">
				<a ui-sref="demoChosen({demoId:demo.id})">{{demo.name ? demo.name : 'Demo Name'}}</a>
			</li>
		</ul>
		<form name="demoForm"
			ng-if="$ctrl.chosenDemo">
			<p>
				<label for="demoName">Name:</label>
				<input id="demoName"
					name="demoName"
					ng-model="$ctrl.chosenDemo.name"
					type="text">
			</p>
			<p>
				<label for="demoText">Text:</label>
				<input id="demoText"
					name="demoText"
					ng-model="$ctrl.chosenDemo.text"
					type="text">
			</p>
			<a ui-sref="demo">Back to List</a>
		</form>
	`
};

export default DemoComponent;
