import { ContactForm } from "@/components/form/form";
import Line from "@/components/ui/line";

const TestDrive = () => {
  return (
    <div className="max-w-6xl mx-auto py-15 px-5 xl:px-0">
      <div className="flex flex-col gap-5 pt-15">
        <div className="flex gap-1 items-center text-[#b8935f] text-sm">
          <Line needsHide={false} />
          رزرو تست‌درایو
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default TestDrive;
