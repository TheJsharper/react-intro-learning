import { Result } from '../app.models';
import  './app.image-list.module.scss';

export interface ImngeListProps {
  results: Result[] | undefined;
}

const ImageList: (props: ImngeListProps) => JSX.Element = (
  props: ImngeListProps
) => {
  const images:JSX.Element[]|undefined = props.results?.map((value: Result) => {
    return <img key={value.id} src={value.urls.regular} alt={value.alt_description || ''} />;
  });
  return <div className='image-list' >{images}</div>;
};
export default ImageList;
