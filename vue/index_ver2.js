Vue.component('delete-button', {
	template: '<button @click.stop="deleteTodo">Delete</button>',
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
			if( this.todoInputValue != '' ) {
				app.todos.push({
					title: this.todoInputValue,
					complete: false,
					context: this.todoContext
				});

				this.todoInputValue = '';
				this.todoContext = 'HOME';
			}else{
				alert('입력된 내용이 없습니다.');
			}
		},
		onDeleteTodo: function(index){
			var delConfirm = confirm('정말 지우시겠습니까?');

			if( delConfirm ){
				this.todos.splice(index, 1);
			}
		}
	},
	computed: {
		totalCount: function(){
			return this.todos.length;
		},
		completeCount: function(){
			return this.todos.filter( function(todo) {
				return todo.complete;
			}).length;
		},
		incompleteCount: function(){
			return this.todos.filter( function(todo) {
				return !todo.complete;
			}).length;
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