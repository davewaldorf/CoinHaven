const shortenAddress = (address, chars = 4) => {
  return `${address.slice(0, 6) + "..." + address.slice(-chars)}`
}

export default shortenAddress;