import fs from "node:fs";
import path from "node:path";

export function clinicLogoExists() {
  return fs.existsSync(
    path.join(process.cwd(), "public", "images", "clinic-logo.png"),
  );
}
