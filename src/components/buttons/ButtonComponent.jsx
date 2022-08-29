import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

/**
 * @param {Component} Icon A React Icon Component
 * @param {string} value The button value
 * @param {func} onClick Function for the button behavior
 * @param {string} className Button style class
 * @param {boolean} link Check if the button redirects to other page
 * @param {string} path Path where you want the button to redirect
 * @returns A functional React Component Button
 */

export const ButtonComponent = ({
  Icon,
  value,
  onClick,
  className,
  link,
  path,
}) => {
  const button = (
    <button
      className={className}
      onClick={onClick}
    >
      <i>
        <Icon />
      </i>
      <span>{value}</span>
    </button>
  );

  const buttonLink = <Link to={path}>{button}</Link>;

  return link ? buttonLink : button;
};

ButtonComponent.defaultProps = {
  className: 'button-active',
  link: false,
  value: '',
};

ButtonComponent.propTypes = {
  Icon: Proptypes.func,
  value: Proptypes.string,
  onClick: Proptypes.func,
  className: Proptypes.string,
  link: Proptypes.bool,
  path: Proptypes.string,
};
