import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  const completedParam = req.query.completed;
  let completedFilter;

  if (completedParam !== undefined) {
    completedFilter = completedParam === 'true';
  }

  const tasks = await taskService.getAllTasks(completedFilter);
  res.json(tasks);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
