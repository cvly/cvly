// app/[profileId]/types.ts
export interface ProfileType {
  name: string;
  title: string;
  bio: string;
  skills: string[];
  photo: string; // New property for photo
  location: string;
  gender: string;
}
