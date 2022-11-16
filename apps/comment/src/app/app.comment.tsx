import {faker} from "@faker-js/faker";
const Comment = () => {
  return (
    <div className="ui container comments">
      <div className="coment">
        <a href="/" className="avatar">
            <img src={faker.image.avatar()} alt="avatar" />
        </a>
        <div className="comment">
            <a href="/"  className="author">
                Sam
            </a>

            <div className="metadata">
                <span className="datae">
                    Today at 6:00PM
                </span>
            </div>
            <div className="text">
                Nice blog post!
            </div>
        </div>
      </div>
    </div>
  );
};
export default Comment;
