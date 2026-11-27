const Todo = require("../models/todovdm");

exports.index = (req, res) => {
    const todos = Todo.getAll();

    res.render("index", {
        title: "Ứng dụng To-Do List",
        todos: todos
    });
};

exports.add = (req, res) => {
    const title = req.body.title;

    if (title && title.trim() !== "") {
        Todo.add(title.trim());
    }

    res.redirect("/");
};

exports.toggle = (req, res) => {
    Todo.toggle(req.params.id);

    res.redirect("/");
};

exports.delete = (req, res) => {
    Todo.delete(req.params.id);

    res.redirect("/");
};