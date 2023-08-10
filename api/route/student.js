const express = require("express");
const router = express.Router();
const Student = require("../model/student");
const mongoose = require("mongoose");

// api of get request
router.get("/", (req, res, next) => {
  // res.status(200).json({
  //   message: "Welcome to the API student get request",
  // });

  Student.find()
    .then((result) => {
      res.status(200).json({
        studentData: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

// get api with user ID
router.get("/:id", (req, res, next) => {
  console.log(req.params.id);
  Student.findById(req.params.id)
    .then((result) => {
      res.status(200).json({
        student: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

// update using put request

router.put("/:id", (req, res, next) => {
  console.log(req.params.id);
  Student.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
      },
    }
  )
    .then((result) => {
      res.status(200).json({
        updated: result,
      });
    })
    .catch((Err) => {
      console.log(Err);
      res.status(500).json({
        error: err,
      });
    });
});

// post api
router.post("/", (req, res, next) => {
  const student = new Student({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
  });

  student
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        newStudent: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

// delete api with userid
// router.delete('/:id', (req,res,next) => {
//   Student.remove({_id:req.params.id})
//   .then(result=> {
//     res.status(200).json({
//       message:'id deleted',
//       result:result
//     })
//   })
//   .catch(err => {
//     res.status(500).json({
//       err:err
//     })
//   })
// })

router.delete("/:id", (req, res, next) => {
  const studentId = req.params.id;

  Student.findByIdAndRemove(studentId)
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "Student deleted successfully",
          deletedStudent: result,
        });
      } else {
        res.status(404).json({
          message: "Student not found",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
