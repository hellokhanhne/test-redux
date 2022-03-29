import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

//Types
import { ButtonText, ButtonVariant } from '../constants/enum/button';
import {
  InputLabel,
  SelectLabel,
  InputType,
  InputId,
  InputMessage,
} from '../constants/enum/input-select';
import { Brand, Product } from '../constants/interface';
import { TypeModal } from '../constants/enum/type-modal';

//Components
import InputField from '../components/Input';
import Select from '../components/Select';
import ButtonPage from '../components/Button';
import { Form } from 'react-bootstrap';
import { getRandomId } from '../helpers/random-id';

//redux
import { editProduct } from '../redux/product/actions';

interface Props {
  type: TypeModal;
  brand: Brand[];
  defaultValue?: Product;
  onAddProduct: (newProduct: Product) => void;
  onHide?: () => void;
}

const EditAndAddProduct = ({
  type = TypeModal.ADD,
  brand,
  onAddProduct,
  defaultValue,
  onHide,
}: Props) => {
  const dispatch = useDispatch();
  const defaultField = {
    id: getRandomId(),
    name: '',
    price: 0,
    brandId: 1,
  };

  const [validated, setValidated] = useState(false);
  const [valueForm, setValueForm] = useState<Product>(defaultField);

  useEffect(() => {
    if (!!defaultValue) {
      setValueForm(defaultValue);
    } else {
      setValueForm(defaultField);
    }
  }, []);

  const handleChangeBrandName = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    setValueForm((prevBrandName) => ({
      ...prevBrandName,
      brandId: parseInt(value),
    }));
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    setValueForm((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    if (type === TypeModal.ADD) {
      onAddProduct(valueForm);

      setValueForm(defaultField);
      setValidated(false);
    } else {
      dispatch(editProduct(valueForm));

      setValueForm(defaultField);
      onHide?.();
    }
  };

  return (
    <Form onSubmit={handleSubmit} validated={validated} noValidate>
      <Select
        labelName={SelectLabel.BRAND}
        brands={brand}
        onChange={handleChangeBrandName}
        value={valueForm.brandId!}
      />
      <InputField
        type={InputType.TEXT}
        labelName={InputLabel.PRODUCTS_NAME}
        placeholder={InputLabel.PRODUCTS_NAME}
        name={InputType.NAME}
        controlId={InputId.CONTROL_PRODUCT}
        errorMessage={InputMessage.PRODUCT_INVALID}
        onChange={handleChangeInput}
        value={valueForm.name}
      />
      <InputField
        type={InputType.PRICE}
        labelName={InputLabel.PRICE}
        placeholder={InputType.PRICE}
        name={InputType.PRICE}
        controlId={InputId.CONTROL_PRICE}
        errorMessage={InputMessage.PRICE_INVALID}
        onChange={handleChangeInput}
        value={valueForm.price!}
      />
      <ButtonPage
        extraClass="mx-1"
        variant={ButtonVariant.PRIMARY}
        text={type === TypeModal.ADD ? ButtonText.ADD_PRODUCTS : ButtonText.EDIT_PRODUCTS}
      />
    </Form>
  );
};

export default React.memo(EditAndAddProduct);
