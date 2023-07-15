import ServiceCard from "./ServiceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";

const Services = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gradient-bg-services">
      <div className="text-center items-center justify-center">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
          Services That We
          <br />
          Continue To Improve
        </h1>
        <p className="my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between md:p-20 gap-5">
        <ServiceCard
          color="bg-primary"
          title="Security gurantee"
          icon={<FontAwesomeIcon icon={faShield} size='2xl' beatFade style={{color: "#E25AB3",}} />}
          subtitle="Security is Guranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-secondary"
          title="Best exchange rates"
          icon={<FontAwesomeIcon icon={faEthereum} beatFade size="2xl" style={{color: "#359ff1",}} />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-accent"
          title="Fastest transactions"
          icon={<FontAwesomeIcon icon={faMoneyBillTransfer} beatFade size="2xl" style={{color: "#f1c310",}} />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
      </div>
    </div>
  )
}

export default Services
