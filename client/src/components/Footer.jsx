const footerItems = ["Wallet", "Services", "Transactions"];

const Footer = () => {
  return (
    <footer className="footer w-full footer-center flex flex-col items-center justify-center p-10 text-base-content">
      <div className="flex">
        {footerItems.map((item, index) => (
          <a key={item + index} className="link link-hover" href={`#${item}`}>{item}</a>
        ))}
      </div>
      <div>
        <div>
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