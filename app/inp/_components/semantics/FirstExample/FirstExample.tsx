import { GoodInp } from "./GoodInp";
import { PoorInp } from "./PoorInp";

export const FirstExample = () => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold">Example #1</h2>
    <div className="flex gap-4">
      <PoorInp />
      <GoodInp />
    </div>
  </div>
);
