import ServiceCard from "./ServiceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

const Services = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gradient-bg-services p-20" id="Services">
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
      <div className="flex md:flex-row flex-col md:p-10 gap-10 items-center justify-center">
        <ServiceCard
          title="Security Gurantee"
          icon={<FontAwesomeIcon icon={faShield} size='2xl' beatFade style={{color: "#E25AB3",}} />}
          subtitle="Security is guaranteed. We always prioritize privacy and maintain the quality of our products."
        />
        <ServiceCard
          title="Competitive Exchange Rates"
          icon={<FontAwesomeIcon icon={faEthereum} beatFade size="2xl" style={{color: "#359ff1",}} />}
          subtitle="Enjoy the best exchange rates in the market. We ensure security and maintain the quality of our products."
        />
        <ServiceCard
          title="Fast Transactions"
          icon={<FontAwesomeIcon icon={faMoneyBillTransfer} beatFade size="2xl" style={{color: "#f1c310",}} />}
          subtitle="Experience lightning-fast transactions. We prioritize security and maintain the quality of our products."
        />
      </div>
    </div>
  )
}

export default Services
