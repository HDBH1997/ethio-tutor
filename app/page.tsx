import prisma from "./lib/prisma";
import RegisterForm from "./components/RegisterForm";

export default async function Home() {
  const users = await prisma.user.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to Ethio-Tutor 🚀
      </h1>

      <RegisterForm />

      <hr className="my-8" />

      <h2 className="text-2xl font-bold mb-4">
        Registered Students
      </h2>

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="border rounded-lg p-4 shadow-sm"
          >
            <p>
              <strong>Name:</strong> {user.name}
            </p>

            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}