import { Link } from 'react-router-dom';

export const ButtonComponent = ({
  Icon,
  value,
  onClick,
  type = '',
  className = '',
  link = false,
  id,
}) => {
  const button = (
    <button
      className={className}
      onClick={onClick}
      type={type}
    >
      <i>
        <Icon />
      </i>
      <span>{value}</span>
    </button>
  );

  const buttonLink = <Link to={`/pokemon/${id}`}>{button}</Link>;

  return link ? buttonLink : button;
};
