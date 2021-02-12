import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

export const DateRangeBox = ({ value, onChange }) => (
  <RangePicker defaultValue={value} onChange={onChange} />
);
