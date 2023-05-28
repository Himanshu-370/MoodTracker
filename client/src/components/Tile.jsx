import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Box, Typography } from "@mui/material";
import Modalweb from "./Mood/Modal";
import { useTheme } from "@emotion/react";

const Tile = ({ index }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false); // Set "open" state to false
  const [color, setColor] = useState("#C9DBB2");
  const [hovered, setHovered] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const getDate = (index) => {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const dayOfYear = index + 1;
    const tileDate = new Date(today.getFullYear(), 0, dayOfYear).toDateString();
    return tileDate;
  };

  const handleTileClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false); // Set modalVisible state to false to close the modal
    setOpen(true);
  };

  const handleOk = () => {
    console.log("OK button clicked");
    handleCloseModal();
  };

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
        title={getDate(index)}
        visible={modalVisible}
        onOk={handleOk}
        okText="Edit Details"
        onCancel={() => setOpen(false)}
        footer={[
          <Button key="cancel" onClick={handleCloseModal}>
            Cancel
          </Button>,
          <Modalweb closeModal={handleCloseModal} key="edit" />,
        ]}
      >
        <Box sx={theme.display.flexDisplayCol}>
          <Typography variant="h6" component="div">
            😄
          </Typography>
          <Typography variant="body1" component="div">
            How is your mood now?
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Tile;
