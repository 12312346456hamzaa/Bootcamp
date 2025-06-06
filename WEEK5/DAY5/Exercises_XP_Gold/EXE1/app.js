const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

// GET all posts
app.get('/api/posts', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// GET single post by ID
app.get('/api/posts/:id', async (req, res) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch post' });
  }
});

// CREATE a post
app.post('/api/posts', async (req, res) => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});

// UPDATE a post
app.put('/api/posts/:id', async (req, res) => {
  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update post' });
  }
});

// DELETE a post
app.delete('/api/posts/:id', async (req, res) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete post' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
