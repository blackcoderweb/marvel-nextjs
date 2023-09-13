import { useState } from "react";
import { SearchIcon } from "./SearchIcon";
import { NavbarContent, Input, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

function SearchInput({ pathname }) {
  const router = useRouter();

  const [value, setValue] = useState("");
  const handleClick = () => {
    router.push(`${pathname}/search?name=${value}`);
  }

  return (
    <NavbarContent as="div" className="items-center" justify="end">
      <Input
        classNames={{
          base: "w-[50rem] sm:max-w-[10rem] h-10",
          mainWrapper: "h-full",
          input: "text-medium",
          inputWrapper:
            "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
        }}
        placeholder="Type to search..."
        value={value}
        onValueChange={setValue}
        size="sm"
        type="search"
      />
      <Button
      size="sm"
      color="primary"
      variant="bordered"
      onClick={handleClick}
      >
        <SearchIcon size={18}/>
      </Button>
    </NavbarContent>
  );
}

export default SearchInput;
