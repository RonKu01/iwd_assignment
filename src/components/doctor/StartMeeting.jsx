import React, {useEffect, useRef, useState} from "react";
import {MeetingConsumer, MeetingProvider, useMeeting, useParticipant} from "@videosdk.live/react-sdk";
import Axios from "axios";
import Navbar from "../navbar/Navbar_Doctor";
import {Card} from "react-bootstrap";
import {Button} from "@material-ui/core";
import "./start_meeting.scss"

function StartMeeting() {
    // Check whether User Already or not. If not, redirect to login page.
    const [loginID, setLoginID] = useState("");
    Axios.defaults.withCredentials = true;
    useEffect(() => {
        Axios.get("http://localhost:3005/login").then((response) => {
            if (response.data.loggedIn === true) {
                setLoginID(response.data.loginID);
            } else {
                window.location.href = "/";
            }
        });
    }, []);

    const [token, setToken] = useState(null);
    const [meetingId, setMeetingId] = useState(null);
    const [appointmentId, setAppointmentId] = useState(null);

    const API_BASE_URL = "https://api.zujonow.com";
    const API_AUTH_URL = 'http://localhost:3005';

    //Function below is to get auto generated appointmentID from API
    const getAppointmentId = async () => {
        if(API_AUTH_URL){
            const res = await fetch(`${API_AUTH_URL}/getMeetingDetails`, {
                method: "GET",
            });
            const { appointmentId } = await res.json();
            return appointmentId;
        }else{
            console.error("Error: ", Error("Please add a token or Auth Server URL"));
        }
    };

    // API call to generate authentication token
    const getToken = async () => {
        if(API_AUTH_URL){
            const res = await fetch(`${API_AUTH_URL}/get-token`, {
                method: "GET",
            });
            const { token } = await res.json();
            return token;
        }else{
            console.error("Error: ", Error("Please add a token or Auth Server URL"));
        }
    };

    // API call to create meeting
    const createMeeting = async ({ token }) => {
        const url = `${API_BASE_URL}/api/meetings`;
        const options = {
            method: "POST",
            headers: { Authorization: token, "Content-Type": "application/json" },
        };

        const { meetingId } = await fetch(url, options)
            .then((response) => response.json())
            .catch((error) => console.error("error", error));

        return meetingId;
    };

    //Function below is to save meetingID & appointmentID into the database, so patient can read the data and join meeting.
    const getMeetingAndToken = async () => {
        const token = await getToken();
        const meetingId = await createMeeting({ token });
        const appointmentId = await getAppointmentId();

        setToken(token);
        setMeetingId(meetingId);
        setAppointmentId(appointmentId);

        await Axios.put("http://localhost:3005/updateMeetingId", {
            token: token,
            meetingID : meetingId,
            appointmentID : appointmentId
        })
    };

    // Helper function for participant loop.
    const chunk = (arr) => {
        const newArr = [];
        while (arr.length) newArr.push(arr.splice(0, 3));
        return newArr;
    };

    //Meeting grid will include whole meeting interface.
    function MeetingGrid(props) {
        const [joined, setJoined] = useState(false)
        const {
            join,
            leave,
            toggleMic,
            toggleWebcam,
            toggleScreenShare
        } = useMeeting()
        const { participants } = useMeeting();
        const joinMeeting = () => {
            setJoined(true)
            join()
        }

        const leftMeeting = () => {
            if (window.confirm("Do you want to leave meeting?") === true) {
                window.location.href = "/add_consultation_summary"
            }
        }

        return (
            <div>
                {joined ?
                    (
                        <div>
                            <button class="btn btn-danger" style={{margin: "0.5%"}} onClick={leftMeeting}>
                                Leave
                            </button>
                            <button class="btn btn-outline-secondary" style={{margin: "0.5%"}} onClick={toggleMic}>
                                Mic
                            </button>
                            <button class="btn btn-outline-secondary" style={{margin: "0.5%"}} onClick={toggleWebcam}>
                                Webcam
                            </button>
                            <button class="btn btn-outline-secondary" style={{margin: "0.5%"}} onClick={toggleScreenShare}>
                                ScreenShare
                            </button>
                        </div>
                    )
                    : (
                        <div>
                            <main>
                                <Navbar />
                                <Card className="card" id="main" style={{backgroundColor: "#ADD8E6"}}>
                                    <Card.Body className="card-body" id="main-body">
                                        <Card.Text className="title-text" id="joinTxt">
                                            <h1 id="joinTxt">Welcome to Meeting!</h1>
                                            <h6>MeetingID : {meetingId} </h6>
                                        </Card.Text>
                                        <div className="pt-lg-3"/>
                                        <Button variant="contained" onClick={joinMeeting} id="joinBtn" >Join Now!</Button>
                                    </Card.Body>
                                </Card>
                            </main>
                        </div>
                    )
                }

                <div className="mb-2">&nbsp;</div>
                <div className="wrapper" style={{margin: "0.5%"}}>
                    {chunk([...participants.keys()]).map((k) => (
                        <div className="box" key={k} >
                            {k.map((l) => (
                                <ParticipantView key={l} participantId={l} />
                            ))}
                        </div>
                    ))}
                </div>

            </div>
        )
    }

    //JoinScreen Component
    function JoinScreen() {
        return (
            <div className="body-container">
                <Navbar />
                <main>
                    <Card className="card" id="main">
                        <Card.Body className="card-body" id="main-body">
                            <Card.Text className="title-text">
                                Preparing Meeting..... Please Wait!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </main>
            </div>
        )
    }

    //ParticipantView Component
    function ParticipantView(props){
        const webcamRef = useRef(null);
        const micRef = useRef(null);
        const screenShareRef = useRef(null);

        //useParticipant hook will help you to handle mic, webcam and screen share.
        const {
            displayName,
            webcamStream,
            micStream,
            screenShareStream,
            webcamOn,
            micOn,
            screenShareOn
        } = useParticipant(props.participantId);

        useEffect(() => {
            if (webcamRef.current) {
                if (webcamOn) {
                    const mediaStream = new MediaStream();
                    mediaStream.addTrack(webcamStream.track);

                    webcamRef.current.srcObject = mediaStream;
                    webcamRef.current
                        .play()
                        .catch((error) =>
                            console.error("videoElem.current.play() failed", error)
                        );
                } else {
                    webcamRef.current.srcObject = null;
                }
            }
        }, [webcamStream, webcamOn]);

        useEffect(() => {
            if (micRef.current) {
                if (micOn) {
                    const mediaStream = new MediaStream();
                    mediaStream.addTrack(micStream.track);

                    micRef.current.srcObject = mediaStream;
                    micRef.current
                        .play()
                        .catch((error) =>
                            console.error("videoElem.current.play() failed", error)
                        );
                } else {
                    micRef.current.srcObject = null;
                }
            }
        }, [micStream, micOn]);

        useEffect(() => {
            if (screenShareRef.current) {
                if (screenShareOn) {
                    const mediaStream = new MediaStream();
                    mediaStream.addTrack(screenShareStream.track);

                    screenShareRef.current.srcObject = mediaStream;
                    screenShareRef.current
                        .play()
                        .catch((error) =>
                            console.error("videoElem.current.play() failed", error)
                        );
                } else {
                    screenShareRef.current.srcObject = null;
                }
            }
        }, [screenShareStream, screenShareOn]);

        return (
            <div key={props.participantId} className="view" >
                <audio ref={micRef} autoPlay />
                {webcamRef ||  micOn ? (<div>
                    <h2>{displayName}</h2>
                    <video
                        className= "video"
                        ref={webcamRef}
                        autoPlay
                    />
                </div>) : null }
                {screenShareOn ? (
                    <div>
                        <h2>Screen Shared</h2>
                        <video
                            className= "sshare"
                            ref={screenShareRef}
                            autoPlay
                        />
                    </div>) : null }
                <br/>
                <span>Mic:{micOn ? "Yes": "No"} <br /> Camera: {webcamOn ? "Yes" : "No"}  <br />Screen Share: {screenShareOn ? "Yes" : "No"}</span>
            </div>
        );
    }

    useEffect(getMeetingAndToken, []);
    return token && meetingId ? (
        <MeetingProvider config={{meetingId, micEnabled: true, webcamEnabled: true, name: "Doctor",}} token={token}>
            <MeetingConsumer>
                {() => <MeetingGrid />}
            </MeetingConsumer>
        </MeetingProvider>
    ) : (
        <JoinScreen />
    );
}

export default StartMeeting;