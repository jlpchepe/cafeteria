import * as React from "react";
import { CircularProgress } from "@material-ui/core";

export const Loading = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px"
        }}>
            <CircularProgress />
        </div>
    );
};