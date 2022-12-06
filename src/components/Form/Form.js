import Card from "../UI/Card/Card";
import { useForm } from "react-hook-form";
import classes from "./Form.module.css";
import { sub, isBefore, isEqual } from "date-fns";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm({ defaultValues: { actions: "female" } });

  const onSubmit = (data) => {
    console.log(data)
    reset();
  };

  const greatherThan18 = (value) => {
    if (!value) {
      return true;
    }

    const today = new Date();

    const valueDate = new Date(value);

    const pastDate = sub(today, { years: 18 });

    return isBefore(valueDate, pastDate);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className={classes.header}>Form</h1>
        <div className={classes["form-items"]}>
          <div className={classes["column-wrapper"]}>
            <div className={classes.wrapper}>
              <label htmlFor="firstName" className={classes["label-items"]}>
                First Name:
              </label>
              <input
                id="firstName"
                className={classes["border-input"]}
                type="text"
                {...register("firstName", {
                  required: "Required value!",
                  minLength: { value: 2, message: "Minimal length is 2!" },
                })}
              />
              {errors?.firstName ? <p>{errors.firstName.message}</p> : null}
            </div>

            <div className={classes.wrapper}>
              <label htmlFor="lastName" className={classes["label-items"]}>
                Last Name:
              </label>
              <input
                id="lastName"
                className={classes["border-input"]}
                type="text"
                {...register("lastName", {
                  required: "Required value!",
                  minLength: { value: 2, message: "Minimal length is 2!" },
                })}
              />
              {errors?.lastName ? <p>{errors.lastName.message}</p> : null}
            </div>

            <div className={classes.wrapper}>
              <label htmlFor="birthDate" className={classes["label-items"]}>
                Birth Date:
              </label>
              <input
                id="birthDate"
                className={classes["border-input"]}
                type="date"
                {...register("birthDate", {
                  required: "Required value!",
                  validate: {
                    moreThan18: (value) => greatherThan18(value) || "Not 18!!",
                  },
                })}
              />
              {errors?.birthDate ? <p>{errors.birthDate.message}</p> : null}
            </div>

            <div className={classes.wrapper}>
              <label htmlFor="phoneNumber" className={classes["label-items"]}>
                Phone Number:
              </label>
              <input
                id="phoneNumber"
                className={classes["border-input"]}
                type="tel"
                {...register("phoneNumber", {
                  pattern: {
                    value: /^\+(?:[0-9] ?){6,14}[0-9]$/,
                    message: "Required pattern: +48  _ _ _ _ _ _ _ _ _",
                  },
                })}
              />
              {errors?.phoneNumber ? <p>{errors.phoneNumber.message}</p> : null}
            </div>

            <div className={classes.wrapper}>
              <label htmlFor="password" className={classes["label-items"]}>
                New Password:
              </label>
              <input
                id="password"
                className={classes["border-input"]}
                type="password"
                {...register("password", {
                  required: "Required value!",
                  minLength: { value: 5, message: "Minimal length is 5!" },
                  deps: ["confirmPassword"],
                })}
              />
              {errors?.password ? <p>{errors.password.message}</p> : null}
            </div>

            <div className={classes.wrapper}>
              <label
                htmlFor="confirmPassword"
                className={classes["label-items"]}
              >
                Confirm Password:
              </label>
              <input
                id="confirmPassword"
                className={classes["border-input"]}
                type="password"
                {...register("confirmPassword", {
                  required: "Required value!",
                  validate: (value) => {
                    const password = getValues("password");
                    return password === value || "Password should match!";
                  },
                })}
              />
              {errors?.confirmPassword ? (
                <p>{errors.confirmPassword.message}</p>
              ) : null}
            </div>
          </div>

          <div className={classes["column-wrapper"]}>
            <div className={classes.wrapper}>
              <label htmlFor="middleName" className={classes["label-items"]}>
                Middle Name:
              </label>
              <input
                id="middleName"
                className={classes["border-input"]}
                type="text"
                {...register("middleName", {
                  required: false,
                })}
              />
            </div>

            <div className={classes.wrapper}>
              <p className={classes["label-items"]}> Gender:</p>
              <label className={classes["option-items"]}>
                <input
                  className={classes["option-input"]}
                  type="radio"
                  value="female"
                  {...register("actions")}
                />
                Female
              </label>
              <label className={classes["option-items"]}>
                <input
                  className={classes["option-input"]}
                  type="radio"
                  value="male"
                  {...register("actions")}
                />
                Male
              </label>
            </div>

            <div className={classes.wrapper}>
              <label htmlFor="emailAddress" className={classes["label-items"]}>
                E-mail Address:
              </label>
              <input
                id="emailAddress"
                className={classes["border-input"]}
                type="email"
                placeholder="example123@gmail.com"
                {...register("emailAddress", {
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email!",
                  },
                })}
              />
              {errors?.emailAddress ? (
                <p>{errors.emailAddress.message}</p>
              ) : null}
            </div>

            <div className={classes.wrapper}>
              <label htmlFor="level" className={classes["label-items"]}>
                Programming level:
              </label>
              <select
                id="level"
                className={classes["border-input"]}
                {...register("level")}
              >
                <option value="intern">Intern</option>
                <option value="junior">Junior</option>
                <option value="mid">Mid</option>
                <option value="senior">Senior</option>
              </select>
            </div>

            <div className={classes.wrapper}>
              <p className={classes["label-items"]}>Technologies:</p>
              <ul style={{ columns: 2 }}>
                <li>
                  <label className={classes["option-items"]}>
                    <input
                      className={classes["option-input"]}
                      type="checkbox"
                      value="JavaScript"
                      {...register("tech")}
                    />
                    JavaScript
                  </label>
                </li>
                <li>
                  <label className={classes["option-items"]}>
                    <input
                      className={classes["option-input"]}
                      type="checkbox"
                      value="HTML"
                      {...register("tech")}
                    />
                    HTML
                  </label>
                </li>
                <li>
                  <label className={classes["option-items"]}>
                    <input
                      className={classes["option-input"]}
                      type="checkbox"
                      value="CSS"
                      {...register("tech")}
                    />
                    CSS
                  </label>
                </li>
                <li>
                  <label className={classes["option-items"]}>
                    <input
                      className={classes["option-input"]}
                      type="checkbox"
                      value="React"
                      {...register("tech")}
                    />
                    React
                  </label>
                </li>
                <li>
                  <label className={classes["option-items"]}>
                    <input
                      className={classes["option-input"]}
                      type="checkbox"
                      value="Java"
                      {...register("tech")}
                    />
                    Java
                  </label>
                </li>
                <li>
                  <label className={classes["option-items"]}>
                    <input
                      className={classes["option-input"]}
                      type="checkbox"
                      value="Python"
                      {...register("tech")}
                    />
                    Python
                  </label>
                </li>
                <li>
                  <label className={classes["option-items"]}>
                    <input
                      className={classes["option-input"]}
                      type="checkbox"
                      value="TypeScript"
                      {...register("tech")}
                    />
                    TypeScript
                  </label>
                </li>
              </ul>
            </div>

            <div className={classes.wrapper}>
              <label htmlFor="info" className={classes["label-items"]}>
                Additional information:
              </label>
              <textarea
                id="info"
                className={classes["border-input"]}
                type="text"
                placeholder="Write..."
                {...register("information", {
                  required: false,
                })}
              ></textarea>
            </div>
          </div>
        </div>

        <div className={classes.button}>
          <button className={classes["btn-submit"]} type="submit">
            Submit
          </button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
