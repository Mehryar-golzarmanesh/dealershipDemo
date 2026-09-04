import { Field, FieldGroup } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface item {
  label: string;
  value: string | null;
}

interface Props {
  items: item[];
  placeholder: string;
}

export function SelectAlignItem({ items, placeholder }: Props) {
  return (
    <FieldGroup className="w-full max-w-55">
      <Field>
        <Select items={items} defaultValue={placeholder}>
          <SelectTrigger className="rounded-sm border border-[#818078] bg-[#1b1e23] text-[#dddad3] p-5">
            <SelectValue />
          </SelectTrigger>
          <SelectContent alignItemWithTrigger={false}>
            <SelectGroup className="bg-[#1b1e23] border border-[#818078] text-[#dddad3]">
              <SelectItem key={null} value={`هر برندی`}>
                هر برندی
              </SelectItem>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
    </FieldGroup>
  );
}
