import { faker } from '@faker-js/faker';
const Comment = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            {faker.name.firstName('female')}
          </a>
          <div className="metadata">
            <span className="date">
                {faker.date.recent().toLocaleDateString()}
            </span>
          </div>
          <div className="text">
            {faker.lorem.words()}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comment;
