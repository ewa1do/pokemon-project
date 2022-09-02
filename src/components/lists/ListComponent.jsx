import { v4 as uuid } from 'uuid';
import Proptypes from 'prop-types';

/**
 *
 * @param {array} list Array of elements to iterate
 * @param {function} Component Component to be renderate on each iteration
 * @returns A list of components
 */

export const ListComponent = ({ list, Component }) => {
  return list.map((item, i) => {
    return (
      <Component
        key={uuid()}
        props={{ ...item, iteration: i }}
      />
    );
  });
};

ListComponent.propTypes = {
  list: Proptypes.arrayOf(Proptypes.object).isRequired,
  Component: Proptypes.func.isRequired,
};
