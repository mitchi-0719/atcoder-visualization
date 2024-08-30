import { Autocomplete, TextField, Checkbox } from "@mui/material";
import { HintToolTip } from "./HintToolTip";
import { isNotNullOrUndefined } from "../feature/nullUndefined";
import { omitKey } from "../feature/omitKey";
import {
  DARK_UI_BG_COLOR,
  DARK_UI_BORDER_COLOR,
  LIGHT_UI_BG_COLOR,
  LIGHT_UI_BORDER_COLOR,
} from "../style/style";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export const MultiAutoComplete = ({
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
  const { isDark } = useContext(DarkModeContext);
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
      renderOption={(props, option, { selected }) => {
        const liProps = omitKey(props, "key");
        return (
          <li key={option} {...liProps} style={{ display: "flex", gap: 4 }}>
            <Checkbox size="small" checked={selected} sx={{ padding: "3px" }} />
            {generateLabel(option)}
            {isDisplayToolTip && isNotNullOrUndefined(generateToolTipText) && (
              <HintToolTip text={generateToolTipText(option)} />
            )}
          </li>
        );
      }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Contests" />
      )}
      sx={{
        width: width,
        border: `1px solid ${
          isDark ? DARK_UI_BORDER_COLOR : LIGHT_UI_BORDER_COLOR
        }`,
        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.3)",
        "& .MuiOutlinedInput-root": {
          backgroundColor: isDark ? DARK_UI_BG_COLOR : LIGHT_UI_BG_COLOR,
          "&.Mui-focused": {
            backgroundColor: isDark ? DARK_UI_BG_COLOR : LIGHT_UI_BG_COLOR,
          },
        },
        "& .MuiInputBase-input": {
          backgroundColor: isDark ? DARK_UI_BG_COLOR : LIGHT_UI_BG_COLOR,
        },
      }}
    />
  );
};
