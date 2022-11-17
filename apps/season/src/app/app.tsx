// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

interface Props {
  products: string[];
}

interface State {
  lat: number;
  long: number;
  error: string;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { lat: 0, long: 0, error: '' };
  }

  static defaultProps: Props = {
    products: [],
  };

  override componentDidMount(): void {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        console.log('My Position', position);
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      (positionError: GeolocationPositionError) => {
        console.log(positionError);
        const message = `${positionError.message}`;
        this.setState({ error: message });
      }
    );
  }

  override render(): React.ReactNode {
    if (this.state.error.length > 0) {
      return <div style={{ background: 'red' }}>Error: {this.state.error}</div>;
    } else
      return (
        <div>
          <h1>Latitude: {this.state.lat}</h1>
          <h1>Longitude: {this.state.long}</h1>
        </div>
      );
  }
}
export default App;
