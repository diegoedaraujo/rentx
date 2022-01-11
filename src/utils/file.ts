import fs from "fs";

export const deleteFile = async (filename: string) => {
  try {
    await fs.promises.stat(filename);
  } catch {
    return;
  }
  //Apaga o arquivo
  await fs.promises.unlink(filename);
};
