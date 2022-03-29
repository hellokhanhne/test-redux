import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editBrand } from '../redux/brand/actions';
import ButtonPage from '../components/Button';
//Components
import InputField from '../components/Input';
//Types
import { ButtonText, ButtonVariant } from '../constants/enum/button';
import { InputId, InputLabel, InputMessage, InputType } from '../constants/enum/input-select';
import { TypeModal } from '../constants/enum/type-modal';
import { Brand } from '../constants/interface';
import { getRandomId } from '../helpers/random-id';

interface Props {
  type: TypeModal;
  defaultValue?: Brand;
  onAddBrand: (newBrand: Brand) => void;
  onHide?: () => void;
}

const EditAndAddBrand = ({ type = TypeModal.ADD, onAddBrand, defaultValue, onHide }: Props) => {
  const defaultField = {
    id: getRandomId(),
    name: '',
  };
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const [valueForm, setValueForm] = useState<Brand>(defaultField);

  useEffect(() => {
    if (!!defaultValue) {
      setValueForm(defaultValue);
    } else {
      setValueForm(defaultField);
    }
  }, []);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.currentTarget;
    setValueForm((prevBrand) => ({
      ...prevBrand,
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
      onAddBrand(valueForm);
      setValueForm(defaultField);
      setValidated(false);
    } else {
      console.log(valueForm);
      dispatch(editBrand(valueForm));
      setValueForm(defaultField);
      onHide?.();
    }
  };

  return (
    <Form onSubmit={handleSubmit} validated={validated} noValidate>
      <InputField
        type={InputType.TEXT}
        labelName={InputLabel.BRAND_NAME}
        placeholder={InputLabel.BRAND_NAME}
        name={InputType.NAME}
        controlId={InputId.CONTROL_BRAND}
        errorMessage={InputMessage.BRAND_INVALID}
        onChange={handleChangeInput}
        value={valueForm.name}
      />

      <ButtonPage
        extraClass="mx-1"
        variant={ButtonVariant.PRIMARY}
        text={type === TypeModal.ADD ? ButtonText.ADD_BRAND : ButtonText.EDIT_BRAND}
      />
    </Form>
  );
};

export default React.memo(EditAndAddBrand);
