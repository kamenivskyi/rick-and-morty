import {
  Box,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { IWatchListItem } from "./watchListInterfaces";

interface IProps {
  items: IWatchListItem[];
  handleRemoveItem: (id: string) => void;
  toggleCompleted: (id: string) => void;
}
export function WatchListItems({
  items = [],
  handleRemoveItem,
  toggleCompleted,
}: IProps) {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 500, margin: "auto" }}>
      <List>
        {items.map((item: IWatchListItem, index) => {
          return (
            <ListItem
              secondaryAction={
                <IconButton
                  onClick={() => handleRemoveItem(item.id)}
                  edge="end"
                  aria-label="delete"
                  title="Delete item"
                >
                  <DeleteIcon color="error" />
                </IconButton>
              }
              key={item.id}
            >
              <ListItemButton
                role={undefined}
                onClick={() => toggleCompleted(item.id)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={item.completed}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText primary={item.text} secondary={false} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
