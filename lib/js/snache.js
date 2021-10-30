/*!
 * SnackBrr v0.1.14

 * Copyright 2021 BENROBO
 * Released under the MIT license
 * 
*/


function $(elm) {
    return document.querySelector(elm)
}

function SnackBar(configDetails) {
    this.showIcon = configDetails.showIcon;
    this.snackbarText = configDetails.snackbarText;
    this.snackbarBg = configDetails.snackbarBg;
    this.snackbarTextColor = configDetails.snackbarTextColor;
    this.iconName = configDetails.iconName;
    this.action = configDetails.action;
    this.handler = configDetails.handler;
    this.actionText = configDetails.actionText;
    this.onlineText = configDetails.onlineText;
    this.iconColor = configDetails.iconColor;
    this.offlineText = configDetails.offlineText;
    this.visibility = configDetails.visibility;
    this.defaultActionText = "Retry"
    this.defaultIconColor = "green"
    this.defaultSnacbarText = "Some dummy text...."
    this.defaultVisibility = false;
    this.defaultSnackbarrBg = "#333"

    this.createContaxionDialog = () => {
        return `
            <div class="snackbar ${this.visibility === true ? 'show' : "hide"}" style="background: ${this.snackbarBg === undefined || this.snackbarBg === "" ? this.defaultSnackbarrBg : this.snackbarBg}">
                <div class="left">
                    ${this.showIcon === true ? `<i class="fas fa-regular fa-${this.iconName} icon" style="color: ${this.iconColor === undefined || this.iconColor === "" ? "#fff" : this.iconColor}"></i>` : ""} 
                    <small style="color: ${this.snackbarTextColor === undefined || this.snackbarTextColor === "" ? "#fff" : this.snackbarTextColor}">${this.snackbarText === undefined || this.snackbarText === "" ? this.defaultSnacbarText : this.snackbarText}</small>
                </div>
                <div class="right snackbar-action">
                   ${this.action === true ? ` <button class="btn snacbar-action-btn">${this.actionText === undefined ? this.defaultActionText : this.actionText}</button>` : ""}
                </div>
            </div>
        `
    }
    this.show = () => {
        this.init()
        let snackbar = $(".snackbar");
        snackbar.classList.remove("hide")
        snackbar.classList.add("show")
    }

    this.hide = () => {
        let snackbar = $(".snackbar");
        if(snackbar === null){
            throw new Error("check the order of the method, .show() must be called before .hide()")
        }
        snackbar.classList.remove("show")
        snackbar.classList.add("hide")
    }
    this.eventHandler = () => {
        let btn = $(".snacbar-action-btn");

        if (btn !== null) {
            btn.onclick = () => {
                this.handler()
            }
        }
    }

    this.init = () => {
        let div = document.createElement("div");
        div.classList.add("snackbar-parent")
        div.innerHTML = this.createContaxionDialog()
        document.body.append(div)
        this.eventHandler()
    }
}