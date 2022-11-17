import ApprovalCard from './components/app.approval';
import Comment from './components/app.comment';
import { CommentModel } from './models/app.comment.model';
import CommpenService from './services/app.comment.service';
export function App() {
  const comments: Array<CommentModel> = CommpenService();
  const first = comments[0];
  const sec = comments[1];
  const thrid = comments[2];

  return (
    <div className="ui container comments">
      <ApprovalCard>
        <Comment {...first} />
      </ApprovalCard>
      <ApprovalCard>
        <Comment {...sec} />
      </ApprovalCard>
      <ApprovalCard>
        <Comment {...thrid} />
      </ApprovalCard>
    </div>
  );
}

export default App;
