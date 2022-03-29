import React from 'react';

// Bootstrap
import { Form } from 'react-bootstrap';

// Type
import { Brand } from '../../constants/interface'

interface Props {
  labelName: string;
  brands: Brand[];
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLSelectElement>
}

const Select = ({ labelName, brands, onChange, value }: Props) => (
  <Form.Group className="mb-3">
    <Form.Label>{labelName}</Form.Label>
    <Form.Select onChange={onChange} value={value}>
      {brands.map(({ id, name }) => (
        <option value={id} key={id}>
          {name}
        </option>
      ))}
    </Form.Select>
  </Form.Group>
);

export default React.memo(Select);