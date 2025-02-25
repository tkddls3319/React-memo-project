function Select(value, setValue, options = []) {
  return (
    <Select
      value={value}
      onChange={() => {
        setValue(e.target.value);
      }}
    >
      <Option value="" disabled>
        지역을 선택해주세요.
      </Option>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </Select>
  );
}

export default Select;
