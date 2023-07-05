import { useForm } from "react-hook-form";
import CreditCard from "./CreditCard";


const Welcome = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  return (
    <div className="hero min-h-screen p-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <CreditCard/>
          <div className="card-body gap-4">
          <input className="input input-ghost input-primary w-full max-w-xs" placeholder="Address To" {...register("addressTo", { required: true })} />
          <input className="input input-ghost input-primary w-full max-w-xs" placeholder="Amount" {...register("amount", { required: true })} />
          <input className="input input-ghost input-primary" placeholder="Keyword" {...register("keyword", { required: true })} />
          <input className="input input-ghost input-primary" placeholder="Message" {...register("message", { required: true })} />
          <button className="btn btn-wide btn-ghost w-full">Send Now</button> 
          </div>
        </div>
        <div className="text-center lg:text-left p-20">
          <h1 className="text-5xl font-bold">Discover CoinHaven:</h1>
          <p className="py-6">Send crypto globally, explore the crypto world, and buy/sell effortlessly.
          </p>
          <button className="btn btn-wide btn-primary font-bold w-full">Connect Wallet</button>
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