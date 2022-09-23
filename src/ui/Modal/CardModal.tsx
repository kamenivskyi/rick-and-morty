import { Modal, Typography, Box, CardMedia } from "@mui/material";
import { ICharachter } from "features/charachters/charachterInterface";
import { formatFromUTC } from "utils/date";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

interface ICardModal {
  isOpen: boolean;
  data: ICharachter | null;
  handleClose: () => void;
}
export function CardModal({ isOpen, data, handleClose }: ICardModal) {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia
            component="img"
            height="200"
            image={data?.image}
            alt="green iguana"
            sx={{ marginBottom: "10px" }}
          />
          <Typography
            id="modal-modal-title"
            variant="h6"
            marginBottom="10px"
            component="p"
          >
            {data?.name}
          </Typography>
          <Typography sx={{ mt: 2 }}>Id: {data?.id}</Typography>
          {data?.type && (
            <Typography sx={{ mt: 2 }}>Type: {data?.type}</Typography>
          )}
          {data?.species && (
            <Typography sx={{ mt: 2 }}>Species: {data?.species}</Typography>
          )}
          {data?.status && (
            <Typography sx={{ mt: 2 }}>Status: {data?.status}</Typography>
          )}
          {data?.created && (
            <Typography sx={{ mt: 2 }}>
              Created: {formatFromUTC(data?.created)}
            </Typography>
          )}
        </Box>
      </Modal>
    </div>
  );
}
