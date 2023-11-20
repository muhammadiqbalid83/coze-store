interface FormInputProps {
  label: string
  name: string
  type: string
  defaultValue: string
}

export default function FormInput({
  label,
  name,
  type,
  defaultValue,
}: FormInputProps): React.ReactNode {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="input input-bordered "
      />
    </div>
  )
}
