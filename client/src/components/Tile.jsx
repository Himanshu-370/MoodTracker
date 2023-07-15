import React, { useState, useEffect } from "react";
import { Modal, Button, Space } from "antd";
import { Box, Typography, TextField } from "@mui/material";
import { useTheme } from "@emotion/react";
import moment from "moment";
import axios from "axios";

const Tile = ({ index }) => {
  const theme = useTheme();
  const [color, setColor] = useState(() => {
    const storedColor = localStorage.getItem(`tileColor_${index}`);
    return storedColor || "#C9DBB2";
  });
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [activeMood, setActiveMood] = useState(""); // New state to track active mood

  useEffect(() => {
    localStorage.setItem(`tileColor_${index}`, color);
  }, [color, index]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const getDate = (index) => {
    const today = new Date();
    const dayOfYear = index + 1;
    const tileDate = new Date(today.getFullYear(), 0, dayOfYear).toDateString();
    return tileDate;
  };

  const handleTileClick = () => {
    const currentDate = moment().format("YYYY-MM-DD");
    const tileDate = moment(getDate(index)).format("YYYY-MM-DD");
    if (tileDate === currentDate) {
      setOpen(true);
    }
  };

  const handleCloseModal = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const handleOk = () => {
    setConfirmLoading(true);

    const formData = {
      mood: mood,
      note: note,
    };

    axios
      .post("http://localhost:3000/mood", formData)
      .then((response) => {
        setConfirmLoading(false);
        setOpen(false);
        const moodColorMap = {
          "🙁": "red", // Rough day
          "😐": "maroon", // Not good
          "🙂": "#90EE90", // Not bad
          "😄": "#013220", // Good
          "🤗": "#ADD8E6", // Great!
        };
        const selectedColor = moodColorMap[mood] || "#C9DBB2";
        setColor(selectedColor);
        localStorage.setItem(`tileColor_${index}`, selectedColor);
      })
      .catch((error) => {
        console.error(error);
        setConfirmLoading(false);
        setOpen(false);
      });
  };

  const handleMoodClick = (selectedMood) => {
    setMood(selectedMood);
    setActiveMood(selectedMood); // Set the active mood
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
    <div
      className="tile"
      style={{ backgroundColor: color }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTileClick}
    >
      {hovered && <span className="date">{getDate(index)}</span>}
      <Modal
        title={moment().format("YYYY-MM-DD")}
        open={open}
        onOk={handleOk}
        onCancel={handleCloseModal}
        confirmLoading={confirmLoading}
        maskClosable={true}
        footer={[
          <Button key="addMood" onClick={handleOk}>
            Add Mood to Calendar
          </Button>,
        ]}
      >
        <Box>
          <Typography sx={{ fontSize: "1rem" }} marginBottom={1}>
            How was your day today?
          </Typography>
          <Box sx={theme.moodPage.moodBtnBox}>
            {moodIcons.map((icon, i) => (
              <Button
                key={i}
                sx={{
                  ...theme.moodPage.moodBtn,
                  backgroundColor:
                    activeMood === icon.icon ? "#E0E0E0" : "initial", // Add active style
                }}
                onClick={() => handleMoodClick(icon.icon)}
              >
                <Box>{icon.icon}</Box>
                <Box sx={{ color: "black", fontWeight: "400" }} marginTop={1}>
                  {icon.text}
                </Box>
              </Button>
            ))}
          </Box>
          <Box sx={{ width: 500, maxWidth: "100%" }}>
            <Typography
              sx={{ fontSize: "1rem" }}
              marginTop={4}
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
      </Modal>
    </div>
  );
};

export default Tile;
