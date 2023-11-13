import { ComponentProps, FC } from "react";

interface BaseInputProps extends ComponentProps<"input"> {
  label?: string;
}

const BaseInput: FC<BaseInputProps> = (props) => {
  return (
    <div className="w-full flex flex-col mb-4">
      {props.label?.length ? (
        <label htmlFor={props.id} className="mb-1 font-bold">
          {props.label}
        </label>
      ) : null}
      <input {...props} className="p-1 border border-grey-300 rounded-sm" />
    </div>
  );
};

export default BaseInput;
