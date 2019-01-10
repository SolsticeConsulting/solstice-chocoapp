import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {

    async doFetch() {
        console.log("Do Fetch");
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
                    "coordinates": [-87.66229762,41.88446248]
                    // "coordinates": [-87.63977033, 41.88383873]
                },
                "properties": {
                    "name": "Solstice"
                }
            }
        };

        /*
        fetch('http://www.solstice.com', {
            method: 'GET',
            mode: 'no-cors'
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        */

        let data = new FormData();
        data.append( "json", JSON.stringify( geosource ) );


        fetch('http://10.10.105.77:3000/geojson', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: data
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    componentDidMount() {
        this.doFetch();

        /*
        let that = this;

        setTimeout(function() {
            that.props.history.push('/results');
        },2000);
        */
    }

    render() {
        return (
            <div className="loading-container">
                I am loading
            </div>
        );
    }
}

export default Loading;