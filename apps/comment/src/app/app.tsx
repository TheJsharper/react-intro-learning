import ApprovalCard from './components/app.approval';
import Comment from './components/app.comment';
import { CommentModel } from './models/app.comment.model';
import CommpenService from './services/app.comment.service';
import "./app.module.scss";
export function App() {
  const comments: Array<CommentModel> = CommpenService();
  return (
    <div className="ui container comments comment-container">    
    {comments.map((comment:CommentModel, index:number)=>{
      return <ApprovalCard key={index}>
          <Comment  {...comment} />
      </ApprovalCard>
    })}
    </div>
  );
}

export default App;
