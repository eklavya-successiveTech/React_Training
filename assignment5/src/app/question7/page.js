'use client'; // This must be a Client Component

import { useState } from 'react';
import axios from 'axios';

export default function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [statusMessage, setStatusMessage] = useState({
    type: '', 
    text: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatusMessage({ type: '', text: '' });

    const newPost = {
      title: title,
      body: content,
      userId: 1, 
    };

    try {
      const response = await axios.post('https://dummyjson.com/posts/add', newPost);
      
      console.log('Post created successfully:', response.data);
      setStatusMessage({ 
        type: 'success', 
        text: `Success! Your post "${response.data.title}" has been created with ID: ${response.data.id}.` 
      });

      setTitle('');
      setContent('');

    } catch (error) {
      console.error('Error creating post:', error);
      setStatusMessage({
        type: 'error',
        text: 'Failed to create post. Please try again.',
      });
    } finally {
      
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px' }}>
      <h1>Create a New Post</h1>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="title" style={{ display: 'block', marginBottom: '5px' }}>
            Title:
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            disabled={isSubmitting}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="content" style={{ display: 'block', marginBottom: '5px' }}>
            Content:
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            disabled={isSubmitting}
            rows="6"
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <button type="submit" disabled={isSubmitting} style={{ padding: '10px 15px' }}>
          {isSubmitting ? 'Submitting...' : 'Create Post'}
        </button>
      </form>
      
      {statusMessage.text && (
        <div 
          style={{ 
            marginTop: '20px', 
            padding: '10px', 
            color: 'white',
            backgroundColor: statusMessage.type === 'success' ? 'green' : 'red'
          }}
        >
          {statusMessage.text}
        </div>
      )}
    </div>
  );
}