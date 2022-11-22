import { Result } from '../app.models';
import './app.image-list.module.scss';
import ImageCard from './image-card';

export interface ImngeListProps {
  results: Result[] | undefined;
}

const ImageList: (props: ImngeListProps) => JSX.Element = (props: ImngeListProps) => {
  const images: JSX.Element[] | undefined = props.results?.map((result: Result) => {
    return <ImageCard key={result.id} {...result} />;
  }
  );
  return <div className="image-list">{images}</div>;
};
export default ImageList;
