import axios from "axios";

const getRefreshToken = async (codeResponse: any, saveDetails: any) => {
  console.log(codeResponse);
  try {
    const payload = {
      grant_type: "authorization_code",
      code: codeResponse.code,
      client_id:
        "208352236758-jrhfoq6pgbavamflkaiu5hijf1fbo7nb.apps.googleusercontent.com",
      client_secret: "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",
      redirect_uri: "http://localhost:3000",
    };

    const response = await fetch(`https://oauth2.googleapis.com/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Error getting refresh token");
    }
    const responseData = await response.json();
    saveDetails(responseData);
    return responseData;
  } catch (err) {
    console.log("Error getting refresh token:", err);
    throw err; // Re-throw the error to be handled by the caller
  }
};

const getNewAccessToken = async (
  tokenCredentials: any,
  saveAccessToken: any
) => {
  try {
    console.log(tokenCredentials.refresh_token);
    const payloadForAccessToken = {
      grant_type: "refresh_token",
      refresh_token: tokenCredentials.refresh_token,
      client_id:
        "208352236758-jrhfoq6pgbavamflkaiu5hijf1fbo7nb.apps.googleusercontent.com",
      client_secret: "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",
    };

    const response = await axios.post(
      `https://oauth2.googleapis.com/token`,
      payloadForAccessToken,
      {
        headers: {
          "Content-Type": "application/json;",
        },
      }
    );

    saveAccessToken(response.data.access_token);
    return response.data.access_token;
  } catch (err: any) {
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("Error response data:", err.response.data);
      console.log("Error response status:", err.response.status);
      console.log("Error response headers:", err.response.headers);
    } else if (err.request) {
      // The request was made but no response was received
      console.log("Error request data:", err.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error message:", err.message);
    }
    console.log("Error config:", err.config);
    throw err; // Re-throw the error to be handled by the caller
  }
  // console.log("Error getting new access token:", err);
  // throw err; // Re-throw the error to be handled by the caller
};

export { getRefreshToken, getNewAccessToken };
