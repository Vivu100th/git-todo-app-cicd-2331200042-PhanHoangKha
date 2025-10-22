const { test, expect, _electron: electron } = require('@playwright/test');

test('End-to-end user workflow', async () => {
    // Launch the Electron app
    const electronApp = await electron.launch({ args: ['.'] });
    const window = await electronApp.firstWindow();

    const taskText = 'My new E2E test task';

    // const inputField = window.locator('input[placeholder="Add a new task..."]');
    // await inputField.fill(taskText);
    // await expect(inputField).toHaveValue(taskText);

    // const addButton = window.locator('button:has-text("Add")');
    // await addButton.click();

    // const todoItem = window.locator('.todo-item', { hasText: taskText });
    // await expect(todoItem).toBeVisible();
    // await expect(todoItem).toContainText(taskText);

    // const checkbox = todoItem.locator('input[type="checkbox"]');
    // await checkbox.click();
    // await expect(todoItem).toHaveClass(/completed/);

    // const deleteButton = todoItem.locator('button:has-text("Delete")');
    // await deleteButton.click();
    // await expect(todoItem).toBeHidden();

    const SLOW = 600;

    const inputField = window.locator('input[placeholder="Add a new task..."]');
    await inputField.fill(taskText);
    await expect(inputField).toHaveValue(taskText);
    await window.waitForTimeout(SLOW);

    const addButton = window.locator('button:has-text("Add")');
    await addButton.click();
    await window.waitForTimeout(SLOW);

    const todoItem = window.locator('.todo-item', { hasText: taskText });
    await expect(todoItem).toBeVisible();
    await expect(todoItem).toContainText(taskText);
    await window.waitForTimeout(SLOW);

    const checkbox = todoItem.locator('input[type="checkbox"]');
    await checkbox.click();
    await expect(todoItem).toHaveClass(/completed/);
    await window.waitForTimeout(SLOW);

    const deleteButton = todoItem.locator('button:has-text("Delete")');
    await deleteButton.click();
    await window.waitForTimeout(SLOW);

    await expect(window.locator('.todo-item', { hasText: taskText })).toHaveCount(0);


    // --- TODO: Task 1: Add a new todo item ---
    // 1. Find the input field (use a locator like window.locator('#todo-input')).
    // 2. Type the `taskText` into it.
    // 3. Find and click the "Add" button.


    // --- TODO: Task 2: Verify the todo item was added ---
    // 1. Locate the new todo item in the list. A good locator might be `window.locator('.todo-item')`.
    // 2. Assert that its text content contains the `taskText`.


    // --- TODO: Task 3: Mark the todo item as complete ---
    // 1. Find the checkbox within the new todo item.
    // 2. Click the checkbox.
    // 3. Assert that the todo item now has the 'completed' class.


    // --- TODO: Task 4: Delete the todo item ---
    // 1. Find the delete button within the todo item.
    // 2. Click the delete button.
    // 3. Assert that the todo item is no longer visible on the page.


    // Close the app
    await electronApp.close();
});
