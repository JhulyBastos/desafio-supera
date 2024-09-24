import Header from "@/components/Header";
import { Input } from "@/components/Input";

export default function UserRegistration() {
  return (
    <div className="w-full h-screen bg-dark-10/20">
      <Header />
      <div className="flex items-center justify-center">
        <div className="w-4/5 h-screen bg-white rounded-3xl">
          <div className="flex flex-col">
            <Input />
          </div>
        </div>
      </div>
    </div>
  );
}
