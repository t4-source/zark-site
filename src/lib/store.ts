import fs from "node:fs/promises";
import path from "node:path";

const DATA_ROOT =
  process.env.ZARK_DATA_DIR ||
  path.resolve(process.cwd(), ".data");

async function ensureDir(p: string) {
  await fs.mkdir(p, { recursive: true });
}

function nsPath(namespace: string) {
  if (!/^[a-z0-9_-]+$/i.test(namespace)) {
    throw new Error("Invalid namespace");
  }
  return path.join(DATA_ROOT, namespace);
}

function keyPath(namespace: string, key: string) {
  if (!/^[a-z0-9_.-]+$/i.test(key)) {
    throw new Error("Invalid key");
  }
  return path.join(nsPath(namespace), key + ".json");
}

export async function getJSON<T>(
  namespace: string,
  key: string,
): Promise<T | null> {
  try {
    const raw = await fs.readFile(keyPath(namespace, key), "utf8");
    return JSON.parse(raw) as T;
  } catch (e: unknown) {
    if ((e as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw e;
  }
}

export async function setJSON<T>(
  namespace: string,
  key: string,
  value: T,
): Promise<void> {
  const dir = nsPath(namespace);
  await ensureDir(dir);
  await fs.writeFile(
    keyPath(namespace, key),
    JSON.stringify(value, null, 2),
    "utf8",
  );
}

export async function deleteJSON(
  namespace: string,
  key: string,
): Promise<void> {
  try {
    await fs.unlink(keyPath(namespace, key));
  } catch (e: unknown) {
    if ((e as NodeJS.ErrnoException).code !== "ENOENT") throw e;
  }
}

export async function listJSON<T>(namespace: string): Promise<T[]> {
  const dir = nsPath(namespace);
  let files: string[] = [];
  try {
    files = await fs.readdir(dir);
  } catch (e: unknown) {
    if ((e as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw e;
  }
  const out: T[] = [];
  for (const f of files) {
    if (!f.endsWith(".json")) continue;
    try {
      const raw = await fs.readFile(path.join(dir, f), "utf8");
      out.push(JSON.parse(raw) as T);
    } catch {
      // skip
    }
  }
  return out;
}

const UPLOAD_DIR =
  process.env.ZARK_UPLOAD_DIR ||
  path.resolve(process.cwd(), "public", "uploads");

export async function saveUpload(
  filename: string,
  bytes: Buffer,
): Promise<string> {
  await ensureDir(UPLOAD_DIR);
  const safe = filename.replace(/[^a-zA-Z0-9._-]/g, "_");
  const ext = path.extname(safe) || ".bin";
  const base = path.basename(safe, ext).slice(0, 40) || "file";
  const unique = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${base}${ext}`;
  await fs.writeFile(path.join(UPLOAD_DIR, unique), bytes);
  return `/uploads/${unique}`;
}
