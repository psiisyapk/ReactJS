import {useDispatch, useSelector} from "react-redux";
import React, {useCallback} from "react";
import {Checkbox, FormControlLabel, FormGroup} from "@material-ui/core";
import {getProfile} from "../../store/Profile/selector";
import {ShowUser} from "../../store/Profile/actions";

function Profile() {
    const profile = useSelector(getProfile);
    const dispatch = useDispatch();

    const setUser = useCallback(() => {
        dispatch(ShowUser());
    }, [dispatch]);
    return (
        <div style={{marginLeft: 100}}>
            <h4>Profile</h4>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={profile.showName} value={profile.showName} onChange={setUser} />}
                    label="Show name" />
            </FormGroup>
            {profile.showName && <div>{profile.name}</div>}
        </div>
    );
}

export default Profile;