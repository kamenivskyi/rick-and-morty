import {
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
} from "@mui/material";
import { ICharachter } from "./charachterInterface";

export function CharachterItem({
  item,
  showAllData,
}: {
  item: ICharachter;
  showAllData: (data: ICharachter) => void;
}) {
  return (
    <Card sx={{ margin: "0 10px 20px 10px" }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontSize={17}>
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: {item.status}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => showAllData(item)} size="small">
          Show more info
        </Button>
      </CardActions>
    </Card>
  );
}
