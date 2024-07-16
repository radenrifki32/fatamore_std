import { SignedIn, UserButton } from '@clerk/nextjs';

export default function Projects() {
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
