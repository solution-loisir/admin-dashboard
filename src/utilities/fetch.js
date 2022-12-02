export const fetchData = async (functionPath) => {
  const token = netlifyIdentity.currentUser() ? await netlifyIdentity.currentUser().jwt(true) : false;
  return await fetch(functionPath, {
    headers: {
      "Authorization": `Bearer ${token}` // user.token.access_token
    }
  })
    .then(resp => resp.json())
    .catch(error => console.error(error));
}