// 
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
      document.location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
}


document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);
