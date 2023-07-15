import { Modal, DatePicker, Space } from "antd";
import { useState } from "react";
import { Typography, Box, Button, TextField } from "@mui/material";

import { useTheme } from "@emotion/react";
import moment from "moment";
import axios from "axios";

const Modalweb = () => {
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
    setDate(date);
    console.log(dateObj, dateString);
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

  return (
    <>
      <Button variant="contained" onClick={showModal}>
        Add Mood to Calendarr
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
          <Typography sx={{ fontSize: "1rem" }} marginBottom={1}>
            Select a date
          </Typography>
          <Space direction="vertical">
            <DatePicker
              defaultValue={moment(new Date(), "DD MMM, YYYY")}
              onChange={onChange}
              style={{ width: "100%" }}
            />
          </Space>
          <Box marginTop={2}>
            <Typography sx={{ fontSize: "1rem" }}>
              How was your day today?
            </Typography>
            <Box sx={theme.moodPage.moodBtnBox}>
              {moodIcons.map((icon, i) => (
                <Button
                  key={i}
                  sx={theme.moodPage.moodBtn} // Add the sx property here
                  onClick={() => setMood(icon.icon)}
                >
                  <Box>{icon.icon}</Box>
                  <Box sx={{ color: "black", fontWeight: "400" }}>
                    {icon.text}
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

export default Modalweb;
