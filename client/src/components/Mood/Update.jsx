import { Modal, DatePicker, Space } from "antd";
import { useState } from "react";
import { Typography, Box, Button, TextField } from "@mui/material";

import { useTheme } from "@emotion/react";
import axios from "axios";

const Update = ({ index }) => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [date, setDate] = useState(null);
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);

    const formData = {
      mood: mood,
      note: note,
      date: date,
    };

    axios
      .post("http://localhost:3000/mood", formData)
      .then((response) => {
        setConfirmLoading(false);
        setOpen(false);
      })
      .catch((error) => {
        console.error(error);
        setConfirmLoading(false);
        setOpen(false);
      });
  };

  const onChange = (date, dateString) => {
    setDate(dateString);
  };

  const moodIcons = [
    {
      icon: "🙁",
      text: "Rough day",
    },
    {
      icon: "😐",
      text: "Not good",
    },
    {
      icon: "🙂",
      text: "Not bad",
    },
    {
      icon: "😄",
      text: "Good",
    },
    {
      icon: "🤗",
      text: "Great!",
    },
  ];

  const getDate = (index) => {
    const today = new Date();
    const dayOfYear = index + 1;
    const tileDate = new Date(today.getFullYear(), 0, dayOfYear).toDateString();
    return tileDate;
  };

  return (
    <>
      <Button variant="contained" onClick={showModal}>
        Add Mood to Calendar
      </Button>
      <Modal
        title="Add Mood to Calendar"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        okText="Add Mood"
        onCancel={() => setOpen(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { width: "100%", margin: "0" } }}
      >
        <Box>
          <Typography variant="subtitle" onChange={onChange}>
            {getDate(index)}
          </Typography>
          <Box marginTop={2}>
            <Typography sx={{ fontSize: "1rem" }}>Select date:</Typography>
            <DatePicker onChange={onChange} defaultValue={getDate(index)} />
          </Box>
          <Box marginTop={2}>
            <Typography sx={{ fontSize: "1rem" }}>
              How was your day today???
            </Typography>
            <Box sx={theme.moodPage.moodBtnBox}>
              {moodIcons.map((icons, i) => (
                <Button
                  key={i}
                  sx={theme.moodPage.moodBtn}
                  onClick={() => setMood(icons.icon)}
                >
                  <Box>{icons.icon}</Box>
                  <Box sx={{ color: "black", fontWeight: "400" }}>
                    {icons.text}
                  </Box>
                </Button>
              ))}
            </Box>
            <Box sx={{ width: 500, maxWidth: "100%" }}>
              <Typography
                sx={{ fontSize: "1rem" }}
                marginTop={2}
                marginBottom={1}
              >
                Add a note
              </Typography>
              <TextField
                fullWidth
                label="Maybe add a note about your day"
                id="fullWidth"
                multiline
                rows={2}
                InputLabelProps={{
                  style: { fontSize: "0.9rem", color: "#b5b5b5" },
                }}
                onChange={(e) => setNote(e.target.value)}
              />
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Update;
