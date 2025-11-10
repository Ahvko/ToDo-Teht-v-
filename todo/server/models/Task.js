import { pool } from '../helper/db.js';

const selectAllTasks = async () => {
  return await pool.query('SELECT * FROM task');
};

const insertTask = async (description) => {
  return await pool.query(
    'INSERT INTO task (description) VALUES ($1) RETURNING *',
    [description]
  );
};

// (PDF ei näytä deleteä, mutta se pyydetään “you should be able to figure it out”)
const deleteTaskById = async (id) => {
  return await pool.query('DELETE FROM task WHERE id = $1', [id]);
};

export { selectAllTasks, insertTask, deleteTaskById };
