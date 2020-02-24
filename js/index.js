var text = {
	message1 : "信息1",
	message2 : "信息2",
	checked : true,
}

var app = new Vue( {
	el:"#app",
	data: text,
	methods:{
		change: function() {
			this.checked = !this.checked;
		},
	}
})