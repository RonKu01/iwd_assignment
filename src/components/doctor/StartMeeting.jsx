import React, {useEffect, useRef, useState} from "react";
import {MeetingConsumer, MeetingProvider, useMeeting, useParticipant} from "@videosdk.live/react-sdk";
import Axios from "axios";

function StartMeeting() {

    const [docLoginID, setLoginID] = useState("");
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

    const [appointmentId, setAppointmentId] = useState("");
    useEffect(() => {
        Axios.get("http://localhost:3005/getMeetingDetails").then((response) => {
            setAppointmentId(response.data.appointmentId)
        });
    },[]);

    const [token, setToken] = useState("");
    const [meetingId, setMeetingId] = useState("");

    const getMeetingAndToken = () => {
        Axios.post("http://localhost:3005/getMeetingDetails", {
            docLoginID: docLoginID,
            appointmentId: appointmentId,
        }).then((response)=>{
            setToken(response.data[0].token);
            setMeetingId(response.data[0].meetingID);
        });
    };

    const chunk = (arr) => {
        const newArr = [];
        while (arr.length) newArr.push(arr.splice(0, 3));
        return newArr;
    };

    function MeetingGrid() {
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

        return (
            <div>
                {joined ?
                    (
                        <div >
                            <button  onClick={leave}>
                                Leave
                            </button>
                            <button  onClick={toggleMic}>
                                toggleMic
                            </button>
                            <button  onClick={toggleWebcam}>
                                toggleWebcam
                            </button>
                            <button  onClick={toggleScreenShare}>
                                toggleScreenShare
                            </button>
                        </div>
                    )
                    : (<button  onClick={joinMeeting}>
                        Join
                    </button>)}
                <div
                    className="wrapper"
                >
                    {chunk([...participants.keys()]).map((k) => (
                        <div className="box" key={k} style={{ display: "flex" }}>
                            {k.map((l) => (
                                <ParticipantView key={l} participantId={l} />
                            ))}
                        </div>
                    ))}
                </div>

            </div>
        )
    }

    function JoinScreen() {
        return (
            <div>
                <input type="text" placeholder="Enter Meeting Id" onChange={(e) => {setMeetingId(e.target.value)}}  />
                <button  onClick={getMeetingAndToken}>
                    Join
                </button>
                <button  onClick={getMeetingAndToken}>
                    Create Meeting
                </button>
            </div>
        )
    }

    function ParticipantView(props){
        const webcamRef = useRef(null);
        const micRef = useRef(null);
        const screenShareRef = useRef(null);

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
            <div key={props.participantId} >
                <audio ref={micRef} autoPlay />
                {webcamRef ||  micOn ? (<div>
                    <h2>{displayName}</h2>
                    <video
                        height={"100%"}
                        width={"100%"}
                        ref={webcamRef}
                        autoPlay
                    />
                </div>) : null }
                {screenShareOn ? (
                    <div>
                        <h2>Screen Shared</h2>
                        <video
                            height={"100%"}
                            width={"100%"}
                            ref={screenShareRef}
                            autoPlay
                        />
                    </div>) : null }
                <br/>
                <span>Mic:{micOn ? "Yes": "No"}, Camera: {webcamOn ? "Yes" : "No"}, Screen Share: {screenShareOn ? "Yes" : "No"}</span>
            </div>
        );

    }

    useEffect(getMeetingAndToken, []);
    return token && meetingId ? (
        <MeetingProvider
            config={{
                meetingId: meetingId,
                micEnabled: true,
                webcamEnabled: true,
                name: "Doctor",
            }}
            token={token}
        >
            <MeetingConsumer>
                {() => <MeetingGrid />}
            </MeetingConsumer>
        </MeetingProvider>
    ) : (
        <JoinScreen />
    );
}

export default StartMeeting;