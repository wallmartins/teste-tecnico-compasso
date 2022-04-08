export const getUser = async (token) => {
  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      access_token: token,
      scope: "repo,gist",
      token_type: "bearer",
    },
  });

  const user = await response.json();

  console.log(user);
};
