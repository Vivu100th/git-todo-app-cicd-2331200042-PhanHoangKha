const { TodoService } = require('../../js/model');

describe('TodoService Unit Tests', () => {
    let service;

    beforeEach(() => {
        // Create a new service instance for each test to ensure isolation
        service = new TodoService();
        // This is a bit of a hack to reset the singleton for testing purposes
        service.todos = [];
    });

    test('should add a new todo', () => {
        // TODO: Call the addTodo method with some text.
        // Then, assert that the service's todos array has a length of 1.
        // Assert that the text of the first todo matches the input text.
        const text = 'Learn Jest';
        service.addTodo(text);

        expect(service.todos.length).toBe(1);
        expect(service.todos[0].text).toBe(text);
        expect(service.todos[0].completed).toBe(false);
    });

    test('should toggle the completed state of a todo', () => {
        service.addTodo('Toggle me');
        const id = service.todos[0].id;

        service.toggleTodoComplete(id);
        expect(service.todos[0].completed).toBe(true);

        service.toggleTodoComplete(id);
        expect(service.todos[0].completed).toBe(false);
    });

    test('should remove a todo', () => {
        service.addTodo('Remove me');
        const id = service.todos[0].id;

        service.removeTodo(id);
        expect(service.todos.length).toBe(0);
    });

    test('should not add a todo if text is empty', () => {
        service.addTodo('');
        expect(service.todos.length).toBe(0);
    });
});
