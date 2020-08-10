var app = new Vue({
    el: "#app",
    data() {
        return {
            todos: [],
            todo: ""
        }
    },
    created() {
        this.loadLocalStorage();
    },
    watch: {
        todos() {
            localStorage.setItem("todos", JSON.stringify(this.todos));
        }
    },
    methods:
    {
        loadLocalStorage() {
            const ls = JSON.parse(localStorage.getItem("todos"));
            console.log(ls);
            if(ls == null) { return; }
            this.todos = ls;
            console.log(this.todos);
        },
        addTodo() {
            // push() digunakan untuk menambah item ke dalam array
            this.todos.push(this.todo);
            this.todo = "";
        },
        deleteTodo(index) {
            // splice() digunakan untuk menghapus item array tertentu. (nilai index untuk menentukan item 
            // mana yang akan dihapus, nilai 1 untuk menentukan banyak item yang dihapus)
            this.todos.splice(index, 1);
        }
    }
})