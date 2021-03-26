import React from "react";

export default class ScanScreen extends React.Component() {
    constructor(){
        super();

        this.state={
            hasCameraPermissions : null,
            scanned : false,
            scannedData : '',
            buttonState : 'normal'
        }
    }
}