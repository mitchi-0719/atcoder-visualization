import { Autocomplete, TextField, Checkbox } from "@mui/material";
import { HintToolTip } from "./HintToolTip";
import { isNotNullOrUndefined } from "../feature/nullUndefined";

export const MultiAutoCompleteWithNest = ({
  disabled,
  limitTags,
  options,
  value,
  onChange,
  generateLabel,
  width,
  isDisplayToolTip,
  generateToolTipText,
}) => {
  return (
    <Autocomplete
      disabled={disabled}
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
        <li key={option} {...props} style={{ display: "flex", gap: 4 }}>
          <Checkbox size="small" checked={selected} sx={{ padding: "3px" }} />
          {generateLabel(option)}
          {isDisplayToolTip && isNotNullOrUndefined(generateToolTipText) && (
            <HintToolTip text={generateToolTipText(option)} />
          )}
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
