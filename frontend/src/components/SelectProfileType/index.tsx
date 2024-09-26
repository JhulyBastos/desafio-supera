import React from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import { ChevronDown, Check } from "lucide-react";
import { useFormContext, Controller } from "react-hook-form";

export default function SelectProfileType() {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name="profile"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Select.Root value={field.value} onValueChange={field.onChange}>
            <Select.Trigger
              className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
              aria-label=""
            >
              <Select.Value placeholder="Perfil do usuário" />
              <Select.Icon>
                <ChevronDown />
              </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className="overflow-hidden bg-white rounded-md mt-8 drop-shadow-lg">
                <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white cursor-default">
                  <Check />
                </Select.ScrollUpButton>
                <Select.Viewport className="p-2 text-black flex flex-col gap-2 items-center cursor-default">
                  <Select.Item
                    value="admin"
                    className="w-full hover:bg-dark-10/20 flex  justify-center rounded-[4px]"
                  >
                    <Select.ItemText>Administrador</Select.ItemText>
                  </Select.Item>
                  <Select.Item
                    value="user"
                    className="w-full hover:bg-dark-10/20 flex  justify-center rounded-[4px]"
                  >
                    <Select.ItemText>Usuário Comum</Select.ItemText>
                  </Select.Item>
                </Select.Viewport>
                <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white  cursor-default">
                  <ChevronDown />
                </Select.ScrollDownButton>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        )}
      />
    </div>
  );
}
