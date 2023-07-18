import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import CreditCard from "./CreditCard";
import { TransactionContext } from "../context/TransactionContext";
import Loader from "./Loader";
import 'animate.css';

const Welcome = () => {
  const { register, handleSubmit, watch, reset } = useForm();
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
    <div className="hero min-h-screen p-20 w-full" id="Wallet">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {currentAccount &&
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl items-center animate__animated animate__fadeInRight">
            <CreditCard />
            <div className="card-body">
              <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
                <input className="input input-ghost input-bordered w-full max-w-xs mb-4" placeholder="Address To"
                  {...register("addressTo", { required: true })} />
                <input className="input input-ghost input-bordered w-full max-w-xs mb-4" placeholder="Amount (ETH)"
                  {...register("amount", { required: true })} />
                <input className="input input-ghost input-bordered mb-4" placeholder="Keyword (Gif)"
                  {...register("keyword", { required: true })} />
                <input className="input input-ghost input-bordered mb-4" placeholder="Enter Message"
                  {...register("message", { required: false })} />
                {isLoading ? <Loader />
                  :
                  <button className="btn btn-wide btn-ghost w-full"
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Send Now</button>}
              </form>
            </div>
          </div>}
        <div className="text-center lg:text-left p-20 animate__animated animate__fadeInLeft">
          <h1 className="text-5xl font-bold">Discover CoinHaven</h1>
          <p className="py-6">
            Uncover the realm of digital currencies, effortlessly send and receive ETH, and embark on a journey of seamless transactions within our crypto wallet.          </p>
          {!currentAccount && <button className="text-white btn btn-wide btn-primary font-bold w-full"
              onClick={connectWallet}>
              Connect Wallet</button>}
          <div className="flex justify-evenly mt-10">
            <div className="badge badge-m badge-outline p-4">Reliability</div>
            <div className="badge badge-m badge-outline p-4">Security</div>
            <div className="badge badge-m badge-outline p-4">Ethereum</div>
          </div>
          <div className="flex justify-evenly mt-5">
            <div className="badge badge-m badge-outline p-4">Web 3.0</div>
            <div className="badge badge-m badge-outline p-4">Low Fees</div>
            <div className="badge badge-m badge-outline p-4">Blockchain</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome