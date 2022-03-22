import React, {useEffect, useRef, useState} from "react";
import {MeetingProvider, useConnection, useMeeting, useParticipant, usePubSub,} from "@videosdk.live/react-sdk";
import {getToken} from "../../api";

import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import {JoiningScreen} from "./JoiningScreen";
import Axios from "axios";

const primary = "#3E84F6";
const width = 400;
const borderRadius = 8;

const chunk = (arr) => {
    const newArr = [];
    while (arr.length) newArr.push(arr.splice(0, 3));
    return newArr;
};

function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
}
const Title = ({ title, dark }) => {
    return <h2 style={{ color: dark ? primary : "#fff" }}>{title}</h2>;
};
const MessageList = ({ messages }) => {
    return (
        <div>
            {messages?.map((message, i) => {
                const { senderName, message: text, timestamp } = message;

                return (
                    <div
                        style={{
                            margin: 8,
                            backgroundColor: "darkblue",
                            borderRadius: 8,
                            overflow: "hidden",
                            padding: 8,
                            color: "#fff",
                        }}
                        key={i}
                    >
                        <p style={{ margin: 0, padding: 0, fontStyle: "italic" }}>
                            {senderName}
                        </p>
                        <h3 style={{ margin: 0, padding: 0, marginTop: 4 }}>{text}</h3>
                        <p
                            style={{
                                margin: 0,
                                padding: 0,
                                opacity: 0.6,
                                marginTop: 4,
                            }}
                        >
                            {formatAMPM(new Date(timestamp))}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};
const MeetingChat = ({ tollbarHeight }) => {
    const { publish, messages } = usePubSub("CHAT", {});
    const [message, setMessage] = useState("");
    return (
        <div
            style={{
                marginLeft: borderRadius,
                width: 400,
                backgroundColor: primary,
                overflowY: "scroll",
                borderRadius,
                height: `calc(100vh - ${tollbarHeight + 2 * borderRadius}px)`,
                padding: borderRadius,
            }}
        >
            <Title title={"Chat"} />

            <div style={{ display: "flex" }}>
                <input
                    value={message}
                    onChange={(e) => {
                        const v = e.target.value;
                        setMessage(v);
                    }}
                />
                <button
                    className={"button default"}
                    onClick={() => {
                        const m = message;

                        if (m.length) {
                            publish(m, { persist: true });
                            setMessage("");
                        }
                    }}
                >
                    Send
                </button>
            </div>
            <MessageList messages={messages} />
        </div>
    );
};

const ParticipantView = ({ participantId }) => {
    const webcamRef = useRef(null);
    const micRef = useRef(null);
    const screenShareRef = useRef(null);

    const onStreamEnabled = () => {};
    const onStreamDisabled = () => {};

    const {
        displayName,
        webcamStream,
        micStream,
        screenShareStream,
        webcamOn,
        micOn,
        screenShareOn,
        isLocal,
        switchTo,
    } = useParticipant(participantId, {
        onStreamEnabled,
        onStreamDisabled,
    });

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
        <div
            style={{
                width,
                backgroundColor: primary,
                borderRadius: borderRadius,
                overflow: "hidden",
                margin: borderRadius,
                padding: borderRadius,
                display: "flex",
                flex: 1,
                flexDirection: "column",
                position: "relative",
            }}>
            <audio ref={micRef} autoPlay muted={isLocal} />

            <div
                style={{
                    position: "relative",
                    borderRadius: borderRadius,
                    overflow: "hidden",
                    backgroundColor: "pink",
                    width: "100%",
                    height: 300,
                }}
            >
                <div
                    style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
                >
                    <video
                        height={"100%"}
                        width={"100%"}
                        ref={webcamRef}
                        style={{
                            backgroundColor: "black",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            objectFit: "contain",
                        }}
                        autoPlay
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: borderRadius,
                            right: borderRadius,
                        }}
                    >
                        <p
                            style={{
                                color: webcamOn ? "green" : "red",
                                fontSize: 16,
                                fontWeight: "bold",
                                opacity: 1,
                            }}
                        >
                            WEB CAM
                        </p>
                    </div>

                    <div
                        style={{
                            position: "absolute",
                            top: 10,
                            left: 10,
                        }}
                    >
                        <button
                            className="button blue"
                            style={
                                {
                                    // height: 50,
                                    // width: 200,
                                }
                            }
                            onClick={async () => {
                                const meetingId = prompt(
                                    `Please enter meeting id where you want to switch ${displayName}`
                                );
                                const token = await getToken();
                                if (meetingId && token) {
                                    try {
                                        await switchTo({
                                            meetingId,
                                            payload: "Im Switching",
                                            token: token,
                                        });
                                    } catch (e) {
                                        console.log("swithc To Error", e);
                                    }
                                } else {
                                    alert("Empty meetingId!");
                                }
                            }}
                        >
                            Switch Participant
                        </button>
                    </div>
                </div>
            </div>

            <div
                style={{
                    marginTop: borderRadius,
                    position: "relative",
                    borderRadius: borderRadius,
                    overflow: "hidden",
                    backgroundColor: "lightgreen",
                    width: "100%",
                    height: 300,
                }}
            >
                <div
                    style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
                >
                    <video
                        height={"100%"}
                        width={"100%"}
                        ref={screenShareRef}
                        style={{
                            backgroundColor: "black",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            objectFit: "contain",
                        }}
                        autoPlay
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: borderRadius,
                            right: borderRadius,
                        }}
                    >
                        <p
                            style={{
                                color: screenShareOn ? "green" : "red",
                                fontSize: 16,
                                fontWeight: "bold",
                                opacity: 1,
                            }}
                        >
                            SCREEN SHARING
                        </p>
                    </div>
                </div>
            </div>
            <table>
                {[
                    { k: "Name", v: displayName },
                    { k: "webcamOn", v: webcamOn ? "YES" : "NO" },
                    { k: "micOn", v: micOn ? "YES" : "NO" },
                    { k: "screenShareOn", v: screenShareOn ? "YES" : "NO" },
                ].map(({ k, v }) => (
                    <tr key={k}>
                        <td style={{ border: "1px solid #fff", padding: 4 }}>
                            <h3 style={{ margin: 0, padding: 0, color: "#fff" }}>{k}</h3>
                        </td>
                        <td style={{ border: "1px solid #fff", padding: 4 }}>
                            <h3 style={{ margin: 0, padding: 0, color: "#fff" }}>{v}</h3>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
};
const ParticipantsView = () => {
    const { participants } = useMeeting();

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                padding: borderRadius,
            }}
        >
            <Title dark title={"Participants"} />
            {chunk([...participants.keys()]).map((k) => (
                <div style={{ display: "flex" }}>
                    {k.map((l) => (
                        <ParticipantView key={l} participantId={l} />
                    ))}
                </div>
            ))}
        </div>
    );
};

function MeetingView({ onNewMeetingIdToken, onMeetingLeave }) {
    const [participantViewVisible, setParticipantViewVisible] = useState(true);

    const onSpeakerChanged = (activeSpeakerId) => {
        console.log(" onSpeakerChanged", activeSpeakerId);
    };
    function onMainParticipantChanged(participant) {
        console.log(" onMainParticipantChanged", participant);
    }
    function onEntryRequested(participantId, name) {
        console.log(" onEntryRequested", participantId, name);
    }
    function onEntryResponded(participantId, name) {
        console.log(" onEntryResponded", participantId, name);
    }
    function onChatMessage(data) {
        console.log(" onChatMessage", data);
    }
    function onMeetingJoined() {
        console.log("onMeetingJoined");
    }
    function onMeetingLeft() {
        console.log("onMeetingLeft");
        onMeetingLeave();
    }
    const onLiveStreamStarted = (data) => {
        console.log("onLiveStreamStarted example", data);
    };
    const onLiveStreamStopped = (data) => {
        console.log("onLiveStreamStopped example", data);
    };

    const onVideoStateChanged = (data) => {
        console.log("onVideoStateChanged", data);
    };
    const onVideoSeeked = (data) => {
        console.log("onVideoSeeked", data);
    };

    const onWebcamRequested = (data) => {
        console.log("onWebcamRequested", data);
    };
    const onMicRequested = (data) => {
        console.log("onMicRequested", data);
    };
    const onPinStateChanged = (data) => {
        console.log("onPinStateChanged", data);
    };

    const {
        meetingId,
        leave,
        toggleMic,
        toggleWebcam,
        toggleScreenShare,
    } = useMeeting({
        onSpeakerChanged,
        onMainParticipantChanged,
        onEntryRequested,
        onEntryResponded,
        onChatMessage,
        onMeetingJoined,
        onMeetingLeft,
        onLiveStreamStarted,
        onLiveStreamStopped,
        onVideoStateChanged,
        onVideoSeeked,
        onWebcamRequested,
        onMicRequested,
        onPinStateChanged,
    });

    const tollbarHeight = 120;

    return (
        <div style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#D6E9FE",
            }} >
            <div style={{ height: tollbarHeight }}>
                <button className={"button red"} onClick={leave}>
                    LEAVE
                </button>
                <button className={"button blue"} onClick={toggleMic}>
                    toggleMic
                </button>
                <button className={"button blue"} onClick={toggleWebcam}>
                    toggleWebcam
                </button>
                <button className={"button blue"} onClick={toggleScreenShare}>
                    toggleScreenShare
                </button>
            </div>
            <h1>Meeting id is : {meetingId}</h1>
            <div style={{ display: "flex", flex: 1 }}>
                <div style={{display: "flex", flexDirection: "column", position: "relative", flex: 1, overflowY: "scroll", height: `calc(100vh - ${tollbarHeight}px)`,}} >
                    {/* <ParticipantsView /> */}
                    {participantViewVisible ? <ParticipantsView /> : <ConnectionsView />}
                </div>
                <MeetingChat tollbarHeight={tollbarHeight} />
            </div>
        </div>
    );
}

