export const getDate = (unixTimestamp) => {
  const milliseconds = unixTimestamp * 1000
  const dateObject = new Date(milliseconds)
  const humanDateFormat = dateObject.toLocaleDateString('en-GB')
  return humanDateFormat
}
