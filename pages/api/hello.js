async function handler(req, res) {
  const data = await fetch( "https://reqres.in/api/users/2");
  const result = await data.json();
  res.status(200).json({ id: result.data });
}

export default handler;
