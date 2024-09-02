'use client';

import React, { type InputHTMLAttributes } from 'react';
import { Alert, TextField, type AlertColor } from '@mui/material';

import { defaultStyleInput, errorStyleInput } from './styles';

interface InputTextProps {
  sx?: object;
  sxError?: object;
  label: string;
  helperText?: string;
  name: string;
  typeInput?: InputHTMLAttributes<HTMLInputElement>['type'];
  severity?: AlertColor;
  defaultValue?: string;
  errorText?: string;
  value: string;
  isError: boolean;
  suffixIcon?: React.JSX.Element;
  prefixIcon?: React.JSX.Element;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function InputText({
  label,
  name,
  sx,
  sxError,
  value,
  isError,
  helperText,
  onChange,
  onBlur,
  defaultValue,
  prefixIcon,
  suffixIcon,
  typeInput = 'text',
  severity = 'error',
  errorText = 'something wrong',
}: InputTextProps): React.JSX.Element {
  return (
    <>
      <TextField
        sx={{ ...defaultStyleInput, ...sx }}
        label={label}
        name={name}
        value={value}
        error={isError}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        helperText={helperText}
        type={typeInput}
        InputProps={{ startAdornment: prefixIcon, endAdornment: suffixIcon }}
      />
      {isError ? (
        <Alert sx={{ ...errorStyleInput, ...sxError }} severity={severity}>
          {errorText}
        </Alert>
      ) : null}
    </>
  );
}
