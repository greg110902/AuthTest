import { SignIn } from "@clerk/nextjs";

export const runtime = 'edge';

export default function Page() {
  return (
    <div className="flex justify-center py-24">
      <SignIn />
    </div>
  );
}
