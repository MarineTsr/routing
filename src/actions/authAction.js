export async function authAction({ request, params }) {
  const data = await request.formData();
  console.log(Object.fromEntries(data));

  return "Action OK";
}
