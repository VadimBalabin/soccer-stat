import { Input } from 'antd';

export function SearchBox({ handleSearch }) {
  return (
    <Input
      size="large"
      placeholder="Input search text"
      onChange={handleSearch}
      allowClear
    />
  );
}
