import Comment from './app.comment';
import { CommentModel } from './models/app.comment.model';
import CommpentService from './services/app.comment.service';
export function App() {
  const comments:Array<CommentModel> = CommpentService();
 
  const first = comments[0];
  const sec = comments[1];
  
  return (
    <div className="ui container comments">
      <Comment {...first} />
      <Comment {...sec} />
    </div>
  );
}

export default App;
