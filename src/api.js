const API_BASE_URL = "https://api.zujonow.com";
const VIDEOSDK_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI5YzJkOGZlZi0zZmZkLTQ5NGMtYWEwNi04ZjlkM2M5ZGRiN2EiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY0NzE0NzgxNSwiZXhwIjoxNjQ3NzUyNjE1fQ.JCf6k1FeBaEinTrm6AQlfIGUgjddhWWoLS93-HQOUh8";

const API_AUTH_URL = process.env.REACT_APP_AUTH_URL;

export const getToken = async () => {
  if(VIDEOSDK_TOKEN && API_AUTH_URL){
    console.error("Error: Provide only ONE PARAMETER - either Token or Auth API");
  }else if(VIDEOSDK_TOKEN){
    return VIDEOSDK_TOKEN;
  }else if(API_AUTH_URL){
    const res = await fetch(`${API_AUTH_URL}/get-token`, {
      method: "GET",
    });
    const { token } = await res.json();
    return token;
  }else{
    console.error("Error: ", Error("Please add a token or Auth Server URL"));
  }
};

export const createMeeting = async ({ token }) => {
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

export const validateMeeting = async ({ meetingId, token }) => {
  const url = `${API_BASE_URL}/api/meetings/${meetingId}`;
  const options = {
    method: "POST",
    headers: { Authorization: token },
  };

  const result = await fetch(url, options)
      .then((response) => response.json()) //result will have meeting id
      .catch((error) => console.error("error", error));

  return result? result.meetingId === meetingId :false;
};