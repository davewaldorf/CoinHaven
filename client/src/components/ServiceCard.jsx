import PropTypes from 'prop-types';

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

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default ServiceCard