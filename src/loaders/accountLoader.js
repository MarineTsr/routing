import { getUser } from "../apis/auth";
import { redirect } from "react-router-dom";

export async function accountLoader({ params, request }) {
  const user = await getUser();

  if (user) {
    return user;
  } else {
    return redirect('/auth');
  }
}
