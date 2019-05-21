import React, { Component } from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';
import Marker from './marker';
import Circle from './circle';
import Config from '../infrastructure/config';

// class Map extends Component<any, any> {
//     private map: React.RefObject<GoogleMap>

//     constructor(props: any) {
//         super(props)

//         this.map = React.createRef()
//     }

//     onZoomChanged = () => {
//         //[ts] Property 'getZoom' does not exist on type 'RefObject<GoogleMap>'
//         const zoom = this.map.getZoom()

//         alert(zoom)
//     }

//     render() {
//         const markers =
//             this.props.markers !== null
//                 ? this.props.markers.map((marker: any, index: number) => (
//                       <Marker
//                           key={index}
//                           location={{ lat: marker.lat, lng: marker.lng }}
//                           info={marker.info}
//                           showInfo={marker.showInfo}
//                           index={index}
//                           toggleInfo={this.props.toggleInfo}
//                       />
//                   ))
//                 : null

//         const circles =
//             this.props.circles !== null
//                 ? this.props.circles.map((circle: any, index: number) => (
//                       <Circle key={index} center={{ lat: circle.lat, lng: circle.lng }} radius={this.props.radius} />
//                   ))
//                 : null

//         let center = null

//         if (this.props.location !== null) {
//             center = { lat: this.props.location.lat, lng: this.props.location.lng }
//         } else {
//             center = { lat: Config.googleDefaultLat, lng: Config.googleDefaultLng }
//         }

//         const contents = []

//         if (markers !== null) {
//             contents.push(markers)
//         }

//         if (circles !== null) {
//             contents.push(circles)
//         }

//         return (
//             <GoogleMap ref={this.map} zoom={this.props.zoom} center={center} onClick={this.props.onClick} onZoomChanged={this.onZoomChanged}>
//                 {contents.map(c => {
//                     return c
//                 })}
//             </GoogleMap>
//         )
//     }
// }

// export default withScriptjs(withGoogleMap(Map))
