import md5 from "crypto-js/md5";

export function getGravatarUrl(email: string): string {
  // Step 1: Hash the email using MD5.
  const hashedEmail = md5(email.trim().toLowerCase()).toString();

  // Step 2: Construct the Gravatar URL.
  return `https://www.gravatar.com/avatar/${hashedEmail}?d=retro`;
}
