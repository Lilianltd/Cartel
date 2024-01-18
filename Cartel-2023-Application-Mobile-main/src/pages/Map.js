
import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar/Navbar";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import "./Map.css";
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';






export default function Map(props) {
    const places = JSON.parse(localStorage.getItem('places'));
    let selectedDiv = 0;
    const mapRef = React.useRef();
    const slideRef = React.useRef();
    const [userPosition, setUserPosition] = useState({lat: null, lng: null});

    useEffect(() => {
        if (mapRef.panTo) {
            mapRef.panTo({ lat: places[selectedDiv].latitude, lng: places[selectedDiv].longitude });
        }
    }, [selectedDiv]);

    const getSpecialMarker = (id) => {
        // HARDCODE BECAUSE CLIENT NEED THIS ONE WEEK BEFORE DEADLINE PLZ FIXME
        if (id === 10 || id === 12 || id === 9) {
            return '/event-marker.png';
        }
        else if (id === 11) {
            return '/food_marker.png';
        }
        else {
            return '/sport_marker.png';
        }
    }
    const MapWithAMarker = withScriptjs(withGoogleMap(() =>
        <GoogleMap
            ref={mapRef}
            zoom={13}
            center={{lat: 44.12877, lng: 4.09550}}
            options={{ disableDefaultUI: true, styles: [{"featureType": "poi", "elementType": "labels", "stylers": [{"visibility": "off"}]}]}}
        >
            {places.map(place => (
                <Marker
                    key={place.id}
                    icon={{url: (place.isHotel ? '/home_marker.png' : getSpecialMarker(place.id)), scaledSize: new window.google.maps.Size(40, 40)}}
                    position={{ lat: place.latitude, lng: place.longitude }}
                    onClick={() => selectDiv(place)}
                />
            ))}
            {userPosition.lat !== null &&  userPosition.lng !== null ?
                <Marker icon={{url:"/user_marker.png", scaledSize: new window.google.maps.Size(20, 20)}} position={{ lat: userPosition.lat, lng: userPosition.lng }}/> : ''}
        </GoogleMap>
    ));


    const selectDiv = (place) => {
        mapRef.current.panTo({ lat: place.latitude, lng: place.longitude });
        slideRef.current.changeIndex(places.indexOf(place));

    }


    const handleChangeIndex = index => {
        selectDiv(places[mod(index, places.length)])
    }

    const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));
    function slideRenderer(params) {
        const { index, key } = params;

        let currentPlace = places[mod(index, places.length)]
        return (
            <div key={key} className={"flex h-full justify-center"}>
                <div className={"swipe-item h-full w-full bg-secondary rounded-md p-1"}>
                    <div className={"bg-white select-none flex h-full rounded-md w-32 justify-center items-center"}><p>{currentPlace.name}</p></div>
                    <div className={"h-full flex select-none justify-center items-center text-white text-sm px-2"}><p>{currentPlace.address}</p></div>
                    <a href={(userPosition.lat !== null ?
                        "https://www.google.com/maps/dir/" + userPosition.lat + ',' + userPosition.lng + '/' + currentPlace.address :
                        "https://www.google.com/maps/place/" +currentPlace.address)}
                       rel="noreferrer" target={"_blank"} className={"h-8 w-8"}>
                        <img alt="maps" src={"/google-maps.png"}></img>
                    </a>
                </div>
            </div>

        )
    }
    class DemoVirtualize extends React.Component {
        state = {
            index: 0,
        };

        handleChangeIndexx = index => {
            this.setState({
                index,

            });
            handleChangeIndex(index)
        };

        changeIndex = inddex => {
            this.setState({
                index: inddex,
            });
        };

        render() {
            return (
                    <VirtualizeSwipeableViews
                        index={this.state.index}
                        onChangeIndex={this.handleChangeIndexx}
                        slideRenderer={slideRenderer}
                        className={"slide-view"}
                    />
            );
        }
    }
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                if(userPosition.lat == null && userPosition.lng == null){
                    setUserPosition({lat: position.coords.latitude, lng: position.coords.longitude})
                }
            },
            function(error) {
                console.error("Error Code = " + error.code + " - " + error.message);
            }

        );
    });

    return (
        <>
            <div className={"sticky flex flex-col top-0 left-0 right-0 bg-primary rounded-b-2xl pb-4"}>
                <div className={"grid grid-flow-col bg-primary mt-3 "}>
                    <img src={"/logo_cartel_blanc.png"} alt={"eurovia"} className={"ml-1 h-5 justify-self-start self-center"}/>
                    <h1 className={"font-bold text-lg select-none text-white justify-self-center self-center my-2"}>Plan</h1>
                    <img src={"/logo_cartel_blanc.png"} alt={"eurovia"} className={"h-5 justify-self-end invisible self-center"}/>
                </div>
            </div>
            
            <div className={"flex flex-col justify-center bg-blue h-full"}>
                <MapWithAMarker
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCHChZvja2U8wykY9cm6f0j5o0Fy7naC4M"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                {/*<VirtualizeSwipeableViews ref={slideRef} onChangeIndex={handleChangeIndex} slideRenderer={slideRenderer} className={"slide-view"}/>*/}
                <DemoVirtualize ref={slideRef}/>
            </div>
            <Navbar index={props.index} onNavbarChange={props.onNavbarChange}/>


        </>

    )
}

