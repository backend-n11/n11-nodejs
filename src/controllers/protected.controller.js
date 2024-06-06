
export const protectedController = (req, res) => {
  const { user } = req
  console.log(user)
  res.send("ok")
}