function Chat() {
    const [token, setToken] = useState("");
    const [meetingId, setMeetingId] = useState("");
    const [participantName, setParticipantName] = useState("");
    const [micOn, setMicOn] = useState(false);
    const [webcamOn, setWebcamOn] = useState(false);
    const [isMeetingStarted, setMeetingStarted] = useState(false);

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

    return isMeetingStarted ? (
        <MeetingProvider
            config={{
                meetingId,
                micEnabled: micOn,
                webcamEnabled: webcamOn,
                name: participantName ? participantName : "TestUser",
            }}
            token={token}
            reinitialiseMeetingOnConfigChange={true}
            joinWithoutUserInteraction={true}
        >
            <MeetingView
                onNewMeetingIdToken={({ meetingId, token }) => {
                    setMeetingId(meetingId);
                    setToken(token);
                }}
                onMeetingLeave={() => {
                    setToken("");
                    setMeetingId("");
                    setWebcamOn(false);
                    setMicOn(false);
                    setMeetingStarted(false);
                }}
            />
        </MeetingProvider>
    ) : (
        <JoiningScreen
            participantName={participantName}
            setParticipantName={setParticipantName}
            meetinId={meetingId}
            setMeetingId={setMeetingId}
            setToken={setToken}
            setMicOn={setMicOn}
            micOn={micOn}
            webcamOn={webcamOn}
            setWebcamOn={setWebcamOn}
            onClickStartMeeting={() => {
                setMeetingStarted(true);
            }}
            startMeeting={isMeetingStarted}
        />
    );
}

export default Chat;