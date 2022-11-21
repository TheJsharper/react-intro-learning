import { Result } from '../app.models';

export interface ImngeListProps {
  results: Result[] | undefined;
}

const ImageList: (props: ImngeListProps) => JSX.Element = (
  props: ImngeListProps
) => {
  const images:JSX.Element[]|undefined = props.results?.map((value: Result) => {
    return <img key={value.id} src={value.urls.regular} alt={value.alt_description || ''} />;
  });
  return <div>{images}</div>;
};
export default ImageList;
