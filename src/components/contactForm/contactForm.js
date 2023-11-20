import { Field, Form, Label, ErrorMas, Button } from './contactForm.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';

const phonebookSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  number: Yup.string()
    .matches(
      /^\d{7}$/,
      'The phone number must contain exactly 7 digits, and be a number'
    )
    .required('Required'),
});

export const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{
        contacts: [],
        name: '',
        number: '',
      }}
      validationSchema={phonebookSchema}
      onSubmit={(value, action) => {
        addContact(value);
        action.resetForm();
      }}
    >
      <Form>
        <Label>
          Name
          <Field type="text" name="name" placeholder="Jane" />
          <ErrorMas name="name" component="span" />
        </Label>
        <Label>
          Number
          <Field type="tel" name="number" placeholder="2279126" />{' '}
          <ErrorMas name="number" component="span" />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
