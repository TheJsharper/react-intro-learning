import { CommentModel } from '../models/app.comment.model';
const Comment = (comment: CommentModel ) => {
    console.log(comment);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={comment.author} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {comment.firstName}
        </a>
        <div className="metadata">
          <span className="date">
            {comment.createDate}
          </span>
        </div>
        <div className="text">{comment.text}</div>
      </div>
    </div>
  );
};
export default Comment;
