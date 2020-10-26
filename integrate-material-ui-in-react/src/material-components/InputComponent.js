import React from "react";
//button should be imported from the materail core lib
import {
  Button,
  TextField,
  Checkbox,
  Card,
  CardContent,
  Paper,
  Switch,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const InputComponent = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Paper
          variant="outlined"
          style={{
            height: "30px",
            textAlign: "center",
            padding: "6px",
            lineHeight: "30px",
          }}
        >
          Material input examples
        </Paper>
        <div>Buttons</div>
        <div className={classes.root}>
          <Button variant="contained">Default</Button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Link
          </Button>
        </div>
        <div> TextField</div>
        <div>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Standard" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </form>
        </div>
        <div>
          <div> Checkbox</div>
          <div>
            <Checkbox
              checked={true}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <Checkbox
              defaultChecked
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
            <Checkbox
              disabled
              inputProps={{ "aria-label": "disabled checkbox" }}
            />
            <Checkbox
              disabled
              checked
              inputProps={{ "aria-label": "disabled checked checkbox" }}
            />
            <Checkbox
              defaultChecked
              indeterminate
              inputProps={{ "aria-label": "indeterminate checkbox" }}
            />
            <Checkbox
              defaultChecked
              color="default"
              inputProps={{ "aria-label": "checkbox with default color" }}
            />
            <Checkbox
              defaultChecked
              size="small"
              inputProps={{ "aria-label": "checkbox with small size" }}
            />
          </div>
        </div>
        <div>
          <div> Switch</div>
          <div>
            <Switch
              checked={true}
              name="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <Switch
              checked={true}
              color="primary"
              name="checkedB"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <Switch inputProps={{ "aria-label": "primary checkbox" }} />
            <Switch
              disabled
              inputProps={{ "aria-label": "disabled checkbox" }}
            />
            <Switch
              disabled
              checked
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <Switch
              defaultChecked
              color="default"
              inputProps={{ "aria-label": "checkbox with default color" }}
            />
          </div>

          <div>
            <div>Select</div>
            <FormControl>
              <InputLabel htmlFor="age-native-simple">Age</InputLabel>
              <Select
                native
                value={10}
                inputProps={{
                  name: "age",
                  id: "age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InputComponent;
