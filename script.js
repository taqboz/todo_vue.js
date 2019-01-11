var app = new Vue({
	el: '#app', //セレクタはapp(id名)
	data: {
		//追加するタスク(変数)	
		newItem: '',
		//リストのデータ
		todos: []
	},
	//以下メソッドの定義
	methods: {
		//タスク追加メソッドの定義
		addItem: function(event) {
			//alert('タスクを登録します'); //ダイアログボックスの生成
			
			//もしnフォーム(newItem)が空の場合、処理が終了する
			if(this.newItem == '') return;
			
			var todo = {
				//itemにnewItemのデータ内容を代入
				item: this.newItem,
				isDone: false
			};
			//変数todoを配列todosの最後に追加する
			this.todos.push(todo);
			//addボタンが押されたあとフォーム(newItem)の内容を消す
			this.newItem = '';
		},
		
		//タスク削除メソッドの定義
		deleteItem: function(index) {
			//alert(index + 'のタスクを削除します'); //ダイアログボックスの生成
			
			//指定されたindex番号のタスクを配列から削除
			this.todos.splice(index, 1)
		}
	}
})