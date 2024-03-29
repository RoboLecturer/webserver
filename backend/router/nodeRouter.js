import { Router } from "express";
const router = Router();
import { parsePDF, uploadPDF } from "../controller/pdfController.js";
import multer from "multer";
import path from "path";
<<<<<<< HEAD
import { getQuiz,saveQuiz } from "../controller/quizController.js";
=======
import { getQuiz } from "../controller/quizController.js";
>>>>>>> 9be6be8e37649dd3e81210f03e15833a31cf98b5
import {
  addResult,
  resetResults,
  uploadedFileNames,
  insertUser,
  getUsers,
  getResults,
  resetLobby,
  getLeaderboard,
} from "../controller/dbController.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "pdf") {
<<<<<<< HEAD
      cb(null, "../pepperweb/public/");
=======
      cb(null, "../pepperweb/public/uploadedPDFs");
>>>>>>> 9be6be8e37649dd3e81210f03e15833a31cf98b5
    } else if (file.fieldname === "quiz") {
      cb(null, "uploadedQuiz/");
    } else {
      cb(null, false);
    }
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// TODO: call parsePDF once uploadPDF is done

var upload = multer({ storage: storage });
const uploadParams = upload.fields([
  { name: "pdf", maxCount: 1 },
  { name: "quiz", maxCount: 1 },
]);
// upload pdf and quiz to backend
router.post("/upload_pdf", uploadParams, uploadPDF);

// process the pdf (should be called after upload pdf)
router.post("/pdf", parsePDF);
<<<<<<< HEAD

// use filename to get quiz JSON info
router.get("/quiz", getQuiz);
// save quiz from NLP locally
router.post("/saveQuiz",saveQuiz)
=======
// use filename to get quiz JSON info
router.get("/quiz", getQuiz);
>>>>>>> 9be6be8e37649dd3e81210f03e15833a31cf98b5

// list the file names of uploaded pdfs
router.get("/uploadedFileNames", uploadedFileNames);

// reset the Results table when starting a new quiz
router.post("/resetResults", resetResults);
// reset the Students table when starting a new quiz
router.post("/resetLobby", resetLobby);
// insert a new Student into the DB
router.post("/insertUser", insertUser);
router.post("/getUsers", getUsers);
// add a Student's result to the DB
router.post("/addResult", addResult);
// get results
router.get("/getResult", getResults);
// get final leaderboard
router.get("/getLeaderboard", getLeaderboard);

export default router;
