import { S3Client } from "@aws-sdk/client-s3";
import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import crypto from "crypto";

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: process.env.AWS_REGION,
});

const s3 = new S3Client({});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.AWS_BUCKET as string,
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key(req, file, cb) {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);
        const hashValue = hash.toString("hex");
        const fileName = `${hashValue}-${file.originalname}`;
        cb(null, fileName);
      });
    },
  }),
});

export default upload;
