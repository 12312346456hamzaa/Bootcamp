const pool = require('../config/db');

module.exports = {
  async createUser(user, hashedPassword, client) {
    // Transaction: ajouter user dans 'users' + password dans 'hashpwd'
    await client.query('BEGIN');
    const userInsert = await client.query(
      'INSERT INTO users (email, username, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING *',
      [user.email, user.username, user.first_name, user.last_name]
    );
    await client.query(
      'INSERT INTO hashpwd (username, password) VALUES ($1, $2)',
      [user.username, hashedPassword]
    );
    await client.query('COMMIT');
    return userInsert.rows[0];
  },

  async getAllUsers() {
    const res = await pool.query('SELECT * FROM users');
    return res.rows;
  },

  async getUserById(id) {
    const res = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return res.rows[0];
  },

  async updateUser(id, user) {
    const res = await pool.query(
      'UPDATE users SET email = $1, username = $2, first_name = $3, last_name = $4 WHERE id = $5 RETURNING *',
      [user.email, user.username, user.first_name, user.last_name, id]
    );
    return res.rows[0];
  },

  async getUserAndPasswordByUsername(username) {
    // Pour login
    const userRes = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    const pwdRes = await pool.query('SELECT * FROM hashpwd WHERE username = $1', [username]);
    return {
      user: userRes.rows[0],
      password: pwdRes.rows[0] ? pwdRes.rows[0].password : null
    };
  }
};
