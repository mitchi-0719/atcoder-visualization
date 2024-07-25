import { Autocomplete, TextField, Checkbox } from "@mui/material";

export const MultiAutoComplete = ({
  limitTags,
  options,
  value,
  onChange,
  generateLabel,
  width,
  toolTip,
}) => {
  return (
    <Autocomplete
      multiple
      noOptionsText="候補なし"
      size="small"
      limitTags={limitTags}
      options={options}
      disableCloseOnSelect
      getOptionLabel={generateLabel}
      value={value}
      onChange={onChange}
      renderOption={(props, option, { selected }) => (
        <li key={option} {...props}>
          <Checkbox
            size="small"
            checked={selected}
            sx={{ padding: "3px", marginRight: "3px" }}
          />
          {generateLabel(option)}
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Contests" />
      )}
      sx={{
        width: width,
        bgcolor: "#fff",
      }}
    />
  );
};
