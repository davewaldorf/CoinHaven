import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import CreditCard from "./CreditCard";
import { TransactionContext } from "../context/TransactionContext";
import  Loader  from "./Loader";

const Welcome = () => {
  const { register, handleSubmit, watch, reset} = useForm();
  const { connectWallet, currentAccount, handleChange, formData, sendTransaction, isLoading } = useContext(TransactionContext);

  useEffect(() => {
    const subscription = watch((values) => {
      handleChange(values, ""); 
    });

    return () => subscription.unsubscribe();
  }, [watch, handleChange]);

  const onSubmit = () => {
      const { addressTo, amount, keyword, message } = formData;
      
      if (!addressTo || !amount || !keyword || !message) return alert("Please fill out all fields");

      sendTransaction();
      reset();
  }

  return (
    <div className="hero min-h-screen p-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {currentAccount &&
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl items-center">
          <CreditCard />
          <div className="card-body">
            <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
              <input className="input input-ghost input-primary w-full max-w-xs mb-4" placeholder="Address To"
                {...register("addressTo", { required: true })} />
              <input className="input input-ghost input-primary w-full max-w-xs mb-4" placeholder="Amount (ETH)"
                {...register("amount", { required: true })} />
              <input className="input input-ghost input-primary mb-4" placeholder="Keyword (Gif)"
                {...register("keyword", { required: true })} />
              <input className="input input-ghost input-primary mb-4" placeholder="Enter Message"
                {...register("message", { required: false })} />
                {isLoading? <Loader />
              :
              <button className="btn btn-wide btn-ghost w-full"
                type="submit"
                onClick={handleSubmit(onSubmit)}
              >
                Send Now</button>}
            </form>
          </div>
        </div>}
        <div className="text-center lg:text-left p-20">
          <h1 className="text-5xl font-bold">Discover CoinHaven</h1>
          <p className="py-6">Send crypto globally, explore the crypto world, and buy/sell effortlessly.
          </p>
          {!currentAccount && <button className="btn btn-wide btn-primary font-bold w-full"
            onClick={connectWallet}>
            Connect Wallet</button>}
          <div className="flex justify-evenly mt-10">
            <div className="badge badge-outline">Reliability</div>
            <div className="badge badge-outline">Security</div>
            <div className="badge badge-outline">Ethereum</div>
          </div>
          <div className="flex justify-evenly mt-5">
            <div className="badge badge-outline">Web 3.0</div>
            <div className="badge badge-outline">Low Fees</div>
            <div className="badge badge-outline">Blockchain</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome