import { ErrorModel } from './app';

const defaultErrorProps = {
    message: "Somenthing was wrong!",
};
type ErrorPropsWithDefaultValue = ErrorModel & typeof defaultErrorProps;
const Error = (props: ErrorPropsWithDefaultValue) => {
  return (
    <div className="ui page active dimmer">
      <div className="content" style={{color:'red', fontSize: 'xxx-large'}}>{props.message}</div>
    </div>
  );
};
Error.defaultProps = defaultErrorProps;
export default Error;
