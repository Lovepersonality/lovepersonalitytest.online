import { notFound } from "next/navigation";
import { profileContent } from "../../profileContent";

export default function ProfilePage({ params, searchParams }) {
  const { profileKey } = params;
  const { token } = searchParams;
  if (!token || !atob(token).includes(profileKey)) {
    return notFound();
  }
  if (!(profileKey in profileContent)) return notFound();
  return profileContent[profileKey];
}