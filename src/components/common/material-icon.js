import { IconButton } from "@mui/material";
import React from "react";

function MaterialIcon({
  iconName: Icon,
  iconSize,
  buttonSize,
  style,
  onClick,
  disabled = false,
  ...props
}) {
  return (
    <IconButton
      disabled={disabled}
      onClick={onClick}
      sx={{ width: buttonSize, height: buttonSize, ...style }}
      {...props}
    >
      {Icon && <Icon sx={{ fontSize: iconSize }} />}
    </IconButton>
  );
}

export default MaterialIcon;
