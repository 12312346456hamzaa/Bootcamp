import React from 'react';
import data from '../data.json';

const PostList = () => {
  return (
    <div>
      <h1>Hi This is a Title</h1>
      {data.map(post => (
        <div key={post.id} style={{ marginBottom: '30px' }}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
