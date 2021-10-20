import {useDispatch, useSelector} from "react-redux";
import {getApiSelector} from "../store/SearchApi/selectors";
import {useCallback, useEffect} from "react";
import React from "react";
import {
    CircularProgress,
    ImageList,
    ImageListItem,
    ImageListItemBar,
} from "@material-ui/core";
import {getApiRequest} from "../store/SearchApi/actions";

export const ApiSearchList = () => {
    const dispatch = useDispatch();
    const results = useSelector(getApiSelector);
    const requestApiSearch = () => {
        dispatch(getApiRequest());
    };

    useEffect(() => {
        requestApiSearch();
    }, []);

    const renderApi = useCallback(
        (rec) => <ImageListItem key={rec.img}>
            <img
                src={`${rec.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${rec.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={rec.name}
                loading="lazy"
            />
            <ImageListItemBar
                title={rec.name}
                subtitle={rec.portrayed}
            />
        </ImageListItem>,
        []
    );

    function Loading() {
        return (
            results.loading ?
                <CircularProgress/> :
                null
        )
    }

    if (results.error) {
        return (
            <>
                <h3>Error</h3>
                <button onClick={requestApiSearch}>Retry</button>
            </>
        );
    }

    return <div style={{ marginLeft: 80}}>
                <Loading />
                <ImageList sx={{ width: 200, height: 450 }} cols={3} rowHeight={1000}>
                        {(results.records || []).map(renderApi)}
                </ImageList>
            </div>
};
