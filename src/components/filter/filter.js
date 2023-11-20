import { LabelFilter, InputFilter } from './filter.styled';

export const Filter = ({ filter, onUpdateFilter }) => {
  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="text"
        value={filter}
        onChange={ev => onUpdateFilter(ev.target.value)}
      ></InputFilter>
    </LabelFilter>
  );
};
