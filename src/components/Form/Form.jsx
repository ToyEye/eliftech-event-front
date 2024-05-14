import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import Heading from "../Heading/Heading";

import styles from "./Form.module.scss";

import { addToEventSchema as validationSchema } from "../../validSchema/addToEvent";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { addForEvent, getEventParticipants } from "../../service/api";

const Form = () => {
  const [title, setTitle] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getEventParticipants(id);
        setTitle(data.title);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [id]);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      dateOfBirth: "",
      source: "social media",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      await addForEvent(id, values);

      resetForm();
    },
  });

  return (
    <div className={styles.flex_container}>
      <div>
        <Heading text={title} type="subtitle" />
        <p>
          Fill out the form below to register for the upcoming tech conference.
        </p>
      </div>
      <div className={styles.card_container}>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <div className={styles.grid_container}>
            <div className={styles.input_container}>
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                onChange={formik.handleChange}
                value={formik.values.fullName}
              />
              {formik.errors.fullName && formik.touched.fullName && (
                <p>{formik.errors.fullName}</p>
              )}
            </div>
            <div className={styles.input_container}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email && (
                <p>{formik.errors.email}</p>
              )}
            </div>
          </div>
          <div className={styles.input_container}>
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.dateOfBirth}
            />
            {formik.errors.dateOfBirth && formik.touched.dateOfBirth && (
              <p>{formik.errors.dateOfBirth}</p>
            )}
          </div>
          <div className={` ${styles.radio_container}`}>
            <label>How did you hear about this event?</label>
            <div
              role="group"
              aria-labelledby="radio-group"
              className={styles.radio_wrapper}
            >
              <div className={styles.radio_item}>
                <input
                  id="social-media"
                  name="source"
                  type="radio"
                  value="social-media"
                  onChange={formik.handleChange}
                  checked={formik.values.source === "social media"}
                />
                <label htmlFor="social-media">Social Media</label>
              </div>
              <div className={styles.radio_item}>
                <input
                  id="friends"
                  name="source"
                  type="radio"
                  value="friends"
                  onChange={formik.handleChange}
                  checked={formik.values.source === "friends"}
                />
                <label htmlFor="friends">Friends</label>
              </div>
              <div className={styles.radio_item}>
                <input
                  id="found myself"
                  name="source"
                  type="radio"
                  value="found myself"
                  onChange={formik.handleChange}
                  checked={formik.values.source === "found myself"}
                />
                <label htmlFor="foundmyself">Found myself</label>
              </div>
            </div>
          </div>

          <Button as="button" text="Register" type="fullfield" />
        </form>
      </div>
    </div>
  );
};

export default Form;
