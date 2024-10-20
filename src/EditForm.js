import React, { useState } from 'react';
import './Form.css';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from './axios';

function EditForm() {
  const location = useLocation();  // Sử dụng useLocation để truy cập state
  const blog = location.state.blog;  // Lấy blog từ state
  const [title, setTitle] = useState(blog.title);
  const [category, setCategory] = useState(blog.category);
  const [image, setImage] = useState(blog.image);
  const [body, setBody] = useState(blog.body);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Thay thế useHistory bằng useNavigate

  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .put(`/${blog?._id}`, { title, category, image, body })
      .then((response) => {
        setMessage(response.data.message);
        setTitle('');
        setCategory('');
        setImage('');
        setBody('');
        navigate(`/blogs/${blog?._id}`);  // Thay thế history.push bằng navigate
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <form className="form" onSubmit={updateHandler}>
      <div className="form__inputFields">
        <span className="form__logo">BLOG</span>
        <h4 className="form__subheading">Edit</h4>
        <h1 className="form__heading">Edit Blog</h1>
        <input
          className="form__input"
          type="text"
          name="title"
          id="title"
          value={title}
          autoComplete="off"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          className="form__input"
          type="text"
          name="category"
          id="category"
          value={category}
          autoComplete="off"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <input
          className="form__input"
          type="text"
          name="image"
          id="image"
          value={image}
          autoComplete="off"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <textarea
          className="form__input"
          name="body"
          id="body"
          rows="7"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <button className="form__button" type="submit">
          Update
        </button>
      </div>
      <img src={image} alt="Blog" className="form__image" />
    </form>
  );
}

export default EditForm;
