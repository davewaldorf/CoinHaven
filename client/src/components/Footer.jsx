const footerItems = ["Market", "Exchange", "Tutorials", "Wallets"];

const Footer = () => {
  return (
<footer className="footer footer-center p-10 bg-base-200 text-base-content rounded gradient-bg-footer">
  <div className="grid grid-flow-col gap-4">
    {footerItems.map((item, index) => (
       <a key={item + index} className="link link-hover">{item}</a>
    ))}
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">
    <a className="btn btn-ghost normal-case text-xl" href="#home">CoinHaven</a>
    </div>
  </div> 
  <div>
    <p>CoinHaven is a decentralized application that allows users to send and receive cryptocurrency.</p>
    <p>Copyright © 2023 - All right reserved by Dave Waldorf</p>
  </div>
</footer>
  )
}

export default Footer