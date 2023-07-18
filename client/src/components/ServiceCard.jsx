const ServiceCard = ({ title, icon, subtitle }) => {
  return (
    <div className={`card w-96 glass mt-5`}>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{subtitle}</p>
    <div className="card-actions justify-end">
      {icon}
    </div>
  </div>
</div>
  )
}

export default ServiceCard