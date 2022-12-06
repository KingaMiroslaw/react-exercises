import classes from "../CounterModal/CounterModal.module.css";
import { useForm } from "react-hook-form";

const CounterModal = ({ onClose, onAdd, onSubstract }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm({ defaultValues: { actions: "increment" } });

  const onSubmit = (data) => {
    if (data.actions === "increment") {
      onAdd(data.value);
    } else {
      onSubstract(data.value);
    }

    resetField("value");
  };

  return (
    <form className={classes.modal} onSubmit={handleSubmit(onSubmit)}>
      <h4 className={classes.header}>
        Enter the number you want to add or subtract:
      </h4>

      <input
        type="number"
        {...register("value", {
          required: "Required value!",
          min: { value: 1, message: "Minimal value is 1!" },
          valueAsNumber: true,
        })}
      />
      {errors?.value ? <p>{errors.value.message}</p> : null}
      <h4 className={classes.header}>Choose the action:</h4>
      <div className={classes.actions}>
        <label>
          <input
            className={classes["action-items"]}
            type="radio"
            value={"increment"}
            {...register("actions")}
          />
          Increment
        </label>
        <label>
          <input
            className={classes["action-items"]}
            type="radio"
            value={"decrement"}
            {...register("actions")}
          />
          Decrement
        </label>
      </div>
      <div className={classes.buttons}>
        <button className={classes["btn-confirm"]} type="submit">
          Confirm
        </button>
        <button className={classes["btn-cancel"]} onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CounterModal;
