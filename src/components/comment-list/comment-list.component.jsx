import React from 'react';

import Comment from '../comment/comment.component';

import './comment-list.styles.scss';

const CommentList = ({ reviews }) => (
  <div className='comment-list'>
    <div className='mb-2'>
      {reviews.map((review) => (
        <Comment key={reviews.length + 1} review={review}></Comment>
      ))}
    </div>
  </div>
);

export default CommentList;
