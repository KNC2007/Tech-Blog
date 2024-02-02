// post new blog route
const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const contents = document.querySelector('#blog-contents').value.trim();

  if (title && contents) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ title, contents }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create blog');
    }
  }
};

// post new comment route
const newCommentHandler = async (event) => {
  event.preventDefault();

  const contents = document.querySelector('#blog-comment').value.trim();
  const blog_id = document.querySelector('#blog-id').value.trim();
  if (contents) {
    const response = await fetch(`/api/blogs/comment`, {
      method: 'POST',
      body: JSON.stringify({ comment: contents, blog_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/blogs');
    } else {
      alert('Failed to create comment');
    }
  }
}

// delete blog post and comments associated with it
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete blog post');
    }
  }
};

// update blog post
const updateFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#update-blog-title').value.trim();
  const contents = document.querySelector('#update-blog-contents').value.trim();

  if (title && contents) {
    const blogId = document.querySelector('#update-blog-id').value;

    const response = await fetch(`/api/blogs/${blogId}`, {
      method: 'PUT',
      body: JSON.stringify({ title, contents }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update blog post');
    }
  }
};





// Event listeners
document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);


  