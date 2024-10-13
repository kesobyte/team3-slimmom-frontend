import PropTypes from 'prop-types';
import { FormLabel, LabelName, Input } from './InputField.styled';

export default function InputField({
  labelName,
  handlerEvent,
  width,
  right,
  ...inputSetting
}) {
  return (
    <>
      <FormLabel style={(width = { width })}>
        <Input onChange={handlerEvent} {...inputSetting} placeholder=" " />
        <LabelName style={{ right: right }}>{labelName}</LabelName>
      </FormLabel>
    </>
  );
}

InputField.propTypes = {
  labelName: PropTypes.string,
  handlerEvent: PropTypes.func.isRequired,
  width: PropTypes.string,
  right: PropTypes.number,
};
