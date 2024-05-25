import axios from "axios";

const getRefreshToken = (codeResponse: any, saveDetails: any) => {
  // get refresh token using authorization code

  let payload = {
    grant_type: "authorization_code",
    code: codeResponse.code,
    client_id:
      "208352236758-jrhfoq6pgbavamflkaiu5hijf1fbo7nb.apps.googleusercontent.com",
    client_secret: "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",
    redirect_uri: "http://localhost:3000",
  };

  axios
    .post(`https://oauth2.googleapis.com/token`, payload, {
      headers: {
        "Content-Type": "application/json;",
      },
    })
    .then((res: any) => {
      return res.data;
    })
    .then((response: any) => {
      //   setEmailUser(response);
      // dispatch(setRefreshToken(response));
      //   localStorage.setItem("refresh_token", JSON.stringify(response));
      saveDetails(response);
      return response;
    })
    .catch((err) => console.log("err: ", err));
};

const getNewAccessToken = (refresh_token: any, saveAccessToken: any) => {
  // get new access token using refresh token
  console.log("called");
  let payloadForAccessToken = {
    grant_type: "refresh_token",
    refresh_token: refresh_token,
    client_id:
      "208352236758-jrhfoq6pgbavamflkaiu5hijf1fbo7nb.apps.googleusercontent.com",
    client_secret: "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",
  };

  axios
    .post(`https://oauth2.googleapis.com/token`, payloadForAccessToken, {
      headers: {
        "Content-Type": "application/json;",
      },
    })
    .then((res: any) => {
      return res.data;
    })
    .then((res) => {
      saveAccessToken(res.access_token);
      return res;
    })
    .catch((err) => console.log("err: ", err));
};

export { getRefreshToken, getNewAccessToken };
