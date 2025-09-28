"use client";

import { CommonIcon } from "@/components/icons";
import SearchIcon from "@mui/icons-material/Search";
import CommonTextField from "../common-text-field";
import { useState } from "react";

export const SearchField = (props: any) => {
  const {
    setSearch,
    placeholder = "Search",
    fullWidth = true,
    handleSearch,
  } = props;

  const [searchValue, setSearchValue] = useState();

  const onChange = (e: any) => {
    setSearchValue(e?.target.value);
    setSearch?.(e?.target?.value);
  };

  return (
    <CommonTextField
      fullWidth={fullWidth}
      label=""
      onChange={onChange}
      value={searchValue}
      endIcon={
        <CommonIcon
          Icon={SearchIcon}
          hasAction
          handleAction={() => handleSearch?.(searchValue)}
          customStyles={
            {
              // color: styles?.iconColor,
            }
          }
        />
      }
      placeholder={placeholder}
      // backgroundColor={styles?.backgroundColor}
      borderRadius={2}
      // border={styles?.border}
      // color={styles?.color}
      // borderColor={styles?.borderColor}
    />
  );
};

export default SearchField;
