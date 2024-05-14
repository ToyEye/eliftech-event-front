import { useFormik } from "formik";

import Heading from "../Heading/Heading";

import styles from "./Form.module.scss";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      dateOfBirth: "",
      source: "social-media",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={styles.flex_container}>
      <div className="space-y-2">
        <Heading text="Register for the Tech Conference 2023" type="subtitle" />
        <p className="text-gray-500 dark:text-gray-400">
          Fill out the form below to register for the upcoming tech conference.
        </p>
      </div>
      <div className={styles.card_container}>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
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
          </div>
          <div
            className={`${styles.input_container} ${styles.radio_container}`}
          >
            <label>How did you hear about this event?</label>
            <div role="group" aria-labelledby="my-radio-group">
              <div className={styles.radio_item}>
                <input
                  id="social-media"
                  name="source"
                  type="radio"
                  value="social-media"
                  onChange={formik.handleChange}
                  checked={formik.values.source === "social-media"}
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
                  id="found-myself"
                  name="source"
                  type="radio"
                  value="found-myself"
                  onChange={formik.handleChange}
                  checked={formik.values.source === "found-myself"}
                />
                <label htmlFor="found-myself">Found myself</label>
              </div>
            </div>
          </div>
          <button className="w-full" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

// <form onSubmit={formik.handleSubmit}>
//   <label htmlFor="firstName">First Name</label>
//   <input
//     id="fullname"
//     name="fullname"
//     type="text"
//     onChange={formik.handleChange}
//     value={formik.values.firstName}
//   />
//   <label htmlFor="lastName">Last Name</label>
//   <input
//     id="email"
//     name="email"
//     type="email"
//     onChange={formik.handleChange}
//     value={formik.values.lastName}
//   />
//   <label htmlFor="email">Email Address</label>
//   <input
//     id="email"
//     name="email"
//     type="email"
//     onChange={formik.handleChange}
//     value={formik.values.email}
//   />
//   <Heading
//     type="subtitle"
//     tag="h3"
//     text="Where did you hear about this event"
//   />
//   <div>
//     <div>
//       <label htmlFor="social">Social Media</label>
//       <input
//         id="social"
//         name="source"
//         type="radio"
//         onChange={formik.handleChange}
//         value={formik.values.source}
//       />
//     </div>
//     <div>
//       <label htmlFor="friends">Friends</label>
//       <input
//         id="friends"
//         name="source"
//         type="radio"
//         onChange={formik.handleChange}
//         value={formik.values.source}
//       />
//     </div>
//     <div>
//       <label htmlFor="myself">Found myself</label>
//       <input
//         id="myself"
//         name="source"
//         type="radio"
//         onChange={formik.handleChange}
//         value={formik.values.source}
//       />
//     </div>
//   </div>
//   <button type="submit">Submit</button>
// </form>;
