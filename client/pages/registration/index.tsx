import React from "react";
import RegLayout from '../../components/RegLayout'
import {useFormik} from 'formik';
import {Button} from "semantic-ui-react";

const Registration: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmed: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <RegLayout>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Имя:</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <label htmlFor="password">Пароль</label>
          <input
            id="confirmed"
            name="confirmed"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmed}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </RegLayout>
  )
}

export default Registration;