import { v4 as uuid } from 'uuid';
import { capitalizeWord } from '../../../utilities/helpers';

export const SelectComponent = ({
  list,
  onSelect,
  value,
  className,
}) => {
  const handleSelect = ({ target }) => {
    onSelect(target.value);
  };

  return (
    <select
      name='pokemon-type'
      onChange={handleSelect}
      value={value}
      className={className}
    >
      {list.map((type) => {
        return (
          <option
            key={uuid()}
            value={type}
          >
            {capitalizeWord(type)}
          </option>
        );
      })}
    </select>
  );
};
