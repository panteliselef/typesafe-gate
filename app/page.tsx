import { Gate as DefaultGate } from "@clerk"
import { Gate } from "./Gate";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DefaultGate permissions={["organization:create", "organization:update"]}>
        <h1> My organization</h1>
      </DefaultGate>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Gate permissions={['edit']}>
          <button>Edit</button>
        </Gate>
      </div>
    </main>
  );
}
