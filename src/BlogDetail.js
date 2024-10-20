import React, { useState } from 'react';
import './BlogDetail.css';
import blogImage from './images/room1.jpg';
import authorImage from './images/person.jpg';
import { Link, useNavigate } from 'react-router-dom';
import axios from './axios';

function BlogDetail({ blog }) {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Thay useHistory bằng useNavigate

  const deleteHandler = () => {
    axios
      .delete(`/${blog?._id}`)
      .then((response) => {
        setMessage(response.data.message);
        navigate('/'); // Thay history.push bằng navigate
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="blogDetail">
      <div className="blogDetail__row1">
        <div className="blogDetail__articleOptions">
          <h4 className="blogDetail__createOrEdit">Create or Edit</h4>
          <div className="blogDetail__options">
            <Link to="/blogs/new">
              <i className="fa fa-plus blogDetail__create" aria-hidden="true"></i>
            </Link>
            <Link to={`/blogs/${blog?._id}/edit`} state={{ blog }}>
              <i className="fa fa-pencil-square-o blogDetail__edit" aria-hidden="true"></i>
            </Link>
            <i className="fa fa-trash blogDetail__delete" aria-hidden="true" onClick={deleteHandler}></i>
          </div>
        </div>
        <div className="blogDetail__blog">
          <h4 className="blogDetail__category">{blog?.category}</h4>
          <h1 className="blogDetail__title">{blog?.title}</h1>
          <div className="blogDetail__author">
            <img
              src={authorImage}
              alt="Author"
              className="blogDetail__authorImage"
            />
            <div>
              <h4 className="blogDetail__authorName">Fatima Mujahid</h4>
              <p className="blogDetail__date">{blog?.date}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="blogDetail__row2">
        <img
          className="blogDetail__image"
          src={blog?.image || blogImage}
          alt={blog?.title}
        />
      </div>
      <div className="blogDetail__row3">
        <p className="blogDetail__body">
          {blog?.body}
          <h2>Do you know what a blog is?</h2>
          If you don’t, then you’ve come to the right place. In 1994, when blogs
          began, a blog was more of a personal diary that people shared online.
          <h2>What is the purpose of a blog?</h2>
          There are many reasons to start a blog for personal use and only a
          handful of strong ones for business blogging.
          <br />
          Another one is to boost your traffic and send quality leads to your
          website. The more frequent and better your blog posts are, the higher
          the chances for your website to get discovered and visited by your
          target audience.
        </p>
      </div>
    </div>
  );
}

export default BlogDetail;
