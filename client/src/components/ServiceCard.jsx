const ServiceCard = ({ color, title, icon, subtitle }) => {
  return (
    <div className={`card w-96 ${color} glass mt-10 p-0`}>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{subtitle}</p>
    <div className="card-actions justify-start">
      {icon}
    </div>
  </div>
</div>
  )
}

export default ServiceCard