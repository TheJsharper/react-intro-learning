import { faker } from '@faker-js/faker';
import { CommentModel } from '../models/app.comment.model';

const CommpenService: () => Array<CommentModel> = () => {
  const comments: Array<CommentModel> = Array.from(
    { length: 10 },
    (_, i) => i + 1
  ).map((_) => {
    return {
      author: faker.image.avatar(),
      firstName: faker.name.firstName('female'),
      createDate: faker.date.recent().toLocaleDateString(),
      text: faker.lorem.words(),
    };
  });
  return comments;
};

export default CommpenService;
