import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {

    componentDidMount() {
        this.getMyLocation();
    }

    getMyLocation() {
        const location = window.navigator && window.navigator.geolocation

        if (location) {
            location.getCurrentPosition((position) => {
                this.setState({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                }, () => {
                    this.doFetch();
                });
            }, (error) => {
                this.setState({
                    lat: 41.8844497,
                    lng: -87.6398351
                }, () => {
                    this.doFetch();
                });
            })
        }
    }

    async doFetch() {
        let geosource = {
            "origin": {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-87.64344012, 41.88919476]
                },
                "properties": {
                    "name": "Blommer Chocolate"
                }
            },
            "target": {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [this.state.lng, this.state.lat]
                },
                "properties": {
                    "name": "Solstice"
                }
            }
        };

        fetch('/geojson', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(geosource)
        })
            .then(response => {
                return response.json();
            })
            .then(jsonData => {
                return JSON.stringify(jsonData)
            })
            .then(jsonStr => {
                this.props.history.push({
                    pathname: '/results',
                    state: { response: jsonStr }
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="loading-container">
                Loading...
            </div>
        );
    }
}

export default Loading;