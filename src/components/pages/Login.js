import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
    },
    center: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

export default function Login(props) {
    const classes = useStyles();

    return (
        <div className={classes.center}>
            <Card className={classes.root}>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="250"
                    image={`${process.env.PUBLIC_URL}/images/authen_header.jpg`}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <form className={classes.root} noValidate>
                        <h2>Login</h2>
                        <TextField
                            id="username"
                            margin='normal'
                            required
                            fullWidth
                            label="Username"
                            type="text" />
                        <TextField
                            id="standard-password-input"
                            margin='normal'
                            required
                            fullWidth
                            label="Password"
                            type="password"
                        />
                        <Button
                            style={{marginTop:30}}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary">
                            Sign In
                        </Button>
                        <Button
                            style={{marginTop:10}}
                            onClick={() => props.history.push("/register")}
                            fullWidth
                            size="small"
                            color="primary">
                            Register
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
