let todos = [
    { id: 1, title: "Học Node.js", completed: false },
    { id: 2, title: "Học Express", completed: false },
    { id: 3, title: "Làm bài tập MVC", completed: true }
];

class Todo {
    static getAll() {
        return todos;
    }

    static add(title) {
        const todo = {
            id: Date.now(),
            title: title,
            completed: false
        };

        todos.push(todo);
        return todo;
    }

    static toggle(id) {
        const todo = todos.find(item => item.id === Number(id));

        if (todo) {
            todo.completed = !todo.completed;
        }

        return todo;
    }

    static delete(id) {
        todos = todos.filter(item => item.id !== Number(id));
    }
}

module.exports = Todo;