import bcrypt from "bcryptjs";
import { getJSON, listJSON, setJSON, deleteJSON } from "./store";

export type UserRole = "admin" | "employee";

export interface UserRecord {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  passwordHash: string;
  createdAt: string;
  createdBy?: string;
}

export interface PublicUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: string;
}

const NS = "users";

function toPublic(u: UserRecord): PublicUser {
  return {
    id: u.id,
    email: u.email,
    name: u.name,
    role: u.role,
    createdAt: u.createdAt,
  };
}

function idFromEmail(email: string) {
  return email.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_");
}

async function ensureSeedAdmin() {
  const users = await listJSON<UserRecord>(NS);
  if (users.length > 0) return;
  const envHash = process.env.ADMIN_PASSWORD_HASH || "";
  const validHash = /^\$2[aby]\$\d{2}\$[./A-Za-z0-9]{53}$/.test(envHash);
  const passwordHash = validHash
    ? envHash
    : await bcrypt.hash("admin123", 10);
  const seedEmail = (process.env.ADMIN_EMAIL || "admin@zarkandco.in").toLowerCase();
  const admin: UserRecord = {
    id: idFromEmail(seedEmail),
    email: seedEmail,
    name: "Administrator",
    role: "admin",
    passwordHash,
    createdAt: new Date().toISOString(),
  };
  await setJSON<UserRecord>(NS, admin.id, admin);
}

export async function listUsers(): Promise<PublicUser[]> {
  await ensureSeedAdmin();
  const users = await listJSON<UserRecord>(NS);
  return users
    .map(toPublic)
    .sort((a, b) => a.email.localeCompare(b.email));
}

export async function getUserByEmail(
  email: string,
): Promise<UserRecord | null> {
  await ensureSeedAdmin();
  const id = idFromEmail(email);
  return getJSON<UserRecord>(NS, id);
}

export async function getUserById(id: string): Promise<UserRecord | null> {
  return getJSON<UserRecord>(NS, id);
}

export async function createUser(input: {
  email: string;
  name: string;
  password: string;
  role: UserRole;
  createdBy?: string;
}): Promise<PublicUser> {
  await ensureSeedAdmin();
  const email = input.email.trim().toLowerCase();
  const id = idFromEmail(email);
  const existing = await getJSON<UserRecord>(NS, id);
  if (existing) throw new Error("A user with that email already exists");
  if (input.password.length < 8) {
    throw new Error("Password must be at least 8 characters");
  }
  const passwordHash = await bcrypt.hash(input.password, 10);
  const rec: UserRecord = {
    id,
    email,
    name: input.name.trim() || email,
    role: input.role,
    passwordHash,
    createdAt: new Date().toISOString(),
    createdBy: input.createdBy,
  };
  await setJSON<UserRecord>(NS, id, rec);
  return toPublic(rec);
}

export async function deleteUser(id: string): Promise<void> {
  await deleteJSON(NS, id);
}

export async function updatePassword(
  id: string,
  newPassword: string,
): Promise<void> {
  if (newPassword.length < 8) {
    throw new Error("Password must be at least 8 characters");
  }
  const rec = await getJSON<UserRecord>(NS, id);
  if (!rec) throw new Error("User not found");
  rec.passwordHash = await bcrypt.hash(newPassword, 10);
  await setJSON<UserRecord>(NS, id, rec);
}

export async function verifyPassword(
  email: string,
  password: string,
): Promise<UserRecord | null> {
  const user = await getUserByEmail(email);
  if (!user) return null;
  const ok = await bcrypt.compare(password, user.passwordHash);
  return ok ? user : null;
}
