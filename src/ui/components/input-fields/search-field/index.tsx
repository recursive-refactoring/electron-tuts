"use client";

import { CommonIcon } from "@/components/icons";
import SearchIcon from "@mui/icons-material/Search";
import CommonTextField from "../common-text-field";

export const SearchField = (props: any) => {
  const { setSearch, search, placeholder = "Search", fullWidth = true } = props;

  const handleSearch = (e: any) => {
    setSearch?.(e?.target?.value);
  };

  return (
    <CommonTextField
      fullWidth={fullWidth}
      label=""
      onChange={handleSearch}
      value={search}
      endIcon={
        <CommonIcon
          Icon={SearchIcon}
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
