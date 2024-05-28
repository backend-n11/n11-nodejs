
export const getMeController = (req, res) => {
  const { user } = req
  console.log(user)

  res.send("ok")
}
