const blogForm = document.querySelector(".new-blog-form")
const blogDelete = document.querySelector(".blog-list")
const blogUpdate = document.querySelector("#update-form")

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
  const id = event.target.getAttribute('data-id');

  console.log("title:", title);
  console.log("contents:", contents);
  // console.log("blogId:", blogId);

  if (title && contents) {

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, contents }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('You can only update your own blog post.');
    }
  }
};





// Event listeners
if (blogForm != null) {
  blogForm.addEventListener('submit', newFormHandler);
};

if (blogDelete != null) {
  blogDelete.addEventListener('click', delButtonHandler);
};

if (blogUpdate != null) {
  blogUpdate.addEventListener('click', updateFormHandler);
}

