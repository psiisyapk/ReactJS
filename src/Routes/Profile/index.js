import {useDispatch, useSelector} from "react-redux";
import {CreateUser} from "../../store/actions";
import {useCallback} from "react";
import React from "react";
import {Checkbox, FormControlLabel, FormGroup} from "@material-ui/core";


function Profile() {
    const { showName, name } = useSelector((state) => state);
    const dispatch = useDispatch();

    const setUser = useCallback(() => {
        dispatch(CreateUser());
    }, [dispatch]);
    return (
        <div style={{marginLeft: 100}}>
            <h4>Profile</h4>
            <FormGroup>
                <FormControlLabel control={<Checkbox checked={showName} value={showName} onChange={setUser} />} label="Show name" />
            </FormGroup>
            {showName && <div>{name}</div>}
        </div>
    );
}

export default Profile;