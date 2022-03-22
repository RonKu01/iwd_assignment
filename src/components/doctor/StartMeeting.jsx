import React, {useEffect, useRef, useState} from "react";
import {MeetingConsumer, MeetingProvider, useMeeting, useParticipant} from "@videosdk.live/react-sdk";
import Axios from "axios";

function StartMeeting() {
    const [token, setToken] = useState(null);
    const [meetingId, setMeetingId] = useState(null);
    const [appointmentId, setAppointmentId] = useState(null);

    const API_BASE_URL = "https://api.zujonow.com";
    const API_AUTH_URL = 'http://localhost:3005';

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

    const getMeetingAndToken = async () => {
        const token = await getToken();
        const meetingId = await createMeeting({ token });
        const appointmentId = await getAppointmentId();

        setToken(token);
        setMeetingId(meetingId);
        setAppointmentId(appointmentId);

        await Axios.put("http://localhost:3005/updateMeetingDetails", {
            token: token,
            meetingID : meetingId,
            appointmentID : appointmentId
        })
    };

    const chunk = (arr) => {
        const newArr = [];
        while (arr.length) newArr.push(arr.splice(0, 3));
        return newArr;
    };

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
                meetingId,
                micEnabled: true,
                webcamEnabled: true,
                name: "Doctor",
            }}
            token={token}
        > metingId: {meetingId}
            <MeetingConsumer>
                {() => <MeetingGrid />}
            </MeetingConsumer>
        </MeetingProvider>
    ) : (
        <JoinScreen />
    );
}

export default StartMeeting;