import { Router } from "express";
// import { getAlbumById, getAllAlbums } from "../controller/album.controller.js";

const router = Router();

// router.get("/", getAllAlbums);
// router.get("/:albumId", getAlbumById);

router.get("/", (req, res) => {
  res.send("Hello World");
});

export default router;
