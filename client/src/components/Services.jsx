import ServiceCard from "./ServiceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

const Services = () => {

  const serviceCards = [
    {
      title: 'Security Guarantee',
      icon: <FontAwesomeIcon beatFade icon={faShield} size="2x" style={{ color: '#E25AB3' }} />,
      subtitle:
        'Security is guaranteed. We always prioritize privacy and maintain the quality of our products.',
    },
    {
      title: 'Competitive Exchange Rates',
      icon: <FontAwesomeIcon beatFade icon={faEthereum} size="2x" style={{ color: '#359ff1' }} />,
      subtitle:
        'Enjoy the best exchange rates in the market. We ensure security and maintain the quality of our products.',
    },
    {
      title: 'Fast Transactions',
      icon: <FontAwesomeIcon beatFade icon={faMoneyBillTransfer} size="2x" style={{ color: '#f1c310' }} />,
      subtitle:
        'Experience lightning-fast transactions. We prioritize security and maintain the quality of our products.',
    },
  ];

  return (
    <div className="flex flex-col flex-wrap w-full justify-center items-center p-20" id="Services">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center font-bold text-white text-3xl sm:text-5xl py-2 text-gradient uppercase">
          Services that we
          <br />
          continue to improve
        </h1>
        <p className="text-center text-white font-light md:w-9/12 w-11/12 py-2 text-base">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer.
        </p>
      </div>
      <div
        className="flex md:flex-row flex-col md:p-10 gap-10 items-center justify-center"
      >
        {serviceCards.map((service, index) => (
            <ServiceCard key={index} title={service.title} icon={service.icon} subtitle={service.subtitle} />
        ))}
      </div>
    </div>
  )
}

export default Services
