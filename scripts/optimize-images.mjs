import sharp from "sharp";
import { readdir, stat, rename, unlink } from "node:fs/promises";
import path from "node:path";

const PUBLIC = path.resolve(process.cwd(), "public");

const JPG_MAX_WIDTH = 1920;
const JPG_QUALITY = 78;
const PNG_QUALITY = 80;
const WEBP_QUALITY = 72;
const GIF_MAX_WIDTH = 720;

const skip = new Set(["zark.png", "CA_India_Logo.png", "cii.png", "young-indians.png"]);

function pretty(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / 1024 / 1024).toFixed(2) + " MB";
}

async function compressJpeg(file) {
  const tmp = file + ".tmp";
  const before = (await stat(file)).size;
  await sharp(file, { failOn: "none" })
    .rotate()
    .resize({ width: JPG_MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: JPG_QUALITY, mozjpeg: true })
    .toFile(tmp);
  await rename(tmp, file);
  const after = (await stat(file)).size;
  console.log(`JPG  ${path.basename(file)}: ${pretty(before)} -> ${pretty(after)}`);
}

async function compressPng(file) {
  const tmp = file + ".tmp";
  const before = (await stat(file)).size;
  await sharp(file, { failOn: "none" })
    .rotate()
    .resize({ width: JPG_MAX_WIDTH, withoutEnlargement: true })
    .png({ quality: PNG_QUALITY, compressionLevel: 9, palette: true })
    .toFile(tmp);
  await rename(tmp, file);
  const after = (await stat(file)).size;
  console.log(`PNG  ${path.basename(file)}: ${pretty(before)} -> ${pretty(after)}`);
}

async function convertGifToWebp(file) {
  const dest = file.replace(/\.gif$/i, ".webp");
  const before = (await stat(file)).size;
  await sharp(file, { animated: true, failOn: "none" })
    .resize({ width: GIF_MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY, effort: 4 })
    .toFile(dest);
  const after = (await stat(dest)).size;
  console.log(`GIF  ${path.basename(file)} -> ${path.basename(dest)}: ${pretty(before)} -> ${pretty(after)}`);
  await unlink(file);
}

const files = await readdir(PUBLIC);
for (const name of files) {
  if (skip.has(name)) continue;
  const file = path.join(PUBLIC, name);
  const s = await stat(file);
  if (!s.isFile()) continue;
  const ext = path.extname(name).toLowerCase();
  try {
    if (ext === ".jpg" || ext === ".jpeg") {
      if (s.size > 200 * 1024) await compressJpeg(file);
    } else if (ext === ".png") {
      if (s.size > 200 * 1024) await compressPng(file);
    } else if (ext === ".gif") {
      await convertGifToWebp(file);
    }
  } catch (e) {
    console.error(`FAIL ${name}: ${e.message}`);
  }
}
console.log("Done.");
