import { useContext } from 'react';
import Card from 'react-animated-3d-card';
import { TransactionContext } from '../context/TransactionContext';

const CreditCard = () => {
  const { currentAccount } = useContext(TransactionContext);

  if (!currentAccount) return null;  

  return (
    <Card       
      style={{
        background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
        width: '350px',
        height: '200px',
        cursor: 'pointer'
      }}
    > 
         <div>
          <img
            style={{
              position: "absolute",
              left: "25px",
              top: "25px",
              height: "50px"
            }}
            src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
            className="card-item__chip"
            alt="credit card chip"
          ></img>
          <img
            style={{
              position: "absolute",
              right: "15px",
              top: "15px",
              height: "70px"
            }}
            src="../../images/Ethereum-Portrait-Purple-Dark-Logo.wine.svg"
            className="card-item__chip"
            alt="credit card chip"
          ></img>
        </div>
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontFamily: "Fira Code",
              color: "white"
            }}
          >
          </div>
        </div>
        <div>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "60px",
              left: "25px",
              opacity: 0.5
            }}
          >
            Card holder
          </label>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "60px",
              right: "25px",
              opacity: 0.5
            }}
          >
            Expires
          </label>
        </div>

        <div>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "25px",
              left: "25px",
              opacity: 1,
              fontSize: "15px"
            }}
          >
            {currentAccount.slice(0, 6) + "..." + currentAccount.slice(-4)}
          </label>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "25px",
              right: "25px",
              opacity: 1,
              fontSize: "15px"
            }}
          >
            10/22
          </label>
        </div>
</Card>
  )
}

export default CreditCard