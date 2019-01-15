import React, { Component } from 'react';
import './Results.css';

import { Map, Polygon, Marker, GoogleApiWrapper } from 'google-maps-react';

class Results extends Component {

    constructor() {
        super();

        this.state = {
            origin: {
                lat: 0,
                lng: 0,
            },
            target: {
                lat: 0,
                lng: 0
            },
            downwindPolygon: [],
            result: false
        }
    }

    componentDidMount() {
        let json = JSON.parse(this.props.location.state.response);
        if (json.target) {
            this.setState({
                target: {
                    lng: json.target[0],
                    lat: json.target[1]
                }
            });
            this.setState({
                origin: {
                    lng: json.origin[0],
                    lat: json.origin[1]
                }
            });
            this.setState({ result: json.downwind })

            var downwindPolygon = [];
            json.downwind_polygon.map(coordinate => {
                downwindPolygon.push({
                    lng: coordinate[0],
                    lat: coordinate[1]
                });
                return downwindPolygon;
            });

            this.setState({ downwindPolygon: downwindPolygon });
        }
    }

    render() {
        return (
            <div className="results-container">
                <div className="results">
                    {(this.state.result) &&
                        <p>YES</p>
                    }
                    {!(this.state.result) &&
                        <p>NO</p>
                    }
                </div>
                <div className="map-container">
                    <Map
                        google={this.props.google}
                        zoom={13}
                        initialCenter={{
                            lat: 0,
                            lng: 0
                        }}
                        center={this.state.target}
                        style={{ width: '100%', height: 'calc(100% - 125px)' }}
                    >
                        <Polygon
                            paths={this.state.downwindPolygon}
                            strokeColor="#0000FF"
                            strokeOpacity={0.8}
                            strokeWeight={2}
                            fillColor="#0000FF"
                            fillOpacity={0.35} />
                        <Marker
                            title={'Blommer'}
                            position={this.state.origin} />
                        <Marker
                            title={'Solstice'}
                            position={this.state.target} />
                    </Map>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
})(Results)