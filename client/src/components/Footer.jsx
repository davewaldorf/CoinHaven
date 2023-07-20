const footerItems = ["Wallet", "Services", "Transactions"];

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 text-base-content rounded gradient-bg-footer">
      <div className="grid grid-flow-col gap-4">
        {footerItems.map((item, index) => (
          <a key={item + index} className="link link-hover" href={`#${item}`}>{item}</a>
        ))}
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <div className='text-primary font-bold text-2xl lg:text-3xl ml-5'>
            <span className='text-secondary'>Coin</span>
            Heaven
          </div>
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