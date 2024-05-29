const getRefreshToken = async (codeResponse: any, saveDetails: any) => {
  console.log(codeResponse);
  try {
    const payload = {
      grant_type: "authorization_code",
      code: codeResponse.code,
      client_id: import.meta.env.VITE_GOOGLE_ID,
      client_secret: import.meta.env.VITE_GOOGLE_SECRET,
      redirect_uri: import.meta.env.VITE_REDIRECT_URL,
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
      client_id: import.meta.env.VITE_GOOGLE_ID,
      client_secret: import.meta.env.VITE_GOOGLE_ID,
    };

    const response = await fetch(`https://oauth2.googleapis.com/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payloadForAccessToken),
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.error) {
        throw new Error(
          `Error: ${errorData.error}. ${errorData.error_description}`
        );
      } else {
        throw new Error("Error getting new access token");
      }
    }

    const responseData = await response.json();
    saveAccessToken(responseData.access_token);
    return responseData.access_token;
  } catch (err) {
    console.log("Error getting new access token:", err);
    throw err; // Re-throw the error to be handled by the caller
  }
};

export { getRefreshToken, getNewAccessToken };
