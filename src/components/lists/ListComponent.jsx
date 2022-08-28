import { v4 as uuid } from 'uuid';

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
