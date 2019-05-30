Vue.component('delete-button', {
	template: `<button @click.stop="deleteTodo">Delete</button>`,
	props: {
		index: {
			type: Number,
			required: true
		}
	},
	methods: {
		deleteTodo: function(){
			this.$emit('delete-todo', this.index);
		}
	}
});

var app = new Vue({
	el: '#app',
	data: {
		todos: [],
		todoInputValue: '',
		todoContext: 'HOME'
	},
	methods: {
		toggleCompleted: function(todo){
			todo.complete = !todo.complete;
		},
		addTodo: function(){
			app.todos.push({
				title: this.todoInputValue,
				complete: false,
				context: this.todoContext
			});

			this.todoInputValue = '';
			this.todoContext = 'HOME';
		},
		onDeleteTodo: function(index){
			this.todos.splice(index, 1);
		}
	},
	computed: {
		totalCount: function(){
			return this.todos.length;
		},
		completeCount: function(){
			return this.todos.filter(todo => todo.complete).length;
		},
		incompleteCount: function(){
			return this.todos.filter(todo => !todo.complete).length;
		}
	}
});

// var computedVM = new Vue({
// 	el: '#computed',
// 	data: {
// 		a: 1,
// 		b: 2
// 	},
// 	computed: {
// 		sum: function(){
// 			return this.a + this.b;
// 		}
// 	}
// });