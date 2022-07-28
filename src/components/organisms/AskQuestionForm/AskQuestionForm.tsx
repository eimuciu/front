import css from './AskQuestionForm.module.scss';
import { BigHeader } from '../../atoms/Header/Header';
import Input from '../../atoms/Input/Input';
import TextArea from '../../atoms/TextArea/TextArea';
import { FormButton } from '../../atoms/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const questionShape = {
  body: '',
  createdAt: new Date().valueOf(),
  isEdited: false,
  isRead: false,
  title: '',
  uid: '',
};

const initialValues = {
  title: '',
  body: '',
};

const validation = Yup.object({
  title: Yup.string().required('Title is required'),
  body: Yup.string().required('Question is required'),
});

function AskQuestionForm() {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: async (values, actions) => {
      alert(JSON.stringify(values));
      //   setIsLoading(true);
      //   const datadetails = await postDataToServer(values);
      //   if (datadetails.err) {
      //     makeMessage(datadetails.err, 'error');
      //     setIsLoading(false);
      //     return;
      //   }
      //   setIsLoading(false);
      //   makeMessage(datadetails.msg, 'success');
      actions.resetForm();
    },
  });

  return (
    <div className={css.main}>
      <span>
        <BigHeader text="Ask question" />
      </span>
      <form onSubmit={formik.handleSubmit}>
        <Input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          name="title"
          type="text"
          placeholder="Title"
          error={formik.touched.title && formik.errors.title}
        />
        <TextArea
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.body}
          name="body"
          type="text"
          placeholder="Question"
          error={formik.touched.body && formik.errors.body}
        />
        <FormButton>Ask</FormButton>
      </form>
    </div>
  );
}

export default AskQuestionForm;
