import { Autocomplete, TextField, Checkbox, Chip } from "@mui/material";
import { HintToolTip } from "./HintToolTip";
import { isNotNullOrUndefined } from "../feature/isNullOrUndefined";
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
  label,
  disabled,
  limitTags,
  options,
  value,
  onChange,
  generateLabel,
  width,
  isDisplayToolTip,
  generateToolTipText,
  generateLabelColor,
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
        <TextField {...params} variant="outlined" label={label} />
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            label={generateLabel(option)}
            {...getTagProps({ index })}
            key={option}
            size="small"
            sx={{
              bgcolor: generateLabelColor
                ? generateLabelColor(option)
                : undefined,
            }}
          />
        ))
      }
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
        "& input:focus-visible": {
          boxShadow: "0 0 0 0",
          outline: "0px",
        },
      }}
    />
  );
};
