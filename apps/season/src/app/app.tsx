import React from 'react';
import SeasonDisplay from './app.season-display';
import Spinner from './app.spinner';

interface Props {
  products: string[];
}

interface State {
  lat: number;
  long: number;
  error: string;
}

class App extends React.Component<Props, State> {
  override state = { lat: 0, long: 0, error: '' };

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
    if (this.state.error.length > 0 && !this.state.lat && !this.state.long) {
      return (
        <div style={{ background: 'red', color: 'white' }}>
          Error: {this.state.error}
        </div>
      );
    }
    if (this.state.error.length === 0 && this.state.lat && this.state.long) {
      return (
        <div>
          <SeasonDisplay {...{ lat: this.state.lat, long: this.state.long }} />
        </div>
      );
    }
    return <Spinner {...{ message: '....waiting for user\'s respond' }} />;
  }
}
export default App;

export interface GeoLocationModel {
  lat: number;
  long: number;
}

export interface SpinnerModel {
  message?: string;
}
